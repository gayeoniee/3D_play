import * as THREE from 'three';
import {createNavigation,villageObstacles} from './village-navigation.js';
import {collectStarFlower,readExploration,explorationDay} from './exploration-state.js';

export function createExploration({scene,root,residents,data,container,reduced,persist,refresh,onExit}){
 const camera=new THREE.PerspectiveCamera(48,1,.1,80),keys=new Set(),stick={x:0,y:0};
 let running=false,player=null,navigation,yaw=.58,time=0,pointer=null,near=null,lastDay='',origin=null;
 const target=new THREE.Vector3(),look=new THREE.Vector3(),offset=new THREE.Vector3();
 const panel=document.createElement('div');panel.className='explore-ui';panel.hidden=true;
 panel.innerHTML='<div class="explore-heading"><div><span>작은 섬 산책</span><strong id="explore-progress">오늘의 별꽃 0 / 5</strong><small>꽃마다 ✦ 10 · 다 모으면 추가 ✦ 50</small></div><button id="explore-exit">마을로 돌아가기</button></div><p id="explore-message" role="status">반짝이는 별꽃을 찾아 가까이 가 보세요.</p><div class="explore-camera"><button id="explore-left" aria-label="시점 왼쪽으로 돌리기">↶</button><span>시점</span><button id="explore-right" aria-label="시점 오른쪽으로 돌리기">↷</button></div><div id="explore-stick" aria-label="드래그해서 이동" role="group"><span></span><small>이동</small></div><button id="explore-action" disabled>별꽃 찾기 ✿</button><p class="explore-help">방향키 / WASD 이동 · E 줍기 · Q/R 시점 · ESC 돌아가기</p>';
 container.parentElement.append(panel);const $=id=>panel.querySelector('#'+id),pad=$('explore-stick'),thumb=pad.querySelector('span');
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
 function aim(snap=false,dt=.016){target.copy(player.mesh.position);target.y=.65;offset.set(Math.sin(yaw)*6.2,5.2,Math.cos(yaw)*6.2);offset.add(target);if(snap){camera.position.copy(offset);look.copy(target);}else{const t=1-Math.exp(-7*dt);camera.position.lerp(offset,t);look.lerp(target,t);}camera.lookAt(look);}
 function stop(){if(!running)return;running=false;resetInput();flowers.visible=false;panel.hidden=true;container.parentElement.classList.remove('exploring');player.mesh.rotation.y=0;player.mesh.userData.body.rotation.set(0,0,0);player.mesh.userData.body.position.y=0;if(origin)player.mesh.position.copy(origin);onExit();}
 function collect(){if(!running||!near||document.querySelector('dialog[open]'))return;const reward=collectStarFlower(data,near.id);if(!reward)return;persist();refresh();syncDay();$('explore-message').textContent=reward===60?'다섯 송이 발견! 오늘의 산책 완료 · 별조각 +60':'별꽃을 찾았어요! 별조각 +10';near=null;$('explore-action').disabled=true;}
 $('explore-exit').addEventListener('click',stop);$('explore-action').addEventListener('click',collect);
 $('explore-left').addEventListener('click',()=>{yaw-=Math.PI/4;});$('explore-right').addEventListener('click',()=>{yaw+=Math.PI/4;});
 window.addEventListener('keydown',e=>{if(!running||document.querySelector('dialog[open]')||e.target.closest?.('input,textarea'))return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','KeyE','KeyQ','KeyR','Escape'].includes(e.code)){e.preventDefault();keys.add(e.code);if(!e.repeat){if(e.code==='KeyE')collect();if(e.code==='KeyQ')yaw-=Math.PI/4;if(e.code==='KeyR')yaw+=Math.PI/4;if(e.code==='Escape')stop();}}
 });
 window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',resetInput);document.addEventListener('visibilitychange',resetInput);
 function drag(e){const r=pad.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,length=Math.hypot(dx,dy),scale=length>36?36/length:1;stick.x=dx*scale/36;stick.y=dy*scale/36;thumb.style.transform=`translate(${dx*scale}px,${dy*scale}px)`;}
 pad.addEventListener('pointerdown',e=>{if(pointer!==null||e.button!==0)return;e.preventDefault();pointer=e.pointerId;pad.setPointerCapture(pointer);drag(e);});pad.addEventListener('pointermove',e=>{if(e.pointerId===pointer)drag(e);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(event,e=>{if(e.pointerId===pointer)resetInput();});
 return {camera,resize,stop,get active(){return running;},
  start(){
   if(running)return;player=residents[data.favoriteBird];origin=player.mesh.position.clone();navigation=createNavigation(villageObstacles(root.children));
   const safe=navigation.nearest(player.mesh.position);if(safe)player.mesh.position.set(safe.x,.14,safe.z);
   data.exploration=readExploration(data.exploration);blooms.forEach((b,i)=>{const p=navigation.nearest({x:spots[i][0],z:spots[i][1]},p=>blooms.slice(0,i).some(a=>Math.hypot(a.group.position.x-p.x,a.group.position.z-p.z)<.8));if(p){const reachable=navigation.path(player.mesh.position,p).at(-1)||player.mesh.position;b.group.position.set(reachable.x,.18,reachable.z);}});
   running=true;resetInput();yaw=.58;syncDay();panel.hidden=false;flowers.visible=true;container.parentElement.classList.add('exploring');$('explore-message').textContent=data.exploration.collected.length===5?'오늘의 별꽃을 모두 찾았어요. 자유롭게 산책해요!':'반짝이는 별꽃을 찾아 가까이 가 보세요.';const box=container.getBoundingClientRect();resize(box.width,box.height);aim(true);
  },
  update(dt){
   if(!running)return;time+=dt;if(explorationDay()!==lastDay)syncDay();
   if(document.querySelector('dialog[open]')){resetInput();return;}
   let x=stick.x||Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));
   let z=stick.y||Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));const length=Math.max(1,Math.hypot(x,z));x/=length;z/=length;
   const dx=(x*Math.cos(yaw)+z*Math.sin(yaw))*dt*2.4,dz=(-x*Math.sin(yaw)+z*Math.cos(yaw))*dt*2.4,p=player.mesh.position;
   const clear=q=>navigation.clear(q)&&!residents.some(r=>r!==player&&r.mesh.visible&&Math.hypot(r.mesh.position.x-q.x,r.mesh.position.z-q.z)<.68);
   let moved=false;for(const [mx,mz] of [[dx,dz],[dx,0],[0,dz]]){if((mx||mz)&&clear({x:p.x+mx,z:p.z+mz})){p.x+=mx;p.z+=mz;moved=true;player.mesh.rotation.y=Math.atan2(mx,mz);break;}}
   const body=player.mesh.userData.body;body.rotation.z=moved&&!reduced?Math.sin(time*10)*.055:0;body.position.y=0;player.activity=moved?'직접 산책 중':'풍경 구경 중';
   aim(false,dt);near=blooms.find(b=>b.group.visible&&Math.hypot(b.group.position.x-p.x,b.group.position.z-p.z)<1.15)||null;
   $('explore-action').disabled=!near;$('explore-action').textContent=near?'별꽃 줍기 ✿':'별꽃 찾기 ✿';
   blooms.forEach(b=>{if(!reduced){b.gem.rotation.y=time;b.gem.position.y=.75+Math.sin(time*2+b.id)*.055;}});
  },
  snapshot:()=>({active:running,position:player?{x:player.mesh.position.x,z:player.mesh.position.z}:null,walkable:player&&navigation?navigation.clear(player.mesh.position):true,collected:[...(data.exploration?.collected||[])],flowers:blooms.map(b=>({id:b.id,x:b.group.position.x,z:b.group.position.z,visible:b.group.visible})),joystick:{...stick}})
 };
}
