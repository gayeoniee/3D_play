import * as THREE from 'three';
import { skills } from './skills.js';
import { readVillage,saveVillage,greetResident,localDay,drawEgg,awardMatch } from './village-state.js';
import { rarityColors } from './eggs.js';
import { createVillageEditor } from './village-editor.js';
import { createHatchDialog } from './hatch.js';
import { createVillageLife } from './village-life.js';
import { createVillageTools } from './village-tools.js';
import { dressEgg,createGardenCharm } from './cosmetics.js';
import { createStorageSession } from './storage-session.js';
import { createVillageHome } from './village-home.js';
import {restoreFlock,formName} from './evolution.js';
import {setBirdForm,flapBird} from './bird-model.js';
import {createEvolutionUI} from './evolution-ui.js';

export function createVillage({makeEgg,friends,onPlay,onSelect,onExternalChange=()=>{},reduced,shadowSize=2048}){
  const $=id=>document.getElementById(id);
  let storage;try{storage=localStorage;}catch{storage=null;}
  const data=restoreFlock(readVillage(storage));let selected=data.favorite,time=0,greeting=0,active=true,tools,evolution;
  storage=createStorageSession(storage,()=>{onExternalChange();tools?.conflict();});
  let shownDay=localDay();
  const scene=new THREE.Scene();scene.background=new THREE.Color('#e7eee0');
  const camera=new THREE.OrthographicCamera(-14,14,9,-9,.1,120);camera.position.set(15,20,23);camera.lookAt(0,.1,0);
  scene.add(new THREE.HemisphereLight('#fff5d9','#9bac91',2.6));
  const sunlight=new THREE.DirectionalLight('#fff4d7',3);sunlight.position.set(-9,19,10);sunlight.castShadow=true;sunlight.shadow.mapSize.set(shadowSize,shadowSize);
  Object.assign(sunlight.shadow.camera,{left:-15,right:15,top:15,bottom:-15});sunlight.shadow.normalBias=.035;scene.add(sunlight);
  const root=new THREE.Group();scene.add(root);const interactables=[],flowerMaterials=[];
  const editor=createVillageEditor({root,camera,container:$('village-scene'),data,save:()=>persist()});
  function groupSince(start,id,name,x,z,radius){
    const nodes=root.children.slice(start),group=new THREE.Group();group.position.set(x,0,z);root.add(group);root.updateMatrixWorld(true);nodes.forEach(node=>group.attach(node));editor.register(id,name,group,radius);return group;
  }
  const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.85,...extra});
  function mesh(parent,geometry,color,x,y,z){const m=new THREE.Mesh(geometry,typeof color==='string'?material(color):color);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  const sphere=new THREE.SphereGeometry(1,18,14);
  function orb(parent,color,x,y,z,sx,sy,sz){const m=mesh(parent,sphere,color,x,y,z);m.scale.set(sx,sy,sz);return m;}
  function cylinder(parent,color,x,y,z,r,h,segments=48){return mesh(parent,new THREE.CylinderGeometry(r,r,h,segments),color,x,y,z);}
  const ground=mesh(root,new THREE.PlaneGeometry(200,200),'#e1e9d8',0,-1,0);ground.rotation.x=-Math.PI/2;
  const island=cylinder(root,'#b5c59a',0,-.48,0,9,.9,96);island.scale.set(1.22,1,.87);
  const grass=cylinder(root,'#c9d9ac',0,.015,0,9,.12,96);grass.scale.set(1.22,1,.87);
  // Gentle paths, all geometry stays still. Only the residents stroll.
  const pathMaterial=material('#e9dfbd');
  function path(points){for(let i=0;i<points.length-1;i++){
    const [x,z]=points[i],[nx,nz]=points[i+1],length=Math.hypot(nx-x,nz-z);
    const slab=mesh(root,new THREE.BoxGeometry(.92,.035,length),pathMaterial,(x+nx)/2,.1,(z+nz)/2);slab.rotation.y=Math.atan2(nx-x,nz-z);
    cylinder(root,pathMaterial,x,.1,z,.46,.04);
  }}
  path([[-7,1],[-4,1],[-1,1],[2,1],[5,2.6]]);path([[-6,-2],[-4,-1],[-1,1],[-1,4.8]]);path([[-3,-4],[-2,-1],[-1,1],[2,-1],[2,-4]]);path([[6,-3],[4,-1],[2,1]]);
  const houses=[[-6,-3],[-1,-4.9],[4,-3.7]];
  const roofColors=['#e6b766','#d6b998','#dfa6a5','#8db6a0','#b3a6cc','#8cbac8'];
  houses.forEach(([x,z],i)=>{
    const home=new THREE.Group();home.position.set(x,.08,z);root.add(home);home.userData.homeSlot=i;
    cylinder(home,'#e1d7b2',0,.08,0,1.35,.16);
    const walls=orb(home,'#fff3d9',0,.9,0,1.03,.92,.86);
    const roof=mesh(home,new THREE.ConeGeometry(1.3,.9,5),roofColors[i],0,1.85,0);roof.rotation.y=Math.PI/4;
    mesh(home,new THREE.BoxGeometry(.27,.55,.28),'#dfc2a0',.53,2.07,-.2);
    const door=orb(home,'#bb9875',0,.55,.79,.27,.48,.08);orb(home,'#f2d280',.13,.55,.88,.04,.04,.035);
    [-1,1].forEach(s=>{
      orb(home,'#e0c496',s*.62,1.02,.65,.22,.24,.1);orb(home,'#abc9c2',s*.62,1.02,.73,.15,.17,.035);
      mesh(home,new THREE.BoxGeometry(.03,.31,.025),'#f9edd1',s*.62,1.02,.77);
    });
    for(let j=0;j<3;j++)cylinder(home,'#f0e8cb',0,.04,1+j*.36,.24,.04,8);
    editor.register('house-'+i,'작은 집 '+(i+1),home,1.5);
    interactables.push(home);
  });
  let treeIndex=0;
  function tree(x,z,size=1){
    const start=root.children.length;
    cylinder(root,'#aa8963',x,.55*size,z,.14*size,1.1*size,8);
    orb(root,'#92b180',x,1.55*size,z,.66*size,.88*size,.66*size);
    orb(root,'#adc68f',x-.25*size,1.45*size,z+.15,.43*size,.53*size,.45*size);
    groupSince(start,'tree-'+treeIndex++,'나무',x,z,.75*size);
  }
  [[-9,-1,1],[-8,-4,1.2],[-4.7,-6.3,.9],[3.5,-6.1,1.1],[8,-2.5,1.1],[8,1,.85],[-7,4.5,.8],[.7,6.2,.8]].forEach(p=>tree(...p));
  // Plaza fountain and a tiny egg sculpture.
  const fountainStart=root.children.length;
  cylinder(root,'#d9cdaa',-.5,.23,.35,1.28,.28);
  cylinder(root,'#a3cdd0',-.5,.4,.35,1.06,.09);
  cylinder(root,'#eee2c2',-.5,.61,.35,.3,.45);
  orb(root,'#f7d385',-.5,1.04,.35,.32,.42,.3);
  orb(root,'#666e4c',-.62,1.09,.61,.025,.04,.02);orb(root,'#666e4c',-.4,1.09,.61,.025,.04,.02);
  groupSince(fountainStart,'fountain-0','달걀 분수',-.5,.35,1.3);
  // Small pond at the edge of the village.
  const pondStart=root.children.length;
  const pond=cylinder(root,'#e6dabe',2.6,.1,5.1,1.7,.11);pond.scale.z=.7;
  const water=cylinder(root,'#a9d1ce',2.6,.17,5.1,1.53,.04);water.scale.z=.68;
  for(let i=0;i<3;i++)cylinder(root,'#aac28c',2+i*.5,.2,5.1+(i%2)*.35,.17,.025,12);
  for(let i=0;i<5;i++)mesh(root,new THREE.BoxGeometry(.27,.1,1.3),'#c5a980',3.8+i*.23,.3,5.1);
  groupSince(pondStart,'pond-0','연못과 다리',2.6,5.1,2.2);
  // Flowerbeds can be recolored, and the choice is saved on this device.
  [[-2.5,3.1],[-.6,4.7],[-8,-1.1]].forEach(([x,z],index)=>{
    const start=root.children.length;
    mesh(root,new THREE.BoxGeometry(1.4,.18,.85),'#b9a37b',x,.18,z);
    mesh(root,new THREE.BoxGeometry(1.23,.12,.68),'#8c9e6d',x,.31,z);
    for(let i=0;i<6;i++){
      const xx=x-.47+(i%3)*.45,zz=z-.2+Math.floor(i/3)*.4;
      cylinder(root,'#879e6c',xx,.5,zz,.025,.3,5);
      const petalMaterial=material('#e8adae');flowerMaterials.push(petalMaterial);
      for(let k=0;k<5;k++)orb(root,petalMaterial,xx+Math.cos(k*1.256)*.08,.66,zz+Math.sin(k*1.256)*.08,.07,.045,.07);
      orb(root,'#f3d37e',xx,.68,zz,.05,.045,.05);
    }
    groupSince(start,'flower-'+index,'꽃밭 '+(index+1),x,z,.85);
  });
  // The real game's entrance is a miniature arena inside the village.
  const arena=new THREE.Group();arena.position.set(5,.08,2.7);arena.userData.arena=true;root.add(arena);
  cylinder(arena,'#b5cdd0',0,.16,0,2.15,.3);cylinder(arena,'#e8f4ed',0,.34,0,2.08,.08);
  const arenaRing=mesh(arena,new THREE.TorusGeometry(1.88,.04,8,72),'#c6aa6b',0,.4,0);arenaRing.rotation.x=Math.PI/2;
  for(const side of [-1,1]){
    cylinder(arena,'#ac9473',side*1.85,1.13,-.85,.055,1.7,8);
    const flag=mesh(arena,new THREE.BoxGeometry(.48,.35,.035),side===1?'#e5b094':'#b5c9a0',side*1.85+.23,1.81,-.85);
  }
  mesh(arena,new THREE.BoxGeometry(1.3,.1,.5),'#d4c09a',0,.18,2.12);interactables.push(arena);
  editor.register('arena-0','밀어내기 경기장',arena,2.4);
  // Benches, fence posts and small stones make the paths feel lived in.
  let benchIndex=0;
  function bench(x,z){const start=root.children.length;mesh(root,new THREE.BoxGeometry(1.2,.12,.4),'#c9a77e',x,.45,z);mesh(root,new THREE.BoxGeometry(1.2,.35,.1),'#d3b38b',x,.7,z-.2);[-.4,.4].forEach(dx=>mesh(root,new THREE.BoxGeometry(.1,.4,.25),'#9c8868',x+dx,.22,z));groupSince(start,'bench-'+benchIndex++,'벤치',x,z,.7);}
  bench(-3,1.9);bench(2,-1.5);
  const fenceStart=root.children.length;
  for(let i=0;i<7;i++){const x=-3+i*.7;mesh(root,new THREE.BoxGeometry(.1,.5,.1),'#ede3c8',x,.34,6.6);if(i<6)mesh(root,new THREE.BoxGeometry(.7,.09,.09),'#ede3c8',x+.35,.46,6.6);}
  groupSince(fenceStart,'fence-0','울타리',-.9,6.6,1.1);
  const routes=[[-4.6,-.4],[-2.2,-2.5],[1.6,-2.4],[3.5,.1],[-5.2,1.8],[-1.4,3.5]];
  const residents=[];
  function addResident(bird){
    const index=bird.id,friend=friends[bird.species];
    const base=routes[index%routes.length],x=base[0]+Math.floor(index/6)*.7,z=base[1]+Math.floor(index/6)*.75;
    const egg=makeEgg(bird.species);egg.scale.setScalar(.8);egg.position.set(x,.14,z);egg.userData.resident=index;root.add(egg);interactables.push(egg);
    editor.register('bird-'+index,friend.name,egg,.8);
    const charm=createGardenCharm();root.add(charm);charm.visible=false;
    residents.push({mesh:egg,x,z,index,charm,species:bird.species});
  }
  data.flock.forEach(addResident);
  const life=createVillageLife({residents,root,data,container:$('village-scene'),reduced,project});
  const halo=mesh(root,new THREE.TorusGeometry(.62,.035,8,48),'#cba049',0,.13,0);halo.rotation.x=Math.PI/2;
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  function pick(event){
    const box=$('village-scene').getBoundingClientRect();pointer.set((event.clientX-box.left)/box.width*2-1,-(event.clientY-box.top)/box.height*2+1);
    raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(interactables.filter(o=>o.visible),true)[0];if(!hit)return null;
    let object=hit.object;while(object&&object.userData.resident===undefined&&object.userData.homeSlot===undefined&&!object.userData.arena)object=object.parent;
    return object?.userData||null;
  }
  $('village-scene').addEventListener('click',e=>{if(!active||editor.editing)return;const hit=pick(e);if(hit?.arena)onPlay(selected);else if(hit?.resident!==undefined)selectBird(hit.resident);else if(hit?.homeSlot!==undefined)select(data.owned[hit.homeSlot%data.owned.length]);});
  $('village-scene').addEventListener('pointermove',e=>{if(active&&!editor.editing)$('village-scene').style.cursor=pick(e)?'pointer':'default';});
  const residentButtons=friends.map((f,i)=>{
    const button=document.createElement('button');button.className='resident-button';button.type='button';button.setAttribute('aria-label',f.name+' 만나기');
    button.innerHTML='<span class="egg-rarity" style="color:'+rarityColors[f.rarity]+'">'+f.rarity+'</span><span class="mini-egg" style="--egg:'+f.color+'"></span><strong>'+f.name+'</strong><small>'+f.skillName+'</small>';
    button.addEventListener('click',()=>select(i));$('residents').append(button);return button;
  });
  function persist(){const saved=saveVillage(storage,data);$('village-save-note').textContent=saved?'이 기기에 마을이 저장돼요':'저장이 제한되어 이번 방문 동안만 유지돼요';tools?.saveStatus(saved);}
  function refresh(){
    const f=friends[selected],skill=skills[selected];
    $('resident-portrait').style.setProperty('--egg',f.color);$('resident-name').textContent=data.nicknames[selected]||f.name;
    $('resident-description').textContent=f.desc;$('resident-skill').textContent=skill.icon+' '+skill.name;
    $('resident-rarity').textContent=f.rarity;$('resident-rarity').style.color=rarityColors[f.rarity];
    $('resident-stats').innerHTML='<span>파워<b>'+f.power+'</b></span><span>이동<b>'+f.speed+'</b></span><span>버티기<b>'+f.weight+'</b></span>';
    $('village-owned').textContent=data.owned.length+' / 18';$('collection-count').textContent=data.owned.length+' / 18';$('village-shards').textContent=data.shards;
    $('village-draw').disabled=data.shards<100&&data.tickets===0;
    $('village-draw').innerHTML='달걀 뽑기 <span>'+(data.tickets>0?'뽑기권 1장':'✦ 100')+'</span>';
    $('ticket-count').textContent=data.tickets+'장';$('ticket-progress').textContent='다음 뽑기권까지 '+(3-data.wins%3)+'승';$('ticket-progress-fill').style.width=(data.wins%3)/3*100+'%';
    $('resident-skill-copy').textContent=skill.description;$('resident-hearts').textContent='♥ '+data.hearts[selected];
    $('village-matches').textContent=data.matches;$('village-wins').textContent=data.wins;
    $('village-greet').disabled=data.greeted[selected]===localDay();$('village-greet').textContent=$('village-greet').disabled?'오늘은 인사했어요 ♥':'반갑게 인사하기 ♡';
    residentButtons.forEach((b,i)=>{b.classList.toggle('selected',i===selected);b.classList.toggle('locked',!data.owned.includes(i));b.disabled=!data.owned.includes(i);b.setAttribute('aria-pressed',String(i===selected));});
    residents.forEach(r=>{r.mesh.visible=true;setBirdForm(r.mesh,r.species,data.flock[r.index].stage);dressEgg(r.mesh,data.outfits[r.species]);r.charm.visible=data.outfits[r.species]==='garden';});
    residentButtons.forEach((b,i)=>b.querySelector('strong').textContent=data.nicknames[i]||friends[i].name);
    $('village-owned').textContent=data.flock.length+'마리';
    $('resident-name').textContent=(data.nicknames[selected]||f.name)+' · '+formName(data.flock[data.favoriteBird]);
    document.querySelectorAll('[data-garden]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.garden===data.garden));});
    tools?.refresh();evolution?.refresh();
  }
  function select(index){if(!data.owned.includes(index))return;if(data.flock[data.favoriteBird]?.species!==index)data.favoriteBird=data.flock.findIndex(b=>b.species===index);selected=index;data.favorite=index;greeting=0;$('village-bubble').hidden=true;refresh();persist();onSelect(index);}
  function selectBird(id){if(!data.flock[id])return;data.favoriteBird=id;select(data.flock[id].species);}
  function garden(name){data.garden=name;const colors={peach:'#e8adae',lemon:'#e9ce73',lilac:'#b6a2d4'};flowerMaterials.forEach(m=>m.color.set(colors[name]));refresh();persist();}
  $('village-greet').addEventListener('click',()=>{
    if(!greetResident(data,selected))return;greeting=3.5;$('village-bubble').textContent=['오늘도 같이 놀자!','와 줘서 기분이 말랑해.','너 주려고 꽃을 골랐어!','바람이 정말 좋다, 그치?','오늘은 내가 1등 할 거야!','경기장까지 같이 가자!'][selected%6];$('village-bubble').hidden=false;$('draw-message').textContent='반가운 인사! 별조각 +20';refresh();persist();
  });
  $('village-play').addEventListener('click',()=>onPlay(selected));$('village-arena-link').addEventListener('click',()=>onPlay(selected));
  document.querySelectorAll('[data-garden]').forEach(b=>b.addEventListener('click',()=>garden(b.dataset.garden)));
  const hatch=createHatchDialog({friends,reduced,onMeet:(id,birdId)=>{selectBird(birdId);document.querySelector('.village-stage').scrollIntoView({block:'center'});}});
  $('village-draw').addEventListener('click',()=>{
    const result=drawEgg(data);if(!result)return;
    addResident(data.flock[result.birdId]);const egg=friends[result.id];refresh();persist();
    $('draw-message').textContent=result.duplicate?egg.name+' 중복 · 별조각 +40 · 꾸미기 조각 +1':egg.name+' 입주! 마을에서 만나보세요.';
    hatch.show(result);
  });
  function project(object,element,offset=0){
    const point=object.position.clone();point.y+=offset;point.project(camera);
    const box=$('village-scene').getBoundingClientRect();element.style.left=(point.x*.5+.5)*box.width+'px';element.style.top=(-point.y*.5+.5)*box.height+'px';
  }
  tools=createVillageTools({data,storage,friends,selected:()=>selected,refresh,persist});
  evolution=createEvolutionUI({data,friends,selectBird,refresh,persist});
  let nearView=false;
  function resizeVillage(width,height){const aspect=width/height,halfW=Math.max(11,8.8*aspect)*(nearView&&!editor.editing?0.72:1);camera.left=-halfW;camera.right=halfW;camera.top=halfW/aspect;camera.bottom=-halfW/aspect;camera.updateProjectionMatrix();}
  const home=createVillageHome({onZoom:value=>{nearView=value;const box=$('village-scene').getBoundingClientRect();resizeVillage(box.width,box.height);}});
  $('village-edit').addEventListener('click',()=>{const box=$('village-scene').getBoundingClientRect();resizeVillage(box.width,box.height);});
  $('village-scene').addEventListener('click',e=>{if(!active||editor.editing)return;const hit=pick(e);if(hit?.resident!==undefined||hit?.homeSlot!==undefined)home.open('collection');});
  garden(data.garden);
  return {scene,camera,select,
    get selected(){return selected;},
    owns:index=>data.owned.includes(index),
    outfit:index=>data.outfits[index],
    form:()=>data.flock[data.favoriteBird].stage,
    name:index=>data.nicknames[index]||friends[index].name,
    get owned(){return [...data.owned];},
    recordMatch(rank){const tickets=data.tickets,beforeDay=data.daily.day,beforeClaim=data.daily.claimed,reward=awardMatch(data,rank);persist();refresh();return {shards:reward,tickets:data.tickets-tickets,daily:data.daily.claimed&&(!beforeClaim||beforeDay!==data.daily.day),victory:rank===1&&data.wins%3===0};},
    setActive(value){active=value;if(!value){editor.stop();home.close();}if(value)refresh();},
    resize:resizeVillage,
    update(dt){
      time+=dt;
      life.update(dt,editor.editing,data.favoriteBird,greeting>0);
      residents.forEach(r=>{flapBird(r.mesh,time+r.index,reduced);const a=data.layout['bird-'+r.index]||r;r.charm.position.set(a.x+.65,.14,a.z+.45);});
      if(Math.floor(time)!==Math.floor(time-dt)){if(shownDay!==localDay()){shownDay=localDay();refresh();}tools.activity(editor.editing?'마을 꾸미는 중':life.status(data.favoriteBird));tools.refresh();}
      editor.update();$('village-arena-link').hidden=editor.editing;
      halo.position.set(residents[data.favoriteBird].mesh.position.x,.14,residents[data.favoriteBird].mesh.position.z);
      if(greeting>0){greeting=Math.max(0,greeting-dt);project(residents[data.favoriteBird].mesh,$('village-bubble'),1.8);if(greeting===0)$('village-bubble').hidden=true;}
    },
    snapshot:()=>({selected,owned:[...data.owned],shards:data.shards,tickets:data.tickets,daily:{...data.daily},nicknames:[...data.nicknames],fragments:[...data.fragments],outfits:[...data.outfits],editing:editor.editing,placements:editor.snapshot(),garden:data.garden,hearts:[...data.hearts],matches:data.matches,wins:data.wins,camera:camera.position.toArray(),residents:residents.filter(r=>r.mesh.visible).map(r=>({id:r.index,x:r.mesh.position.x,z:r.mesh.position.z,activity:r.activity,walkable:life.clear(r.mesh.position),outfit:r.mesh.userData.outfit}))})
  };
}
