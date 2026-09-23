import * as THREE from 'three';

export const maps = [
  { id:'ice', name:'넓은 얼음섬', icon:'❄', radius:7.4, drag:1.05, bounce:1,
    description:'넉넉해진 빙판에서 쭈우욱!', feel:'미끄러움 높음 · 넓은 경기장',
    background:'#dcebe5', ground:'#c5e0da', top:'#dfefee', side:'#9bc8d0', edge:'#f5fff6' },
  { id:'kiln', name:'말랑 불가마', icon:'♨', radius:6.8, drag:1.4, bounce:1.18,
    description:'따끈한 돌판 위에서 통통!', feel:'반동 강함 · 용암 밖으로 조심',
    background:'#f4ddc9', ground:'#df9168', top:'#ae8270', side:'#78625d', edge:'#f4bc77' },
  { id:'forest', name:'도토리 숲', icon:'♧', radius:7.2, drag:1.9, bounce:1,
    description:'폭신한 이끼가 덮인 숲속 무대', feel:'미끄러움 낮음 · 쉬운 방향 전환',
    background:'#e1e8c9', ground:'#c1ce9f', top:'#adc581', side:'#a18460', edge:'#d3dfa0' },
];

export function createMap(config) {
  const root=new THREE.Group(), platform=new THREE.Group();root.add(platform);
  const material=(color,extras={})=>new THREE.MeshStandardMaterial({color,roughness:.85,...extras});
  const mesh=(parent,geometry,color,x,y,z,extras={})=>{
    const object=new THREE.Mesh(geometry,material(color,extras));object.position.set(x,y,z);
    object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;
  };
  const line=(parent,points,color,opacity=.65)=>{
    const object=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p))),new THREE.LineBasicMaterial({color,transparent:true,opacity}));parent.add(object);
  };
  const flatRing=(parent,r,w,color,y,opacity=1)=>{
    const object=new THREE.Mesh(new THREE.RingGeometry(r,r+w,100),new THREE.MeshBasicMaterial({color,transparent:true,opacity,side:THREE.DoubleSide}));object.rotation.x=-Math.PI/2;object.position.y=y;parent.add(object);return object;
  };
  const r=config.radius;
  const ground=mesh(root,new THREE.PlaneGeometry(200,200),config.ground,0,-1.3,0);ground.rotation.x=-Math.PI/2;
  mesh(platform,new THREE.CylinderGeometry(r,r-.15,.8,96),config.side,0,-.45,0);
  mesh(platform,new THREE.CylinderGeometry(r,r,.14,96),config.top,0,.015,0,{roughness:config.id==='ice'?.3:.92});
  const rim=mesh(platform,new THREE.TorusGeometry(r-.075,.065,10,120),config.edge,0,.1,0);rim.rotation.x=Math.PI/2;
  if(config.id==='ice') {
    for(let i=0;i<3;i++)flatRing(root,r+.6+i*1.1,.04,'#eff8e8',-1.28,.45);
    flatRing(platform,r-.7,.024,'#afd2d1',.095,.7);
    for(let i=0;i<8;i++){
      const angle=i*2.399,rr=r-1-(i%3)*.55,x=Math.cos(angle)*rr,z=Math.sin(angle)*rr;
      line(platform,[[x,.1,z],[x+.45,.1,z+.3],[x+.1,.1,z+.9]],'#a0c5cc');
    }
    for(let i=0;i<30;i++){
      const angle=i*2.399,rr=1.3+(i%7)*.7;
      const snow=mesh(platform,new THREE.CircleGeometry(.035+i%3*.02,8),'#ffffff',Math.cos(angle)*rr,.1,Math.sin(angle)*rr);snow.rotation.x=-Math.PI/2;
    }
    [[-8.5,-3,.5],[8.8,2,.4],[-7.8,5,.3],[7,-6,.6]].forEach(([x,z,s])=>mesh(root,new THREE.CylinderGeometry(s,s*.8,.25,5),'#edf8ee',x,-1.13,z));
  } else if(config.id==='kiln') {
    for(let i=0;i<3;i++)flatRing(root,r+.45+i*.95,.09,'#ffd095',-1.27,.5);
    flatRing(platform,r-.5,.07,'#e5af75',.1,.8);
    for(let i=0;i<9;i++){
      const angle=i*Math.PI*2/9;
      const point=(rr,a)=>[Math.cos(a)*rr,.1,Math.sin(a)*rr];
      line(platform,[point(1.3,angle),point(3.1,angle+.13),point(4.5,angle-.08),point(r-.65,angle)],'#f8bd79',.9);
    }
    // Kiln bricks and little ember rocks sit outside the playable stone slab.
    for(let i=0;i<11;i++){
      const angle=Math.PI+i*Math.PI/10,x=Math.cos(angle)*(r+1.2),z=Math.sin(angle)*(r+1.2);
      const brick=mesh(root,new THREE.BoxGeometry(.8,.5,.55),'#ae775f',x,-.96,z);brick.rotation.y=-angle;
      if(i%2===0)mesh(root,new THREE.DodecahedronGeometry(.23),'#ffd194',x,-.58,z,{emissive:'#ed8f3a',emissiveIntensity:.35});
    }
    [[-8,3],[8,2]].forEach(([x,z])=>{
      mesh(root,new THREE.DodecahedronGeometry(.7),'#987665',x,-.95,z);
      mesh(root,new THREE.ConeGeometry(.25,.65,7),'#ffd39b',x,-.35,z,{emissive:'#eb9448',emissiveIntensity:.2});
    });
  } else {
    // A mossy tree-stump arena, with visible wood grain and quiet forest scenery.
    for(let i=0;i<32;i++){
      const angle=i*Math.PI/16,x=Math.cos(angle)*(r-.03),z=Math.sin(angle)*(r-.03);
      line(platform,[[x,-.1,z],[x,-.74,z]],'#7c654c',.5);
    }
    [1.3,2.5,3.9,5.4].forEach(rr=>flatRing(platform,rr,.026,'#839e65',.1,.45));
    const tree=(x,z,size)=>{
      mesh(root,new THREE.CylinderGeometry(.13*size,.18*size,1.2*size,8),'#a08460',x,-1.3+.6*size,z);
      const crown=mesh(root,new THREE.SphereGeometry(.65*size,16,12),'#86a974',x,-1.3+1.55*size,z);crown.scale.y=1.25;
      mesh(root,new THREE.SphereGeometry(.43*size,16,12),'#a2bd83',x-.3*size,-1.3+1.4*size,z+.15);
    };
    [[-8,-3,1.2],[-6,-7,1],[0,-8.7,1.4],[6,-7,1.2],[8,-2,1.1]].forEach(args=>tree(...args));
    for(let i=0;i<8;i++){
      const angle=i*2.399,rr=r+1.2,x=Math.cos(angle)*rr,z=Math.sin(angle)*rr;
      mesh(root,new THREE.CylinderGeometry(.065,.08,.28,8),'#f6e6c5',x,-1.12,z);
      const cap=mesh(root,new THREE.SphereGeometry(.23,16,12),i%2?'#e5b576':'#c68e77',x,-.93,z);cap.scale.y=.5;
    }
    for(let i=0;i<14;i++){
      const angle=i*2.399,rr=r-.35;
      const tuft=mesh(platform,new THREE.ConeGeometry(.1,.18,4),'#84a466',Math.cos(angle)*rr,.17,Math.sin(angle)*rr);tuft.rotation.z=.2;
    }
  }
  return {root,platform};
}

export function disposeMap(root) {
  const geometries=new Set(),materials=new Set();
  root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
  root.removeFromParent();
}
