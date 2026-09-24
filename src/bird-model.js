import * as THREE from 'three';
import {birdKinds} from './evolution.js';
import {eggs} from './eggs.js';

// A soft, compact silhouette for every species; small accents identify the bird.
export function setBirdForm(root,species,stage){
 if(root.userData.birdStage===stage)return;
 root.userData.birdStage=stage;
 const body=root.userData.body,old=root.userData.bird;
 if(old){old.removeFromParent();const geometry=new Set(),materials=new Set();old.traverse(o=>{if(o.geometry)geometry.add(o.geometry);if(o.material)materials.add(o.material);});geometry.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}
 body.children.forEach(o=>{if(o!==root.userData.dress)o.visible=stage===0;});
 root.userData.wings=[];root.userData.bird=null;if(!stage)return;
 const group=new THREE.Group();body.add(group);root.userData.bird=group;
 const type=birdKinds[species][2],adult=stage===2,penguin=['penguin','emperor'].includes(type),owl=['owl','snowowl'].includes(type);
 root.userData.birdType=type;
 const shell=new THREE.Color(eggs[species].color).lerp(new THREE.Color('#fff2da'),.1);
 const color=penguin?(type==='emperor'?'#a0becb':'#a9bdca'):shell;
 const accent=new THREE.Color(eggs[species].color).multiplyScalar(.9),cream='#fff7e6',pink='#efb2b4',gold='#e9bb79';
 const geometry=new THREE.SphereGeometry(1,24,18),materials=new Map();
 function ball(parent,c,x,y,z,sx,sy,sz,tilt=0){const key=c instanceof THREE.Color?c.getHexString():c;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color:c,roughness:.82}));const mesh=new THREE.Mesh(geometry,materials.get(key));mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);mesh.rotation.z=tilt;mesh.castShadow=true;parent.add(mesh);return mesh;}
 ball(group,color,0,.69,0,.56,.64,.46);
 ball(group,color,0,1.03,.015,.54,.46,.45);
 ball(group,cream,0,.53,.315,.39,.35,.17);
 if(penguin||owl){for(const side of [-1,1])ball(group,cream,side*.185,.97,.37,.245,.265,.14);}
 else ball(group,new THREE.Color(cream).lerp(shell,.24),0,.96,.365,.40,.285,.13);
 const eyeGap=owl?.19:.165;
 for(const side of [-1,1]){
  ball(group,'#3c4a4a',side*eyeGap,1.015,.493,.061,.074,.029);
  ball(group,'#ffffff',side*eyeGap-.017,1.043,.516,.02,.021,.008);
  ball(group,pink,side*.285,.895,.438,.09,.041,.022);
  ball(group,gold,side*.185,.087,.12,.125,.065,.155);
  const wing=new THREE.Group();wing.position.set(side*.48,.76,-.015);group.add(wing);root.userData.wings.push(wing);
  ball(wing,color,side*.065,-.12,.015,.135,adult?.245:.195,.11,-side*.17);
  if(adult&&!penguin)ball(wing,cream,side*.078,-.21,.079,.074,.07,.038,-side*.15);
 }
 const wide=['duck','swan'].includes(type),long=['kiwi','hummingbird'].includes(type);
 ball(group,gold,0,.919,.507,wide?.115:.087,.048,long?.13:.085);
 ball(group,accent,0,.35,-.405,.17,.14,.18);
 const tuft=(c,x,y,z,sx,sy,tilt)=>ball(group,c,x,y,z,sx,sy,.085,tilt);
 if(owl){for(const side of [-1,1])tuft(color,side*.35,1.35,-.02,.10,.14,-side*.3);}
 else if(type==='chicken'){for(let i=-1;i<=1;i++)tuft('#efa7a0',i*.095,1.46-Math.abs(i)*.025,0,.083,.12,0);}
 else if(['ostrich','kiwi','pigeon'].includes(type)){tuft(cream,-.045,1.47,0,.09,.12,-.45);tuft(color,.065,1.46,.015,.09,.11,.55);}
 else if(['flamingo','crane','swan'].includes(type)){tuft(cream,-.045,1.45,.015,.10,.085,-.35);}
 else if(penguin){if(type==='emperor'&&adult)for(const side of [-1,1])ball(group,'#f2d995',side*.37,.78,.28,.062,.082,.035);}
 else {tuft(type==='phoenix'?'#f6cb88':cream,0,1.47,0,.10,.14,-.3);}
 if(adult&&['peacock','phoenix','paradise'].includes(type)){
  for(let i=-2;i<=2;i++){
   const fanColor=type==='phoenix'?(i%2?'#f2b18b':'#f5d99f'):type==='peacock'?(i%2?'#b1cbbd':shell):shell;
   ball(group,fanColor,i*.21,.88+(2-Math.abs(i))*.10,-.40,.17,.37,.065,-i*.3);
   if(type!=='phoenix')ball(group,type==='peacock'?'#e4d4a3':'#f6dfad',i*.21,1.06+(2-Math.abs(i))*.10,-.47,.075,.085,.018,-i*.3);
  }
 }
 if(adult&&type==='parrot')ball(group,'#e1d597',0,.40,-.49,.11,.24,.055,.15);
 if(adult&&type==='eagle')for(const side of [-1,1])tuft(cream,side*.37,1.12,.34,.11,.045,side*.2);
 if(!adult)group.scale.setScalar(.84);
}
export function flapBird(root,time,reduced=false){
 const type=root.userData.birdType,speed=type==='hummingbird'?10:['phoenix','eagle'].includes(type)?3:4.5,amplitude=['penguin','emperor'].includes(type)?.13:.23;
 (root.userData.wings||[]).forEach((wing,i)=>{const side=i===0?-1:1;wing.rotation.z=side*(.10+(reduced?0:(Math.sin(time*speed)+1)*amplitude));wing.rotation.x=reduced?0:Math.sin(time*speed)*.055;});
}
