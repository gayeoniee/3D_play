import * as THREE from 'three';
import './style.css';
import './game-ui.css';
import './village.css';
import './village-updates.css';
import './cozy.css';
import './village-home.css';
import { dressEgg } from './cosmetics.js';
import { createSound } from './sound.js';
import { moveActor, collide } from './physics.js';
import { maps, createMap, disposeMap } from './maps.js';
import { skills, activateSkill, tickSkill } from './skills.js';
import { recordFalls, completeRanks, standings } from './ranking.js';
import { createEffects } from './effects.js';
import { createMobileControls } from './mobile.js';
import { eggs as friends } from './eggs.js';
import { createVillage } from './village.js';
const $ = (id) => document.getElementById(id);
const escapeText=text=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sound=createSound();

let selected=0, mode='lobby', previousMode='playing', actors=[], elapsed=0, count=3, radius=maps[0].radius, ready=false;
let renderer, scene, camera, ice, marker, mapRoot, effects;
let village,view=null;
let hudTimer=0,contextLost=false,villageVisible=true,villageFrameTime=0;
const lowPower=navigator.maxTouchPoints>0||matchMedia('(pointer: coarse)').matches;
const getPlayer=()=>actors.find(a=>a.index===selected);
let calloutTime=0, rankSignature='';
let mapIndex=0;
const currentMap=()=>maps[mapIndex];
const keys=new Set(), controls=new Set(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','Space','Escape']);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clock=new THREE.Clock();
const mobile=createMobileControls({state:()=>mode,pause:()=>pause(),resume:()=>resume(),lobby:()=>lobby()});
const pickButtons=[];
const mapButtons=maps.map((map,index)=>{
 const button=document.createElement('button');button.className='map-option';button.type='button';
 button.dataset.map=map.id;button.setAttribute('aria-label',map.name+' 선택');
 button.innerHTML='<span class="map-icon">'+map.icon+'</span><strong>'+map.name+'</strong><small>'+map.description+'</small>';
 button.addEventListener('click',()=>{if(mode!=='lobby')return;mapIndex=index;loadMap();resetActors();});
 $('maps').append(button);return button;
});
friends.forEach((f,i)=>{
 const button=document.createElement('button');
 button.className='character';button.type='button';button.setAttribute('aria-label',f.name+' 선택');
 button.innerHTML='<span class="mini-egg" style="--egg:'+f.color+'"></span>'+f.name;
 button.addEventListener('click',()=>{if(mode==='lobby'&&village?.owns(i)){selected=i;village.select(i);updateSelection();resetActors();}});
 $('characters').append(button);pickButtons.push(button);
});
function updateSelection(){
 mapButtons.forEach((b,i)=>{b.classList.toggle('selected',mapIndex===i);b.setAttribute('aria-pressed',String(mapIndex===i));b.disabled=mode!=='lobby';});
 pickButtons.forEach((b,i)=>{b.hidden=village?!village.owns(i):i!==selected;b.classList.toggle('selected',selected===i);b.setAttribute('aria-pressed',String(selected===i));b.disabled=mode!=='lobby';});
 $('selected-name').textContent=village?.name(selected)||friends[selected].name;
 $('selected-description').textContent=friends[selected].rarity+' · 파워 '+friends[selected].power+' / 이동 '+friends[selected].speed+' / 버티기 '+friends[selected].weight;
 $('selected-dot').style.background=friends[selected].color;
 const skill=skills[selected];
 $('selected-skill-icon').textContent=skill.icon;$('selected-skill-name').textContent=skill.name;
 $('selected-skill-copy').textContent=skill.description;$('skill-hud-name').textContent=skill.name;
 $('skill-button').style.setProperty('--skill-color',skill.color);
 $('skill-button').setAttribute('aria-label',skill.name+' 사용');
}
function loadMap(){
 if(mapRoot)disposeMap(mapRoot);
 const map=currentMap(),built=createMap(map);mapRoot=built.root;ice=built.platform;scene.add(mapRoot);
 scene.background.set(map.background);document.querySelector('.arena').dataset.theme=map.id;
 document.querySelector('.arena-caption').textContent='0'+(mapIndex+1)+' / '+map.name;
 $('map-feel').textContent=map.feel;
 renderer.domElement.setAttribute('aria-label','계란 캐릭터 여섯 마리와 '+map.name+' 경기장');
}
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.78,...extra});
const sphere=new THREE.SphereGeometry(1,16,12);
const eggGeometry=new THREE.SphereGeometry(1,24,20);
const eggPoints=eggGeometry.attributes.position;
for(let i=0;i<eggPoints.count;i++){const y=eggPoints.getY(i),taper=1-.16*y;eggPoints.setXYZ(i,eggPoints.getX(i)*.53*taper,y*.68,eggPoints.getZ(i)*.46*taper);}eggGeometry.computeVertexNormals();
const sharedGeometry=new Set([sphere,eggGeometry]);
function ball(parent, material, pos, scale){
 const mesh=new THREE.Mesh(sphere,material);mesh.position.set(...pos);mesh.scale.set(...scale);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
function makeEgg(index){
 const f=friends[index], root=new THREE.Group(), body=new THREE.Group();root.add(body);
 const shell=mat(f.color), white=mat('#fff9ed'), dark=mat('#37453b'), cheek=mat('#e49b91');
 const egg=new THREE.Mesh(eggGeometry,shell);egg.position.y=.88;egg.castShadow=true;egg.receiveShadow=true;body.add(egg);
 const feet=[ball(body,shell,[-.25,.14,.13],[.17,.13,.25]),ball(body,shell,[.25,.14,.13],[.17,.13,.25])];
 const arms=[ball(body,shell,[-.56,.61,.02],[.14,.24,.14]),ball(body,shell,[.56,.61,.02],[.14,.24,.14])];
 arms[0].rotation.z=-.4;arms[1].rotation.z=.4;
 const eyes=[];[-1,1].forEach(s=>{const eye=ball(body,dark,[s*.17,1,.419],[.047,.065,.025]),shine=ball(body,white,[s*.17-.011,1.023,.441],[.013,.017,.008]);eyes.push({eye,shine});ball(body,cheek,[s*.29,.84,.385],[.073,.036,.017]);});
 const smileCurve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.06,.85,.461),new THREE.Vector3(0,.80,.475),new THREE.Vector3(.06,.85,.461));
 const mouth=new THREE.Mesh(new THREE.TubeGeometry(smileCurve,12,.012,6,false),dark);body.add(mouth);
 if(f.accent==='sprout'){
 const green=mat('#78946c');
 const leaf=ball(body,green,[.1,1.57,0],[.19,.055,.09]);leaf.rotation.z=.55;
 const leaf2=ball(body,green,[-.09,1.55,0],[.14,.05,.08]);leaf2.rotation.z=-.4;
 } else if(f.accent==='bow'){
 const ribbon=mat('#d66e7d');[-1,1].forEach(s=>{const b=ball(body,ribbon,[s*.12,1.55,0],[.14,.095,.09]);b.rotation.z=s*.3;});ball(body,ribbon,[0,1.55,.015],[.06,.065,.08]);
 } else if(f.accent==='tuft'){ball(body,shell,[.06,1.55,0],[.08,.16,.08]).rotation.z=-.4;}
 else if(f.accent==='ears'){[-1,1].forEach(s=>ball(body,shell,[s*.25,1.57,0],[.13,.25,.12]).rotation.z=-s*.2);}
 else if(f.accent==='leaf'){const leaf=ball(body,mat('#779b69'),[.06,1.61,0],[.09,.23,.07]);leaf.rotation.z=-.7;}
 else if(f.accent==='crown'){const gold=mat('#e9c56d');for(let i=-1;i<=1;i++){const point=new THREE.Mesh(new THREE.ConeGeometry(.09,.22,5),gold);point.position.set(i*.15,1.65,0);body.add(point);}ball(body,gold,[0,1.52,0],[.28,.06,.17]);}
 else if(f.accent==='crystal'||f.accent==='star'||f.accent==='bolt'){const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.17),mat(f.accent==='crystal'?'#e6ffff':'#ffe3a2'));gem.position.set(0,1.63,0);if(f.accent==='bolt')gem.scale.set(.65,1.5,.6);body.add(gem);}
 else if(f.accent==='moon'){const moon=new THREE.Mesh(new THREE.TorusGeometry(.15,.045,8,20,Math.PI*1.4),mat('#f6e5a8'));moon.position.set(0,1.64,0);moon.rotation.z=.8;body.add(moon);}
 const aura=new THREE.Mesh(new THREE.RingGeometry(.68,.75,48),new THREE.MeshBasicMaterial({color:skills[index].color,transparent:true,opacity:.75,side:THREE.DoubleSide,depthWrite:false}));
 aura.rotation.x=-Math.PI/2;aura.position.y=.045;aura.visible=false;root.add(aura);
 const shield=new THREE.Mesh(new THREE.SphereGeometry(.83,24,16),new THREE.MeshBasicMaterial({color:'#f9e6bc',transparent:true,opacity:.18,depthWrite:false}));
 shield.position.y=.8;shield.visible=false;root.add(shield);
 root.userData={body,feet,arms,eyes,aura,shield};return root;
}
function init(){
 scene=new THREE.Scene();scene.background=new THREE.Color('#dcebe5');
 camera=new THREE.OrthographicCamera(-9,9,7,-7,.1,100);camera.position.set(0,13,17);camera.lookAt(0,0,0);
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
 renderer.setPixelRatio(Math.min(devicePixelRatio,lowPower?1.5:2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
 $('scene').appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','파스텔 계란 캐릭터 여섯 마리와 원형 얼음섬');renderer.domElement.setAttribute('role','img');
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();contextLost=true;if(mode==='playing'||mode==='countdown')pause();for(const id of ['load-error','village-error']){$(id).hidden=false;$(id).querySelector('h2').textContent='화면을 다시 준비하고 있어요';$(id).querySelector('p').textContent='경기는 잠시 멈췄어요. 복구가 오래 걸리면 새로고침해 주세요. 저장한 마을은 유지돼요.';}});
 renderer.domElement.addEventListener('webglcontextrestored',()=>{contextLost=false;$('load-error').hidden=true;$('village-error').hidden=true;resize();});
 for(const id of ['load-error','village-error']){const button=document.createElement('button');button.className='primary';button.textContent='새로고침';button.addEventListener('click',()=>location.reload());$(id).querySelector('.result-card').append(button);}
 scene.add(new THREE.HemisphereLight('#fff8e9','#89a9a3',3));
 const sun=new THREE.DirectionalLight('#fff9e8',3.4);sun.position.set(-7,14,8);sun.castShadow=true;sun.shadow.mapSize.set(lowPower?1024:2048,lowPower?1024:2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.normalBias=.04;sun.shadow.bias=-.0003;scene.add(sun);
 loadMap();
 marker=new THREE.Group();
 const playerRing=new THREE.Mesh(new THREE.RingGeometry(.68,.73,48),new THREE.MeshBasicMaterial({color:'#cb9839',side:THREE.DoubleSide}));playerRing.rotation.x=-Math.PI/2;marker.add(playerRing);
 const arrow=new THREE.Mesh(new THREE.ConeGeometry(.12,.23,3),new THREE.MeshBasicMaterial({color:'#c28c2c'}));arrow.rotation.x=Math.PI;arrow.position.y=2.1;marker.add(arrow);scene.add(marker);
 const aim=new THREE.Group(),tip=new THREE.Mesh(new THREE.ConeGeometry(.105,.3,3),new THREE.MeshBasicMaterial({color:'#b38d3b'}));tip.rotation.x=Math.PI/2;aim.add(tip);marker.add(aim);marker.userData.aim=aim;
 const observer=new ResizeObserver(resize);observer.observe($('scene'));observer.observe($('village-scene'));
 new IntersectionObserver(entries=>{villageVisible=entries[0].isIntersecting;}).observe($('village-scene'));
 effects=createEffects(scene,reduced);
 ready=true;
 village=createVillage({makeEgg,friends,reduced,shadowSize:lowPower?1024:2048,onExternalChange:()=>{if(mode==='playing'||mode==='countdown')pause();},onSelect:index=>{selected=index;updateSelection();},onPlay:index=>{selected=index;showPage('arena');}});
 selected=village.selected;resetActors();showPage(location.hash==='#arena'?'arena':'village',false);requestAnimationFrame(frame);
}
function showPage(next,changeHash=true){
 if(!ready||!village||view===next)return;
 if(view==='arena')lobby();
 view=next;villageVisible=true;villageFrameTime=0;village.setActive(next==='village');keys.clear();
 $('village-page').hidden=next!=='village';$('battle-page').hidden=next!=='arena';
 $(next==='village'?'village-scene':'scene').append(renderer.domElement);
 renderer.domElement.setAttribute('aria-label',next==='village'?'내 달걀들이 산책하는 3D 동글 마을':'내 달걀로 출전하는 밀어내기 경기장');
 $('nav-village').classList.toggle('active',next==='village');$('nav-battle').classList.toggle('active',next==='arena');
 $('nav-village').setAttribute('aria-current',next==='village'?'page':'false');$('nav-battle').setAttribute('aria-current',next==='arena'?'page':'false');
 if(next==='arena')lobby();resize();
 if(changeHash&&location.hash!=='#'+next)location.hash=next;
 window.scrollTo(0,0);
}
function resize(){
 if(!renderer)return;const {width,height}=$(view==='village'?'village-scene':'scene').getBoundingClientRect();if(width<=0||height<=0)return;renderer.setSize(width,height,false);
 if(view==='village'){village.resize(width,height);return;}
 const aspect=width/height,halfW=Math.max(8.8,7*aspect),halfH=halfW/aspect;
 camera.left=-halfW;camera.right=halfW;camera.top=halfH;camera.bottom=-halfH;camera.updateProjectionMatrix();
}
function resetActors(){
 if(!ready)return;
 const geometries=new Set(),materials=new Set();actors.forEach(a=>{scene.remove(a.mesh);a.mesh.traverse(o=>{if(o.geometry&&!sharedGeometry.has(o.geometry))geometries.add(o.geometry);if(o.material)materials.add(o.material);});});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
 radius=currentMap().radius;ice.scale.set(1,1,1);
 effects.reset();rankSignature='';calloutTime=0;$('skill-callout').hidden=true;$('spectator').hidden=true;
 const opponents=friends.map((_,i)=>i).filter(i=>i!==selected);
 for(let i=opponents.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opponents[i],opponents[j]]=[opponents[j],opponents[i]];}
 actors=[selected,...opponents.slice(0,5)].map((i,slot)=>{const f=friends[i],angle=slot*Math.PI/3+Math.PI/2;const x=Math.cos(angle)*radius*.45,z=Math.sin(angle)*radius*.45;const mesh=makeEgg(i);if(i===selected)dressEgg(mesh,village?.outfit(i)||'none');scene.add(mesh);mesh.position.set(x,.1,z);
 return {index:i,mesh,x,z,vx:0,vz:0,playerControlled:i===selected,power:f.power/100*(i===selected?1:.82),moveSpeed:f.speed/100,weight:f.weight/100,alive:true,rank:null,eliminatedAt:null,fall:0,cooldown:0,dashTime:0,impact:0,stagger:0,shield:0,haste:0,whirl:0,slow:0,echo:0,skillTime:0,dx:0,dz:-1,aiTime:0,target:null};});
 marker.visible=true;updateMarker();updateSelection();
}
function updateMarker(){const p=getPlayer();if(!p)return;marker.visible=p.alive;marker.position.set(p.x,.12,p.z);const aim=marker.userData.aim;aim.position.set(p.dx*.95,.035,p.dz*.95);aim.rotation.y=Math.atan2(p.dx,p.dz);}
function start(){
 if(!ready||!village.owns(selected)||view!=='arena')return;resetActors();elapsed=0;count=3;mode='countdown';keys.clear();$('overlay').hidden=true;$('countdown').hidden=false;$('countdown').textContent='3';
 $('skill-button').hidden=false;$('result-ranks').hidden=true;
 document.querySelector('.pick-card').hidden=true;
 $('phase').textContent='준비, 동글!';$('start').disabled=true;$('start').textContent='경기 중이에요';$('pause').disabled=false;
 document.querySelector('.play-card').hidden=true;$('live-card').hidden=false;$('arena-hint').textContent='금색 표시가 내 동글이예요';updateSelection();updateHud();
 mobile.begin();
}
function lobby(){
 mobile.end();
 mode='lobby';keys.clear();$('overlay').hidden=true;$('countdown').hidden=true;$('phase').textContent='연습 준비';$('arena-hint').textContent='마음에 드는 동글이를 골라주세요';
 $('start').disabled=false;$('start').innerHTML='한 판 시작하기 <span>↗</span>';$('pause').disabled=true;
 document.querySelector('.play-card').hidden=false;$('live-card').hidden=true;resetActors();
 $('skill-button').hidden=true;$('result-ranks').hidden=true;
 document.querySelector('.pick-card').hidden=false;
}
function pause(){
 if(mode==='playing'||mode==='countdown'){mobile.reset();$('result-ranks').hidden=true;}
 if(mode==='playing'||mode==='countdown'){previousMode=mode;mode='paused';keys.clear();$('countdown').hidden=true;$('overlay').hidden=false;$('result-tag').textContent='TIME TO REST';$('result-title').textContent='잠깐 쉬어가요';$('result-copy').textContent='동글이들도 잠시 숨을 고르는 중이에요.';$('resume').innerHTML='계속하기 <span>→</span>';$('phase').textContent='쉬는 중';}
 else if(mode==='paused')resume();
}
function resume(){if(document.querySelector('dialog[open]'))return;if(mode==='paused'){mode=previousMode;$('overlay').hidden=true;$('countdown').hidden=mode!=='countdown';$('phase').textContent=mode==='playing'?'동글 소동 진행 중':'준비, 동글!';}else if(mode==='ended')start();}
function finish(title,copy){
 if(mode==='ended')return;
 mobile.reset();
 completeRanks(actors);updateRankings();$('result-ranks').hidden=false;$('skill-button').disabled=true;$('skill-callout').hidden=true;$('spectator').hidden=true;
 const reward=village.recordMatch(getPlayer().rank);copy+=' 별조각 +'+reward.shards+'!'+(reward.victory?' 누적 3승 보상! 뽑기권 +1장!':'')+(reward.daily?' 오늘 3판 완료! 뽑기권 +1장!':'');if(getPlayer().rank===1)sound.win();
 mode='ended';keys.clear();$('overlay').hidden=false;$('result-tag').textContent='A LITTLE HAPPY ENDING';$('result-title').textContent=title;$('result-copy').textContent=copy;$('resume').innerHTML='한 판 더! <span>↗</span>';$('phase').textContent='경기 종료';$('pause').disabled=true;updateHud();
}
function dash(a){
 if(a.index===selected){
 const ix=Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));
 const iz=Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));
 const mx=mobile.vector.x||ix,mz=mobile.vector.z||iz;
 const length=Math.hypot(mx,mz);if(length){a.dx=mx/length;a.dz=mz/length;}
 }
 if(mode!=='playing'||!activateSkill(a,actors))return;
 const skill=skills[a.index];
 if(a.index===selected)sound.skill(skill.kind);
 effects.burst(a.x,a.z,skill.color,[1.3,1.8,2.8,1.1,2.5,2][skill.kind],a.dx,a.dz,skill.kind===5);
 if(a.index===selected){calloutTime=.85;$('skill-callout').textContent=skill.icon+' '+skill.name;$('skill-callout').style.color=skill.color;$('skill-callout').hidden=false;}
 if(a.index===selected)updateHud();
}
function showImpact(hit){
 effects.burst(hit.x,hit.z,hit.color||(hit.dash?'#efbd56':'#cfa04e'),hit.dash?1.4:Math.min(1.15,.55+(hit.strength||1)*.06),hit.dx||0,hit.dz||0,true);
 if(hit.indices?.includes(selected))sound.hit(hit.strength);
}
function updateRankings(){
 const signature=actors.map(a=>a.rank??'-').join(',');if(signature===rankSignature)return;rankSignature=signature;
 const rows=standings(actors).map(a=>{
 const tied=a.rank!==null&&actors.filter(b=>b.rank===a.rank).length>1;
 return '<li class="'+(a.index===selected?'my-rank':'')+'"><b>'+(a.rank===null?'생존':(tied?'공동 ':'')+a.rank+'위')+'</b><i style="background:'+friends[a.index].color+'"></i><span>'+escapeText(a.index===selected?village.name(a.index):friends[a.index].name)+(a.index===selected?' <small>나</small>':'')+'</span><small>'+(a.rank===null?'경기 중':a.alive?'끝까지 생존':a.eliminatedAt.toFixed(1)+'초')+'</small></li>';
 }).join('');$('live-ranks').innerHTML=rows;$('result-ranks').innerHTML=rows;
}
function updateHud(){
 const n=actors.filter(a=>a.alive).length;$('remaining').innerHTML=n+'<small> / 6</small>';
 const time=Math.max(0,Math.ceil(90-elapsed));$('timer').textContent=String(Math.floor(time/60)).padStart(2,'0')+':'+String(time%60).padStart(2,'0');
 const cd=getPlayer()?.cooldown||0;$('dash-status').textContent=cd>0?cd.toFixed(1)+'초':'준비!';$('cooldown-fill').style.width=(1-cd/3)*100+'%';
 const player=getPlayer(),available=mode==='playing'&&player?.alive;
 $('skill-button').disabled=!available||cd>0;$('skill-button').classList.toggle('ready',available&&cd===0);
 $('skill-seconds').textContent=!player?.alive?'탈락':mode==='countdown'?'대기':cd>0?cd.toFixed(1):'준비!';
 $('skill-wheel').style.setProperty('--progress',(1-cd/3)*360+'deg');
 $('mobile-score').textContent=$('timer').textContent+' · '+n+'명 생존'+(!player?.alive?' · 내 순위 '+player.rank+'위':'');
 updateRankings();
 $('match-tip').textContent=elapsed>60?'발판이 작아지고 있어요. 가운데로 모여요!':currentMap().feel;
}
function animateFall(a,dt){
 a.fall+=dt;
 if(!a.cracked&&a.fall>=.18){a.cracked=true;effects.crack(a.x,a.z,friends[a.index].color);}
 a.mesh.position.y=.1-4*a.fall*a.fall;
 if(!reduced){a.mesh.rotation.z=a.fall*1.6;a.mesh.userData.body.scale.set(1+a.fall,Math.max(.6,1-a.fall),1+a.fall);}
 a.mesh.visible=a.fall<.18;
}
function step(dt){
 effects.update(dt);if(calloutTime>0){calloutTime=Math.max(0,calloutTime-dt);if(calloutTime===0)$('skill-callout').hidden=true;}
 elapsed+=dt;radius=currentMap().radius-Math.max(0,elapsed-60)*.075;ice.scale.set(radius/currentMap().radius,1,radius/currentMap().radius);
 for(const a of actors){
 if(!a.alive){animateFall(a,dt);continue;}
 tickSkill(a,actors,dt);
 let ix=0,iz=0;
 if(a.index===selected){ix=mobile.vector.x||Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));iz=mobile.vector.z||Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));}
 else{
 a.aiTime-=dt;
 if(a.aiTime<=0||!a.target?.alive){const others=actors.filter(b=>b.alive&&b!==a);a.target=others.sort((b,c)=>Math.hypot(a.x-b.x,a.z-b.z)-Math.hypot(a.x-c.x,a.z-c.z))[Math.random()<.2?Math.min(1,others.length-1):0];a.aiTime=.4+Math.random()*.7;}
 const target=a.target;
 const dist=Math.hypot(a.x,a.z);
 if(dist>radius-1.2){ix=-a.x*.9-a.vx*.9;iz=-a.z*.9-a.vz*.9;}
 else if(target){ix=target.x-a.x-a.vx*.22;iz=target.z-a.z-a.vz*.22;}
 }
 const length=Math.hypot(ix,iz);if(length>0){a.dx=ix/length;a.dz=iz/length;const strength=a.index===selected?Math.max(1,length):length;ix/=strength;iz/=strength;}
 if(a.index!==selected&&elapsed>4&&a.target?.alive&&Math.hypot(a.target.x-a.x,a.target.z-a.z)<(skills[a.index].kind===5?3.4:2.6)&&a.cooldown===0&&Math.random()<dt*.55)dash(a);
 const accel=a.index===selected?8:4.8;
 moveActor(a,ix,iz,accel,dt,currentMap().drag);
 }
 for(let i=0;i<actors.length;i++)for(let j=i+1;j<actors.length;j++){
 const hit=collide(actors[i],actors[j],currentMap().bounce);if(hit)showImpact(hit);
 }
 const fallen=actors.filter(a=>a.alive&&Math.hypot(a.x,a.z)>radius+.08);
 recordFalls(actors,fallen,elapsed);
 for(const a of fallen){
   effects.burst(a.x,a.z,friends[a.index].color,1.25);a.mesh.userData.aura.visible=false;a.mesh.userData.shield.visible=false;
   if(a.index===selected){$('spectator').hidden=false;$('spectator').textContent='내 순위 '+a.rank+'위 · 남은 친구들을 관전 중';$('arena-hint').textContent='ESC로 쉬거나 다른 맵을 고를 수 있어요';}
 }
 for(const a of actors){
 if(!a.alive)continue;
 if(a.skillHit){showImpact(a.skillHit);a.skillHit=null;}
 a.trail=(a.trail||0)-dt;if(!reduced&&(a.dashTime>0||a.haste>0)&&a.trail<=0){effects.burst(a.x-a.dx*.35,a.z-a.dz*.35,skills[a.index].color,.3,-a.dx,-a.dz,true);a.trail=.12;}
 a.mesh.position.set(a.x,.1,a.z);
 const body=a.mesh.userData.body;
 a.mesh.userData.aura.visible=a.skillTime>0;
 a.mesh.userData.aura.scale.setScalar(a.whirl>0?3.2:1);
 a.mesh.userData.shield.visible=a.shield>0;
 const squash=reduced?0:Math.sin(a.impact/.24*Math.PI)*(.18+(a.hitStrength||0)*.15);
 body.scale.set(1+squash*.6,1-squash,1+squash*.6);
 body.position.y=0;
 body.rotation.z=reduced?0:-a.vx*.035;body.rotation.x=reduced?0:a.vz*.025;
 const walk=reduced?0:Math.sin(elapsed*13+a.index)*Math.min(.11,Math.hypot(a.vx,a.vz)*.025);
 a.mesh.userData.feet[0].position.y=.14+walk;a.mesh.userData.feet[1].position.y=.14-walk;
 }
 updateMarker();hudTimer-=dt;if(hudTimer<=0){updateHud();hudTimer=.05;}
 const alive=actors.filter(a=>a.alive);
 if(alive.length<=1||elapsed>=90){
 completeRanks(actors);const rank=getPlayer().rank,tied=actors.filter(a=>a.rank===rank).length>1;
 finish((tied?'공동 ':'')+rank+'위! '+(rank===1?'왕동글 탄생!':'잘 버텼어요!'),alive.length>1?'시간 종료! 살아남은 친구들은 공동 1위예요.':alive.length===1?friends[alive[0].index].name+'의 승리! 다음 판에도 도전해요.':'마지막 동글이들이 함께 떨어졌어요. 같은 순간 탈락은 공동 순위예요.');
 }
}
let accumulator=0;
function frame(){
 const dt=Math.min(clock.getDelta(),.05);
 if(contextLost||document.hidden){requestAnimationFrame(frame);return;}
 if(view==='village'){if(villageVisible){villageFrameTime+=dt;if(!lowPower||villageFrameTime>=1/30){village.update(villageFrameTime);villageFrameTime=0;renderer.render(village.scene,village.camera);}}requestAnimationFrame(frame);return;}
 if(mode==='countdown'){count-=dt;$('countdown').textContent=Math.max(1,Math.ceil(count));if(count<=0){mode='playing';$('countdown').hidden=true;$('phase').textContent='동글 소동 진행 중';}}
 if(mode==='playing'){accumulator+=dt;while(accumulator>=1/120&&mode==='playing'){step(1/120);accumulator-=1/120;}}else accumulator=0;
 if(mode==='lobby'&&!reduced){for(const a of actors){a.mesh.userData.body.position.y=Math.sin(clock.elapsedTime*1.6+a.index)*.035;}}
 if(mode==='ended'){effects.update(dt);for(const a of actors)if(!a.alive&&a.fall<1)animateFall(a,dt);}
 renderer.render(scene,camera);requestAnimationFrame(frame);
}
window.addEventListener('keydown',e=>{if(view!=='arena'||!controls.has(e.code)||document.querySelector('dialog[open]'))return;
 if(e.target instanceof HTMLElement&&e.target.closest('button')&&(e.code==='Space'||e.code==='Escape')){if(e.code==='Space')return;}
 e.preventDefault();if(e.code==='Escape'&&!e.repeat){pause();return;}keys.add(e.code);if(e.code==='Space'&&!e.repeat&&mode==='playing')dash(getPlayer());});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{keys.clear();if(mode==='playing'||mode==='countdown')pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&(mode==='playing'||mode==='countdown'))pause();});
