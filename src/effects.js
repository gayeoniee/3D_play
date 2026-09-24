import * as THREE from 'three';

export function createEffects(scene,reduced) {
  const rings=[],particles=[],shells=[];
  const shellGeometry=new THREE.SphereGeometry(.48,8,6,0,Math.PI*.65,.3,Math.PI*.65);
  for(let i=0;i<36;i++){
    const mesh=new THREE.Mesh(shellGeometry,new THREE.MeshStandardMaterial({side:THREE.DoubleSide,roughness:.9,transparent:true,depthWrite:false}));
    mesh.visible=false;scene.add(mesh);shells.push({mesh,life:0});
  }
  const ringGeometry=new THREE.RingGeometry(.8,1,48);
  const star=new THREE.Shape();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?.045:.11;const x=Math.cos(a)*r,y=Math.sin(a)*r;if(i===0)star.moveTo(x,y);else star.lineTo(x,y);}star.closePath();
  const particleGeometry=new THREE.ShapeGeometry(star);
  for(let i=0;i<18;i++){
    const mesh=new THREE.Mesh(ringGeometry,new THREE.MeshBasicMaterial({transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false}));
    mesh.rotation.x=-Math.PI/2;mesh.visible=false;scene.add(mesh);rings.push({mesh,life:0});
  }
  for(let i=0;i<64;i++){
    const mesh=new THREE.Mesh(particleGeometry,new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}));mesh.rotation.x=-.55;
    mesh.visible=false;scene.add(mesh);particles.push({mesh,life:0});
  }
  function burst(x,z,color,size=1,dx=0,dz=0,cone=false){
    if(reduced)return;
    const ring=rings.find(e=>e.life<=0)||rings[0];
    Object.assign(ring,{life:.45,total:.45,size});ring.mesh.material.color.set(color);
    ring.mesh.position.set(x,.16,z);ring.mesh.scale.setScalar(.15);ring.mesh.material.opacity=.65;ring.mesh.visible=true;
    for(let i=0;i<10;i++){
      const p=particles.find(e=>e.life<=0);if(!p)break;
      const angle=cone?Math.atan2(dz,dx)+(i/9-.5)*1.6:i*Math.PI*2/10;
      Object.assign(p,{life:.48,total:.48,vx:Math.cos(angle)*size*3,vz:Math.sin(angle)*size*3});
      p.mesh.position.set(x,.35,z);p.mesh.scale.setScalar(Math.min(1.8,.8+size*.3));p.mesh.material.color.set(color);p.mesh.material.opacity=.8;p.mesh.visible=true;
    }
  }
  function crack(x,z,color){
    if(reduced)return;
    burst(x,z,'#ffe4a1',1.3);
    for(let i=0;i<6;i++){
      const e=shells.find(s=>s.life<=0);if(!e)break;
      const angle=i*Math.PI/3;
      Object.assign(e,{life:.8,total:.8,vx:Math.cos(angle)*2,vz:Math.sin(angle)*2,vy:2.4+(i%2)*.5});
      e.mesh.position.set(x+Math.cos(angle)*.15,.75,z+Math.sin(angle)*.15);e.mesh.rotation.set(i*.7,angle,i*.4);e.mesh.material.color.set(color);e.mesh.material.opacity=1;e.mesh.visible=true;
    }
  }
  return {burst,crack,
    update(dt){
      for(const e of shells){if(e.life<=0)continue;e.life=Math.max(0,e.life-dt);e.mesh.visible=e.life>0;e.vy-=8*dt;e.mesh.position.x+=e.vx*dt;e.mesh.position.z+=e.vz*dt;e.mesh.position.y+=e.vy*dt;e.mesh.rotation.x+=dt*3;e.mesh.rotation.z+=dt*2;e.mesh.material.opacity=Math.min(1,e.life/.3);}
      for(const e of rings){if(e.life<=0)continue;e.life=Math.max(0,e.life-dt);e.mesh.visible=e.life>0;e.mesh.scale.setScalar((1-e.life/e.total)*e.size);e.mesh.material.opacity=e.life/e.total*.65;}
      for(const e of particles){if(e.life<=0)continue;e.life=Math.max(0,e.life-dt);e.mesh.visible=e.life>0;e.mesh.position.x+=e.vx*dt;e.mesh.position.z+=e.vz*dt;e.mesh.position.y=.35+Math.sin((1-e.life/e.total)*Math.PI)*.65;e.mesh.rotation.z+=dt*4;e.mesh.material.opacity=e.life/e.total*.8;}
    },
    reset(){for(const e of [...rings,...particles,...shells]){e.life=0;e.mesh.visible=false;}}
  };
}
