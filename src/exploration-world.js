import * as THREE from 'three';
export const destinations=[
 {name:'햇살 들꽃 마을',ground:'#c8dda9',path:'#efe0b8',leaf:'#a8c489',roof:'#e5b17d',sky:'#e7eee0',water:'#abd6d7'},
 {name:'도토리 숲 마을',ground:'#aac79c',path:'#ddcba7',leaf:'#719f80',roof:'#b4917e',sky:'#dfebe0',water:'#8fc4bb'},
 {name:'눈꽃 호수 마을',ground:'#e7efeb',path:'#d3e1df',leaf:'#a3c5cc',roof:'#a8b9d5',sky:'#e5edf3',water:'#a6cbdc'}
];
export const worldBounds={x:34,z:28};
export function worldClear(p,obstacles){return Number.isFinite(p.x)&&Number.isFinite(p.z)&&Math.hypot(p.x/worldBounds.x,p.z/worldBounds.z)<1&&obstacles.every(o=>Math.hypot(p.x-o.x,p.z-o.z)>o.r+.34);}
// Resolve gentle contact in small increments, sliding against scenery and moving friends aside.
export function walkAndPush(player,others,dx,dz,clear){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));let moved=false;
 for(let n=0;n<steps;n++){
  const sx=dx/steps,sz=dz/steps;
  for(const [x,z] of [[sx,sz],[sx,0],[0,sz]]){if((x||z)&&clear({x:player.x+x,z:player.z+z})){player.x+=x;player.z+=z;moved=true;break;}}
  for(let pass=0;pass<3;pass++)for(const other of others){
   const x=other.x-player.x,z=other.z-player.z,d=Math.hypot(x,z);if(d>=.78)continue;
   const nx=d>.001?x/d:1,nz=d>.001?z/d:0,push=.78-d;
   const choices=[{x:other.x+nx*push,z:other.z+nz*push},{x:other.x-nz*push,z:other.z+nx*push},{x:other.x+nz*push,z:other.z-nx*push}];
   const next=choices.find(clear);if(next){other.x=next.x;other.z=next.z;}
   else {const back={x:player.x-nx*push,z:player.z-nz*push};if(clear(back)){player.x=back.x;player.z=back.z;}}
  }
 }
 return moved;
}
export function createExplorationWorld(index){
 const theme=destinations[index],group=new THREE.Group(),obstacles=[],landmarks=[];
 const sphere=new THREE.SphereGeometry(1,14,10),box=new THREE.BoxGeometry(1,1,1),cylinder=new THREE.CylinderGeometry(1,1,1,64),materials=new Map();
 const material=c=>{if(!materials.has(c))materials.set(c,new THREE.MeshStandardMaterial({color:c,roughness:.9}));return materials.get(c);};
 const add=(g,c,x,y,z,sx,sy,sz)=>{const m=new THREE.Mesh(g,material(c));m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;};
 add(cylinder,theme.water,0,-.75,0,95,.12,95);
 add(cylinder,theme.ground,0,-.28,0,35,.65,29);
 // Four-unit boulevards and large open plazas leave room to pass on both sides.
 add(box,theme.path,0,.06,0,4,.04,50);add(box,theme.path,0,.065,0,61,.04,4);
 for(const z of [-15,15])add(box,theme.path,0,.07,z,48,.04,3.6);
 for(const x of [-23,23])add(box,theme.path,x,.07,0,3.6,.04,31);
 add(cylinder,theme.path,0,.085,0,5,.04,5);
 for(const x of [-6,6])for(const z of [-5,5]){
  if(index===2){add(sphere,'#faf7ee',x,.6,z,.6,.65,.6);add(sphere,'#faf7ee',x,1.4,z,.43,.43,.43);for(const s of [-1,1])add(sphere,'#60747b',x+s*.13,1.45,z+.39,.04,.045,.03);add(sphere,'#e7b184',x,1.33,z+.43,.07,.05,.12);}
  else if(index===1){add(cylinder,'#eee1bf',x,.45,z,.18,.9,.18);const cap=add(sphere,'#cea387',x,.95,z,.72,.35,.72);for(const dx of [-.25,.25])add(sphere,'#fff0d5',x+dx,1.23,z,.11,.025,.12);}
  else {add(cylinder,'#d4bc99',x,.15,z,.85,.2,.85);for(let j=0;j<7;j++){const a=j*Math.PI*2/7;add(sphere,j%2?'#e6b5c1':'#ebd18b',x+Math.cos(a)*.55,.42,z+Math.sin(a)*.55,.19,.25,.19);}}
  obstacles.push({x,z,r:.65,kind:'garden'});
 }
 const houses=[[-10,-8],[10,-8],[-16,8],[16,8],[-10,20],[10,20]];
 houses.forEach(([x,z],i)=>{
  add(sphere,'#fff1d8',x,1.2,z,1.45,1.2,1.25);
  add(new THREE.ConeGeometry(1.85,1.25,5),theme.roof,x,2.45,z,1,1,1);
  add(sphere,'#b49a79',x,.72,z+1.16,.4,.65,.1);
  for(const side of [-1,1])add(sphere,'#abd0d4',x+side*.82,1.25,z+1.03,.26,.3,.06);
  obstacles.push({x,z,r:1.48,kind:'house'});landmarks.push({x,z,name:i<2?'작은 집':'이웃집',kind:'house'});
 });
 const pond={x:index===1?-15:15,z:-21,r:2.8,kind:'pond'};obstacles.push(pond);landmarks.push({...pond,name:index===2?'눈꽃 호수':'반짝 연못'});
 add(cylinder,theme.path,pond.x,.10,pond.z,3.15,.08,3.15);add(cylinder,theme.water,pond.x,.16,pond.z,pond.r,.05,pond.r);
 for(let i=0;i<36;i++){
  const angle=i*2.39996,r= i<22?1:.72,x=Math.cos(angle)*31*r,z=Math.sin(angle)*25*r;
  if(Math.abs(x)<3||Math.abs(z)<3||Math.abs(Math.abs(z)-15)<2.7||Math.abs(Math.abs(x)-23)<2.7||obstacles.some(o=>Math.hypot(x-o.x,z-o.z)<o.r+2.8))continue;
  add(cylinder,'#b69a78',x,.75,z,.18,1.5,.18);add(sphere,theme.leaf,x,2,z,.95,1.2,.95);add(sphere,theme.leaf,x-.4,1.8,z+.3,.6,.8,.65);obstacles.push({x,z,r:.23,kind:'tree'});
 }
 // Small destination-specific gardens and a picnic plaza are walkable decorations.
 for(let i=0;i<24;i++){const x=-7+(i%6)*2.8,z= index===1?-21:-23+Math.floor(i/6)*.7;add(sphere,index===2?'#d3bce2':i%2?'#e9b5ba':'#efd780',x,.24,z,.17,.20,.17);}
 landmarks.push({x:0,z:-22,name:index===0?'들꽃 정원':index===1?'도토리 쉼터':'눈꽃 정원',kind:'garden'});
 for(const x of [-4,4]){add(box,'#c5a77f',x,.45,-21,1.5,.15,.6);add(box,'#d7b991',x,.7,-21.3,1.5,.4,.1);}
 const spots=[[-23,-15],[0,-22],[23,-15],[23,15],[-23,15]];
 return {group,theme,obstacles,landmarks,spots,clear:p=>worldClear(p,obstacles),dispose(){const geometries=new Set(),allMaterials=new Set(materials.values());group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)allMaterials.add(o.material);});geometries.forEach(g=>g.dispose());allMaterials.forEach(m=>m.dispose());group.removeFromParent();}};
}