$('start').addEventListener('click',()=>{start();$('start').blur();});$('pause').addEventListener('click',()=>{pause();$('pause').blur();});$('resume').addEventListener('click',()=>{resume();$('resume').blur();});$('back').addEventListener('click',lobby);
$('skill-button').addEventListener('click',()=>{dash(getPlayer());$('skill-button').blur();});
$('skill-button').addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&mode==='playing'){e.preventDefault();dash(getPlayer());}});
$('nav-village').addEventListener('click',()=>showPage('village'));
$('nav-battle').addEventListener('click',()=>showPage('arena'));
$('result-home').addEventListener('click',()=>showPage('village'));
window.addEventListener('hashchange',()=>showPage(location.hash==='#arena'?'arena':'village',false));
$('help').addEventListener('click',()=>{if(mode==='playing'||mode==='countdown')pause();$('help-dialog').showModal();});
$('close-help').addEventListener('click',()=>$('help-dialog').close());$('got-it').addEventListener('click',()=>$('help-dialog').close());
updateSelection();
try{init();}catch(error){console.error(error);$('load-error').hidden=false;$('village-error').hidden=false;$('start').disabled=true;}
// Deterministic browser checks are available only on the local Vite development server.
if(import.meta.env.DEV&&new URLSearchParams(location.search).has('test')){
 window.__gameTest={
 snapshot:()=>({view,selected,village:village.snapshot(),mode,elapsed,radius,camera:camera.position.toArray(),sound:sound.enabled,contextLost,render:{triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,pixelRatio:renderer.getPixelRatio()},actors:actors.map(({index,x,z,vx,vz,alive,rank,cooldown,shield,haste,whirl,impact,mesh})=>({index,x,z,vx,vz,alive,rank,cooldown,shield,haste,whirl,impact,outfit:mesh.userData.outfit,scale:mesh.userData.body.scale.toArray()})),joystick:{...mobile.vector}}),
 arrange:items=>items.forEach(({index,...values})=>Object.assign(actors.find(a=>a.index===index),values)),
 advance:seconds=>{for(let t=0;t<seconds&&mode==='playing';t+=1/120)step(1/120);},
 advanceVillage:seconds=>{for(let t=0;t<seconds;t+=.1)village.update(.1);},
 };
}
