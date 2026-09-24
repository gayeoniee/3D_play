import * as THREE from 'three';
import {birdKinds} from './evolution.js';
import {eggs} from './eggs.js';

export function setBirdForm(root,species,stage){
 if(root.userData.birdStage===stage)return;
 root.userData.birdStage=stage;
 const body=root.userData.body,old=root.userData.bird;
 if(old){old.removeFromParent();old.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});}
 body.children.forEach(o=>{if(o!==root.userData.dress)o.visible=stage===0;});
 root.userData.wings=[];if(!stage)return;
 const group=new THREE.Group();body.add(group);root.userData.bird=group;
 const type=birdKinds[species][2],adult=stage===2,color=eggs[species].color;
 root.userData.birdType=type;
 const long=adult&&['ostrich','flamingo','crane','swan'].includes(type);
 const penguin=['penguin','emperor'].includes(type),owl=['owl','snowowl'].includes(type);
 const headY=long?1.95:1.22,leg=long?.54:.17;
 function ball(parent,c,x,y,z,sx,sy,sz){const m=new THREE.Mesh(new THREE.SphereGeometry(1,14,10),new THREE.MeshStandardMaterial({color:c,roughness:.78}));m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
 function feather(parent,c,x,y,z,sx,sy,sz,angle=0){const m=ball(parent,c,x,y,z,sx,sy,sz);m.rotation.z=angle;return m;}
 ball(group,penguin&&adult?'#536576':color,0,leg+.6,0,adult?.49:.43,adult?.65:.49,.38);
 ball(group,penguin?'#fff3d9':'#fff0c7',0,leg+.61,.29,.31,.4,.13);
 if(long)ball(group,color,0,1.42,.02,.13,.5,.14);
 ball(group,color,0,headY,.08,owl?.49:.37,owl?.42:.36,.33);
 for(const s of [-1,1]){
   ball(group,'#3f4e48',s*.14,headY+.04,.382,.038,.052,.03);
   ball(group,'#ffffff',s*.14-.009,headY+.06,.404,.011,.013,.01);
   ball(group,'#edb0a0',s*.24,headY-.09,.34,.065,.034,.018);
   if(long)ball(group,'#d7a45c',s*.18,.35,.02,.046,.34,.05);
   ball(group,'#e5af59',s*.18,.09,.14,.13,.07,.21);
   const wing=new THREE.Group();wing.position.set(s*.39,leg+.89,-.02);group.add(wing);root.userData.wings.push(wing);
   const length=penguin?.36:adult?(['phoenix','eagle','paradise'].includes(type)?.7:.53):.25;
   feather(wing,color,s*.14,-length*.45,0,.16,length,.12,-s*.28);
   if(adult&&!penguin)for(let j=0;j<3;j++)feather(wing,j%2?'#f5dfb0':color,s*(.14+j*.05),-length*.8-j*.055,-.03,.065,.23,.075,-s*.25);
 }
 const beak=new THREE.Mesh(new THREE.ConeGeometry(['duck','swan'].includes(type)?.14:.09,['kiwi','hummingbird'].includes(type)?.48:.22,8),new THREE.MeshStandardMaterial({color:'#e5ae55'}));
 beak.rotation.x=Math.PI/2;beak.position.set(0,headY-.06,.47);if(type==='duck')beak.scale.z=.45;group.add(beak);
 const plume=['peacock','phoenix','paradise'].includes(type)&&adult;
 if(plume){for(let i=-3;i<=3;i++){
   const f=feather(group,type==='phoenix'?(i%2?'#ef9a52':'#f4cc65'):color,i*.16,1,-.43,.13,.72,.08,-i*.24);
   if(type!=='phoenix')ball(f,type==='peacock'?'#73a99a':'#ffe6a0',0,.63,-.5,.5,.15,.4);
 }}else for(let i=-1;i<=1;i++)feather(group,color,i*.1,leg+.48,-.4,.1,adult?.38:.18,.07,i*.25);
 if(['chicken','parrot','phoenix','eagle','emperor'].includes(type))for(let i=-1;i<=1;i++)feather(group,type==='chicken'?'#e9957d':'#f4d884',i*.1,headY+.35,.04,.075,.15+(.04*(1-Math.abs(i))),.08,i*.2);
 if(owl)for(const s of [-1,1])feather(group,color,s*.31,headY+.29,.02,.1,.17,.08,-s*.5);
 if(!adult)group.scale.setScalar(.9);
}
export function flapBird(root,time,reduced=false){
 const wings=root.userData.wings||[];
 const type=root.userData.birdType,speed=type==='hummingbird'?15:['phoenix','eagle'].includes(type)?3.5:6,amplitude=['penguin','emperor'].includes(type)?.2:.38;
 wings.forEach((wing,i)=>{const side=i===0?-1:1;wing.rotation.z=side*(.2+(reduced?0:(Math.sin(time*speed)+1)*amplitude));wing.rotation.x=reduced?0:Math.sin(time*speed)*.1;});
}
