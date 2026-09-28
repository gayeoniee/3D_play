import * as THREE from 'three';
import {createExplorationWorld,destinations,walkAndPush,worldBounds} from './exploration-world.js';
import {collectStarFlower,readExploration,explorationDay} from './exploration-state.js';
import {createExplorationGear} from './exploration-gear.js';
import {createTravelGuide} from './travel-guide.js';
import {speciesHomes} from './nature-state.js';

export function createExploration({scene,root,residents,data,container,reduced,persist,refresh,nature,onExit}){
 const camera=new THREE.PerspectiveCamera(48,1,.1,180),keys=new Set(),stick={x:0,y:0};
 let running=false,player=null,navigation,yaw=.58,time=0,pointer=null,near=null,lastDay='',origin=null;
 let world=null,mapIndex=0,origins=[],mapClock=0,messageUntil=0,goal='butterfly';const homeBackground=scene.background.clone();
 const gear=createExplorationGear(scene,reduced);
 const target=new THREE.Vector3(),look=new THREE.Vector3(),offset=new THREE.Vector3();
 const panel=document.createElement('div');panel.className='explore-ui';panel.hidden=true;
 panel.innerHTML='<div class="explore-heading"><div><span>작은 섬 산책</span><strong id="explore-progress">오늘의 별꽃 0 / 5</strong><small>꽃마다 ✦ 10 · 다 모으면 추가 ✦ 50</small></div><button id="explore-exit">마을로 돌아가기</button></div><p id="explore-message" role="status">반짝이는 별꽃을 찾아 가까이 가 보세요.</p><div class="explore-camera"><button id="explore-left" aria-label="시점 왼쪽으로 돌리기">↶</button><span>시점</span><button id="explore-right" aria-label="시점 오른쪽으로 돌리기">↷</button></div><div id="explore-stick" aria-label="드래그해서 이동" role="group"><span></span><small>이동</small></div><button id="explore-action" disabled>별꽃 찾기 ✿</button><p class="explore-help">방향키 / WASD 이동 · E 줍기 · Q/R 시점 · ESC 돌아가기</p>';
 container.parentElement.append(panel);const $=id=>panel.querySelector('#'+id),pad=$('explore-stick'),thumb=pad.querySelector('span');
 const chooser=document.createElement('select');chooser.id='explore-destination';chooser.setAttribute('aria-label','탐험 마을 선택');chooser.innerHTML=destinations.map((d,i)=>'<option value="'+i+'">'+d.name+'</option>').join('');panel.querySelector('.explore-heading>div').prepend(chooser);
 panel.querySelector('.explore-heading span').textContent='넓은 길을 따라 자유롭게 산책해요';
 const minimap=document.createElement('div');minimap.className='explore-minimap';minimap.innerHTML='<canvas width="240" height="194" role="img" aria-label="탐험 지도: 내 위치, 친구, 별꽃과 집"></canvas><small>▲ 나 · ● 친구 · ✦ 별꽃</small>';panel.append(minimap);const mapCanvas=minimap.querySelector('canvas'),mapContext=mapCanvas.getContext('2d');
 const runButton=document.createElement('button');runButton.id='explore-run';runButton.textContent='달리기';runButton.setAttribute('aria-pressed','false');panel.append(runButton);runButton.addEventListener('click',()=>{const on=runButton.getAttribute('aria-pressed')!=='true';runButton.setAttribute('aria-pressed',String(on));runButton.textContent=on?'달리는 중':'달리기';});
 chooser.addEventListener('change',()=>{resetInput();loadWorld(Number(chooser.value));});
 const guide=createTravelGuide({data,onChoose:index=>{if(running){if(index!==mapIndex)loadWorld(index);}else api.start(index);}});
 const change=document.createElement('button');change.id='travel-change';change.onclick=()=>{resetInput();guide.open(mapIndex);};chooser.after(change);
 const goals=document.createElement('div');goals.className='explore-guide-actions';goals.innerHTML='<button data-goal="butterfly">🦋 나비 찾기</button><button data-goal="fish">🎣 낚시터</button><button data-goal="flower">✦ 별꽃</button>';panel.querySelector('.explore-heading>div').append(goals);goals.querySelectorAll('button').forEach(b=>b.onclick=()=>{goal=b.dataset.goal;messageUntil=0;drawMap();});
 function goalPoint(){if(!world)return null;if(goal==='fish'){const o=world.obstacles.find(o=>o.kind==='pond');return {x:o.x,z:o.z+o.r+.7};}const list=goal==='butterfly'?butterflies.map(b=>b.group.position):blooms.filter(b=>b.group.visible).map(b=>b.group.position);return list.reduce((best,p)=>!best||p.distanceTo(player.mesh.position)<best.distanceTo(player.mesh.position)?p:best,null);}

 const natureButton=document.createElement('button');natureButton.id='explore-nature';panel.append(natureButton);let natureKind=null;const butterflies=[];
 nature.setMotion((action,kind)=>{if(!player)return;gear.equip(player.mesh,kind);let point;if(kind==='fish'){point=world.obstacles.find(o=>o.kind==='pond');}else{point=butterflies.map(b=>b.group.position).reduce((best,p)=>!best||p.distanceTo(player.mesh.position)<best.distanceTo(player.mesh.position)?p:best,null);}if(action==='start'&&point){player.mesh.rotation.y=Math.atan2(point.x-player.mesh.position.x,point.z-player.mesh.position.z);}gear.event(action,kind,point);});
 natureButton.addEventListener('click',()=>{if(!natureKind)return;resetInput();nature.play(natureKind,mapIndex);});
 panel.querySelector('.explore-help').textContent='WASD / 방향키 이동 · SHIFT 달리기 · E 줍기 · Q/R 시점';
 const flowers=new THREE.Group();flowers.visible=false;scene.add(flowers);
 const spots=[[-5.5,2.6],[-3.6,-1.9],[1.2,-3],[6.5,.1],[-.4,5.7]];
 const blooms=spots.map(([x,z],id)=>{
  const group=new THREE.Group();group.position.set(x,.18,z);flowers.add(group);
  const stem=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.38,6),new THREE.MeshStandardMaterial({color:'#86a880'}));stem.position.y=.19;group.add(stem);
  for(let i=0;i<5;i++){const petal=new THREE.Mesh(new THREE.SphereGeometry(.13,10,8),new THREE.MeshStandardMaterial({color:'#f6d887',emissive:'#a86d14',emissiveIntensity:.16}));petal.scale.y=.5;petal.position.set(Math.cos(i*Math.PI*.4)*.14,.43,Math.sin(i*Math.PI*.4)*.14);group.add(petal);}
  const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.115),new THREE.MeshStandardMaterial({color:'#fff5b8',emissive:'#ddb651',emissiveIntensity:.35}));gem.position.y=.75;group.add(gem);
  return {id,group,gem};
 });
 function resetInput(){keys.clear();stick.x=stick.y=0;pointer=null;thumb.style.transform='translate(0px,0px)';}
 function syncDay(){const day=explorationDay();if(data.exploration?.day!==day){data.exploration={day,collected:[]};persist();}lastDay=day;for(const b of blooms)b.group.visible=!data.exploration.collected.includes(b.id);$('explore-progress').textContent='오늘의 별꽃 '+data.exploration.collected.length+' / 5';}
 function resize(width,height){camera.aspect=width/height;camera.updateProjectionMatrix();}
 function aim(snap=false,dt=.016){target.copy(player.mesh.position);target.y=.65;const distance=gear.active?7.2:9.5;offset.set(Math.sin(yaw)*distance,gear.active?6:8.4,Math.cos(yaw)*distance);offset.add(target);if(snap){camera.position.copy(offset);look.copy(target);}else{const t=1-Math.exp(-7*dt);camera.position.lerp(offset,t);look.lerp(target,t);}camera.lookAt(look);}
 function stop(){if(!running)return;running=false;gear.hide();resetInput();flowers.visible=false;if(world)world.group.visible=false;root.visible=true;scene.background.copy(homeBackground);residents.forEach((r,i)=>{root.add(r.mesh);r.mesh.visible=true;if(origins[i])r.mesh.position.copy(origins[i]);r.mesh.rotation.y=0;r.mesh.userData.body.rotation.set(0,0,0);r.mesh.userData.body.position.y=0;});panel.hidden=true;container.parentElement.classList.remove('exploring');onExit();}
 function loadWorld(index){
  resetInput();gear.hide();world?.dispose();mapIndex=index;chooser.value=String(index);change.textContent=destinations[index].name+' ▾ 마을 변경';world=createExplorationWorld(index);scene.add(world.group);scene.background.set(world.theme.sky);navigation={clear:world.clear};
  residents.forEach((r,i)=>{scene.add(r.mesh);r.mesh.visible=r===player||speciesHomes[r.species]===index;const angle=i*2.4,distance=1.6+Math.floor(i/8)*1.5;r.mesh.position.set(Math.sin(angle)*distance,.14,Math.cos(angle)*distance);r.mesh.rotation.y=0;r.exploreAnchor=r.mesh.position.clone();});player.mesh.position.set(0,.14,4);player.exploreAnchor=player.mesh.position.clone();
  butterflies.length=0;for(const [x,z] of [[-3,-4],[3,-10],[0,-21]]){const group=new THREE.Group();group.position.set(x,1,z);world.group.add(group);const wings=[];for(const side of [-1,1]){const wing=new THREE.Mesh(new THREE.SphereGeometry(.24,10,8),new THREE.MeshStandardMaterial({color:index===2?'#bda4dd':index===1?'#edc36c':'#e4a5c6'}));wing.scale.set(1,.18,1.3);wing.position.x=side*.2;group.add(wing);wings.push(wing);}butterflies.push({group,x,z,wings});}
  blooms.forEach((b,i)=>b.group.position.set(world.spots[i][0],.18,world.spots[i][1]));near=null;natureKind=null;messageUntil=0;mapClock=0;yaw=.58;aim(true);syncDay();$('explore-message').textContent=destinations[index].name+' 도착! 친구를 살짝 밀고 지나갈 수 있어요. 별꽃 보상은 모든 마을에서 하루 1회 공유해요.';drawMap();
 }
 function drawMap(){
  if(!world||!player)return;const point=goalPoint();goals.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.goal===goal)));
  if(time>=messageUntil&&point){const d=Math.hypot(point.x-player.mesh.position.x,point.z-player.mesh.position.z),name=goal==='fish'?'낚시터':goal==='butterfly'?'나비':'별꽃';$('explore-message').textContent=(goal==='flower'?near:natureKind===goal)?(goal==='flower'?'도착! 오른쪽 아래에서 별꽃을 주워요.':'도착! 오른쪽의 '+(goal==='fish'?'낚시하기':'나비 잡기')+' 버튼을 눌러요.'):name+'까지 약 '+Math.ceil(d)+'걸음 · 미니맵의 ◎를 찾아 길을 따라가요.';}else if(time>=messageUntil&&!point) $('explore-message').textContent='오늘 별꽃은 모두 찾았어요! 나비나 낚시터를 골라 보세요.';
  const c=mapContext,px=x=>120+x*3,py=z=>96+z*3;c.clearRect(0,0,240,194);c.fillStyle=world.theme.water;c.fillRect(0,0,240,194);c.fillStyle=world.theme.ground;c.beginPath();c.ellipse(120,96,worldBounds.x*3,worldBounds.z*3,0,0,Math.PI*2);c.fill();
  c.strokeStyle=world.theme.path;c.lineWidth=9;for(const z of [-15,0,15]){c.beginPath();c.moveTo(px(-23),py(z));c.lineTo(px(23),py(z));c.stroke();}for(const x of [-23,0,23]){c.beginPath();c.moveTo(px(x),py(-23));c.lineTo(px(x),py(23));c.stroke();}
  for(const o of world.obstacles){c.fillStyle=o.kind==='pond'?world.theme.water:o.kind==='house'?'#ab866f':world.theme.leaf;c.beginPath();c.arc(px(o.x),py(o.z),Math.max(1.8,o.r*3),0,Math.PI*2);c.fill();}
  c.fillStyle='#e0a523';c.font='bold 15px sans-serif';c.textAlign='center';for(const b of blooms)if(b.group.visible)c.fillText('✦',px(b.group.position.x),py(b.group.position.z)+5);
  c.fillStyle='#9a78b5';for(const r of residents)if(r!==player&&r.mesh.visible){c.beginPath();c.arc(px(r.mesh.position.x),py(r.mesh.position.z),2.7,0,Math.PI*2);c.fill();}
  c.font='12px sans-serif';for(const b of butterflies)c.fillText('🦋',px(b.x),py(b.z));const pond=world.obstacles.find(o=>o.kind==='pond');if(pond)c.fillText('🎣',px(pond.x),py(pond.z));
  if(point){c.strokeStyle='#c66f36';c.lineWidth=2.5;c.beginPath();c.arc(px(point.x),py(point.z),8,0,Math.PI*2);c.stroke();}
  c.save();c.translate(px(player.mesh.position.x),py(player.mesh.position.z));c.rotate(-player.mesh.rotation.y);c.fillStyle='#405f50';c.strokeStyle='white';c.lineWidth=2;c.beginPath();c.moveTo(0,7);c.lineTo(-5,-5);c.lineTo(5,-5);c.closePath();c.fill();c.stroke();c.restore();c.fillStyle='#405f50';c.font='bold 10px sans-serif';c.fillText('N',120,11);
 }
 function collect(){if(!running||!near||document.querySelector('dialog[open]'))return;const reward=collectStarFlower(data,near.id);if(!reward)return;persist();refresh();syncDay();messageUntil=time+4;$('explore-message').textContent=reward===60?'다섯 송이 발견! 오늘의 산책 완료 · 별조각 +60':'별꽃을 찾았어요! 별조각 +10';near=null;$('explore-action').disabled=true;}
 $('explore-exit').addEventListener('click',stop);$('explore-action').addEventListener('click',collect);
 $('explore-left').addEventListener('click',()=>{yaw-=Math.PI/4;});$('explore-right').addEventListener('click',()=>{yaw+=Math.PI/4;});
 window.addEventListener('keydown',e=>{if(!running||document.querySelector('dialog[open]')||e.target.closest?.('input,textarea,select'))return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','KeyE','KeyQ','KeyR','Escape','ShiftLeft','ShiftRight'].includes(e.code)){e.preventDefault();keys.add(e.code);if(!e.repeat){if(e.code==='KeyE')collect();if(e.code==='KeyQ')yaw-=Math.PI/4;if(e.code==='KeyR')yaw+=Math.PI/4;if(e.code==='Escape')stop();}}
 });
 window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',resetInput);document.addEventListener('visibilitychange',resetInput);
 function drag(e){const r=pad.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,length=Math.hypot(dx,dy),scale=length>36?36/length:1;stick.x=dx*scale/36;stick.y=dy*scale/36;thumb.style.transform=`translate(${dx*scale}px,${dy*scale}px)`;}
 pad.addEventListener('pointerdown',e=>{if(pointer!==null||e.button!==0)return;e.preventDefault();pointer=e.pointerId;pad.setPointerCapture(pointer);drag(e);});pad.addEventListener('pointermove',e=>{if(e.pointerId===pointer)drag(e);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(event,e=>{if(e.pointerId===pointer)resetInput();});
 const api={camera,resize,stop,choose:()=>guide.open(running?mapIndex:null),get active(){return running;},
  start(index=mapIndex){
   if(running)return;mapIndex=index;player=residents[data.favoriteBird];origins=residents.map(r=>r.mesh.position.clone());root.visible=false;data.exploration=readExploration(data.exploration);loadWorld(mapIndex);
   running=true;resetInput();yaw=.58;syncDay();panel.hidden=false;flowers.visible=true;container.parentElement.classList.add('exploring');$('explore-message').textContent=data.exploration.collected.length===5?'오늘의 별꽃을 모두 찾았어요. 자유롭게 산책해요!':'반짝이는 별꽃을 찾아 가까이 가 보세요.';const box=container.getBoundingClientRect();resize(box.width,box.height);aim(true);
  },
  update(dt){
   if(!running)return;time+=dt;if(explorationDay()!==lastDay)syncDay();
   for(const r of residents)r.mesh.visible=r===player||speciesHomes[r.species]===mapIndex;
   gear.equip(player.mesh,gear.active?gear.snapshot().kind:goal==='fish'?'fish':goal==='butterfly'?'butterfly':null);gear.update(dt,Math.hypot(stick.x,stick.y)>0||keys.size>0);
   if(document.querySelector('dialog[open]')){resetInput();aim(false,dt);return;}
   for(const b of butterflies){b.group.position.x=b.x+Math.sin(time*.8+b.z)*.7;b.group.position.z=b.z+Math.cos(time*.6+b.x)*.7;if(!reduced)b.wings.forEach((w,i)=>w.rotation.z=Math.sin(time*9)*(i?1:-1)*.5);}
   const pond=world.obstacles.find(o=>o.kind==='pond'),pp=player.mesh.position;natureKind=Math.hypot(pp.x-pond.x,pp.z-pond.z)<pond.r+2?'fish':butterflies.some(b=>Math.hypot(pp.x-b.group.position.x,pp.z-b.group.position.z)<2)?'butterfly':null;natureButton.disabled=!natureKind;natureButton.textContent=natureKind==='fish'?'🎣 낚시하기':natureKind==='butterfly'?'🦋 나비 잡기':'🎣 연못 · 🦋 꽃밭에서 놀기';
   let x=stick.x||Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));
   let z=stick.y||Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));const length=Math.max(1,Math.hypot(x,z));x/=length;z/=length;
   const speed=keys.has('ShiftLeft')||keys.has('ShiftRight')||runButton.getAttribute('aria-pressed')==='true'?6.2:3.8;
   const dx=(x*Math.cos(yaw)+z*Math.sin(yaw))*dt*speed,dz=(-x*Math.sin(yaw)+z*Math.cos(yaw))*dt*speed,p=player.mesh.position;
   const moved=walkAndPush(p,residents.filter(r=>r!==player&&r.mesh.visible).map(r=>r.mesh.position),dx,dz,navigation.clear);if(moved)player.mesh.rotation.y=Math.atan2(dx,dz);
   for(const r of residents)if(r!==player){const q=r.mesh.position,tx=r.exploreAnchor.x+Math.sin(time*.2+r.index)*1.8,tz=r.exploreAnchor.z+Math.cos(time*.2+r.index)*1.8,d=Math.hypot(tx-q.x,tz-q.z);if(d>.1&&Math.hypot(p.x-q.x,p.z-q.z)>1.2){const next={x:q.x+(tx-q.x)/d*dt*.45,z:q.z+(tz-q.z)/d*dt*.45};if(navigation.clear(next)){q.x=next.x;q.z=next.z;}}r.activity='함께 탐험 중';}
   const body=player.mesh.userData.body;body.rotation.z=moved&&!reduced?Math.sin(time*10)*.055:0;body.position.y=0;player.activity=moved?'직접 산책 중':'풍경 구경 중';
   aim(false,dt);near=blooms.find(b=>b.group.visible&&Math.hypot(b.group.position.x-p.x,b.group.position.z-p.z)<1.15)||null;
   $('explore-action').disabled=!near;$('explore-action').textContent=near?'별꽃 줍기 ✿':'별꽃 찾기 ✿';
   blooms.forEach(b=>{if(!reduced){b.gem.rotation.y=time;b.gem.position.y=.75+Math.sin(time*2+b.id)*.055;}});
   mapClock-=dt;if(mapClock<=0){drawMap();mapClock=.1;}
  },
  snapshot:()=>({active:running,gear:gear.snapshot(),destination:mapIndex,bounds:worldBounds,obstacles:world?.obstacles||[],position:player?{x:player.mesh.position.x,z:player.mesh.position.z}:null,walkable:player&&navigation?navigation.clear(player.mesh.position):true,collected:[...(data.exploration?.collected||[])],flowers:blooms.map(b=>({id:b.id,x:b.group.position.x,z:b.group.position.z,visible:b.group.visible})),joystick:{...stick}})
 };return api;
}
