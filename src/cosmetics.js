import * as THREE from 'three';
export function dressEgg(root,outfit){
 if(root.userData.outfit===outfit)return;
 const old=root.userData.dress;if(old){old.removeFromParent();old.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});}
 root.userData.outfit=outfit;const group=new THREE.Group();root.userData.body.add(group);root.userData.dress=group;
 const add=(geometry,color,x,y,z)=>{const m=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.7}));m.position.set(x,y,z);m.castShadow=true;group.add(m);return m;};
 if(outfit==='ribbon'){
  for(const s of [-1,1]){const m=add(new THREE.SphereGeometry(.12,12,8),'#e7779a',s*.13,.65,.46);m.scale.set(1,.7,.45);m.rotation.z=s*.35;}
  add(new THREE.SphereGeometry(.055,10,8),'#ffdf9a',0,.65,.5);
 }else if(outfit==='hat'){
  add(new THREE.CylinderGeometry(.4,.4,.06,24),'#cb9867',0,1.65,0);
  add(new THREE.CylinderGeometry(.23,.29,.3,24),'#f1d69a',0,1.81,0);
  add(new THREE.CylinderGeometry(.282,.292,.065,24),'#8fae96',0,1.695,0);
 }else if(outfit==='garden'){
  for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const m=add(new THREE.SphereGeometry(.09,10,8),'#efb5cb',Math.cos(a)*.13,.86+Math.sin(a)*.13,.49);m.scale.z=.4;}
  add(new THREE.SphereGeometry(.065,10,8),'#ffe4a4',0,.86,.54);
 }
}
export function createGardenCharm(){
 const g=new THREE.Group();
 for(let i=0;i<3;i++){
  const stem=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.25,6),new THREE.MeshStandardMaterial({color:'#91a47d'}));stem.position.set(i*.18-.18,.2,0);g.add(stem);
  const flower=new THREE.Mesh(new THREE.OctahedronGeometry(.12),new THREE.MeshStandardMaterial({color:['#f0b4ce','#f5dc98','#b3a4d7'][i]}));flower.position.set(i*.18-.18,.38,0);g.add(flower);
 }return g;
}
