import * as THREE from 'three';
// One reusable set of tools; the same rig fits eggs, chicks and adult birds.
export function createExplorationGear(scene,reduced){
 const grip=new THREE.Group(),rod=new THREE.Group(),net=new THREE.Group(),effects=new THREE.Group();grip.position.set(.58,.65,.12);grip.add(rod,net);scene.add(effects);
 const materials=[],geometries=[];
 function mesh(parent,geometry,color,x,y,z,scale=[1,1,1],transparent=false){geometries.push(geometry);const material=new THREE.MeshStandardMaterial({color,roughness:.65,transparent,opacity:transparent?.23:1,side:THREE.DoubleSide});materials.push(material);const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);m.scale.set(...scale);parent.add(m);return m;}
 const sphere=()=>new THREE.SphereGeometry(1,12,8);
 mesh(grip,sphere(),'#fff1cf',0,.04,0,[.13,.13,.13]);
 mesh(rod,new THREE.CylinderGeometry(.025,.05,1.9,8),'#b88859',0,.8,0);
 mesh(rod,new THREE.CylinderGeometry(.065,.065,.38,10),'#72543c',0,0,0);
 const reel=mesh(rod,new THREE.TorusGeometry(.12,.035,8,16),'#d8b767',.08,.1,0);reel.rotation.y=Math.PI/2;
 const lineGeometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3()]);geometries.push(lineGeometry);const lineMaterial=new THREE.LineBasicMaterial({color:'#eee5c8'});materials.push(lineMaterial);const line=new THREE.Line(lineGeometry,lineMaterial);effects.add(line);
 const bobber=mesh(effects,sphere(),'#e79083',0,0,0,[.085,.13,.085]);mesh(bobber,sphere(),'#fff4db',0,.6,0,[1,.5,1]);
 mesh(net,new THREE.CylinderGeometry(.035,.045,1.4,8),'#c99f65',0,.6,0);
 mesh(net,new THREE.TorusGeometry(.39,.045,8,28),'#f1d88e',0,1.65,0);
 mesh(net,new THREE.SphereGeometry(.38,16,10,0,Math.PI*2,0,Math.PI/2),'#f7fff1',0,1.65,0,[1,1,1],true).rotation.x=Math.PI/2;
 for(let i=-2;i<=2;i++){const v=i*.105,l=Math.sqrt(.35*.35-v*v)*2;mesh(net,new THREE.CylinderGeometry(.007,.007,l,4),'#e3ead5',v,1.65,.03);const cross=mesh(net,new THREE.CylinderGeometry(.007,.007,l,4),'#e3ead5',0,1.65+v,.03);cross.rotation.z=Math.PI/2;}
 const prize=new THREE.Group();effects.add(prize);const fish=new THREE.Group(),butterfly=new THREE.Group();prize.add(fish,butterfly);
 mesh(fish,sphere(),'#8fd0d0',0,0,0,[.34,.19,.14]);const tail=mesh(fish,new THREE.ConeGeometry(.21,.28,3),'#eacb7a',-.38,0,0);tail.rotation.z=-Math.PI/2;mesh(fish,sphere(),'#3e5658',.19,.055,.12,[.028,.028,.028]);mesh(fish,sphere(),'#edf9ed',.05,-.07,.07,[.2,.065,.1]);
 const wings=[];for(const s of [-1,1])wings.push(mesh(butterfly,sphere(),'#d4a6de',s*.18,0,0,[.23,.035,.3]));mesh(butterfly,sphere(),'#86617e',0,0,0,[.04,.06,.2]);
 const drops=Array.from({length:10},(_,i)=>mesh(effects,sphere(),i%2?'#c9e8e3':'#f6dda0',0,0,0,[.04,.04,.04]));
 const ripple=mesh(effects,new THREE.TorusGeometry(.35,.025,6,32),'#e9f9f1',0,.2,0);ripple.rotation.x=Math.PI/2;
 let actor=null,kind='butterfly',state='carry',elapsed=0,clock=0,target=new THREE.Vector3();
 function equip(mesh,tool){if(actor!==mesh){grip.removeFromParent();actor=mesh;if(actor)actor.add(grip);}kind=tool;grip.visible=!!actor&&!!tool;rod.visible=tool==='fish';net.visible=tool==='butterfly';}
 function event(action,tool,point){if(tool)kind=tool;if(point)target.set(point.x,.22,point.z);elapsed=0;if(action==='start')state=kind==='fish'?'cast':'ready';if(action==='tap')state=kind==='fish'?'reel':'swing';if(action==='success'||action==='miss'){state=action;}if(action==='end')state=state==='success'?'release':'carry';}
 function update(dt,moving=false){clock+=dt;elapsed+=dt;effects.visible=!!actor&&grip.visible;if(!actor)return;if(state==='release'&&elapsed>.9)state='carry';const active=state!=='carry';grip.rotation.set(kind==='fish'?.35:.12,0,-.12);grip.position.y=.65+(!reduced&&moving?Math.sin(clock*9)*.045:0);
  if(state==='cast'){grip.rotation.x=-.65+Math.min(1,elapsed/.8)*1.5;if(elapsed>.8){state='wait';elapsed=0;}}
  if(state==='wait')grip.rotation.x=.85+Math.sin(clock*3)*.035;
  if(state==='swing'){grip.rotation.x=.2+Math.sin(Math.min(1,elapsed/.55)*Math.PI)*1.65;grip.rotation.z=-.12-Math.sin(Math.min(1,elapsed/.55)*Math.PI)*.6;if(elapsed>.55)state='ready';}
  if(state==='success'||state==='miss'||state==='reel')grip.rotation.x=kind==='fish'? .8-Math.min(1,elapsed/.6)*1.4:.25+Math.sin(Math.min(1,elapsed/.5)*Math.PI)*1.5;
  actor.userData.body.rotation.z=active&&!reduced?Math.sin(clock*4)*.035:actor.userData.body.rotation.z;
  const fishing=active&&kind==='fish';line.visible=bobber.visible=ripple.visible=fishing;const hand=new THREE.Vector3();rod.localToWorld(hand.set(0,1.75,0));const cast=Math.min(1,elapsed/.8);bobber.position.copy(target);if(state==='cast')bobber.position.lerpVectors(hand,target,cast);if(state==='wait')bobber.position.y+=Math.sin(clock*5)*.04;if(state==='success'||state==='miss')bobber.position.lerp(hand,Math.min(1,elapsed/.65));
  const a=line.geometry.attributes.position;a.setXYZ(0,hand.x,hand.y,hand.z);a.setXYZ(1,bobber.position.x,bobber.position.y,bobber.position.z);a.needsUpdate=true;line.geometry.computeBoundingSphere();ripple.position.copy(target);ripple.scale.setScalar(.8+(clock%1.4)*.5);
  prize.visible=state==='success'||state==='release';fish.visible=kind==='fish';butterfly.visible=kind==='butterfly';const center=new THREE.Vector3();actor.getWorldPosition(center);prize.position.copy(center).add(new THREE.Vector3(0,2.1+(!reduced?Math.sin(clock*5)*.09:0),0));if(state==='success'&&kind==='fish')prize.position.lerpVectors(target,prize.position,Math.min(1,elapsed/.85));if(state==='release'){const destination=kind==='fish'?target:new THREE.Vector3(center.x+3,center.y+4,center.z-2);prize.position.lerp(destination,Math.min(1,elapsed/.9));}prize.rotation.y=clock*.7;reel.rotation.x=state==='success'?clock*12:0;wings.forEach((w,i)=>w.rotation.z=reduced?0:Math.sin(clock*12)*(i?1:-1)*.65);
  drops.forEach((d,i)=>{d.visible=!reduced&&(state==='success'||state==='cast')&&elapsed<.9;const a=i*Math.PI*.2,t=elapsed;d.position.copy(state==='cast'?target:center);d.position.x+=Math.cos(a)*t;d.position.z+=Math.sin(a)*t;d.position.y+=.25+Math.sin(t*Math.PI)*(.5+i%3*.15);});
 }
 return {equip,event,update,get active(){return state!=='carry';},snapshot:()=>({kind,state,visible:grip.visible}),hide(){equip(null,null);effects.visible=false;state='carry';}};
}
