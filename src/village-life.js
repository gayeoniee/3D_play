import { clampPlacement } from './village-editor.js';
import { createNavigation,villageObstacles } from './village-navigation.js';
export const favoriteThings=['따끈한 토스트','푹신한 낮잠 베개','복숭아꽃 향기','시원한 산들바람','보랏빛 꽃다발','연못의 물방울','따뜻한 코코아','달콤한 망고','말차 한 잔','노을빛 산책','새벽 이슬','포도 한 송이','모닥불 이야기','눈꽃 결정','번쩍이는 별','달빛 자장가','꿀 한 숟가락','별똥별 소원'];
export function createVillageLife({residents,root,data,container,reduced,project}){
 const bubbles=residents.map(r=>{const e=document.createElement('span');e.className='resident-thought';e.hidden=true;container.append(e);r.activity='산책 중';return e;});
 let clock=0,navigation,wasEditing=false;
 const props=()=>root.children.filter(o=>o.userData.layoutId);
 const anchor=r=>data.layout['egg-'+r.index]||{x:r.x,z:r.z};
 function choose(r){
  const a=anchor(r),kind=(Math.floor(clock/13)+r.index)%5;
  let target={...a};r.kind=kind;r.activity=['총총 산책 중','꾸벅꾸벅 낮잠 중','친구에게 인사 중','꽃향기 맡는 중','분수 구경 중'][kind];r.words=['오늘은 어디로 갈까?','zzZ… 말랑한 꿈','안녕! 같이 놀자 ♡','킁킁, 좋은 향기!','물방울이 반짝반짝!'][kind];
  const prefix=kind===1?'bench-':kind===3?'flower-':kind===4?'fountain-':null;
  if(prefix){const p=props().filter(o=>o.userData.layoutId.startsWith(prefix)).sort((b,c)=>b.position.distanceTo(r.mesh.position)-c.position.distanceTo(r.mesh.position))[0];if(p&&Math.hypot(p.position.x-a.x,p.position.z-a.z)<4)target={x:p.position.x,z:p.position.z+(kind===4?1.7:kind===1?.65:1.05)};}
  else if(kind===2){const friend=residents.find(s=>s!==r&&s.mesh.visible&&Math.hypot(s.mesh.position.x-a.x,s.mesh.position.z-a.z)<3);if(friend)target={x:(friend.mesh.position.x+a.x)/2,z:(friend.mesh.position.z+a.z)/2};}
  else target={x:a.x+Math.sin(clock+r.index)*1.1,z:a.z+Math.cos(clock*.7+r.index)*.8};
  const crowded=p=>residents.some(s=>s!==r&&s.mesh.visible&&Math.hypot(p.x-s.mesh.position.x,p.z-s.mesh.position.z)<.95);
  if(!navigation.clear(r.mesh.position)||crowded(r.mesh.position)){const safe=navigation.nearest(r.mesh.position,crowded);if(safe){r.mesh.position.x=safe.x;r.mesh.position.z=safe.z;}}
  r.target=clampPlacement(target.x,target.z,.8);r.route=navigation.path(r.mesh.position,r.target);
  if(r.route.length&&!navigation.clear(r.mesh.position)){r.mesh.position.x=r.route[0].x;r.mesh.position.z=r.route[0].z;}
  r.waypoint=1;
 }
 return {update(dt,editing,selected,speaking=false){
  clock+=dt;
  if(!editing&&!reduced&&(!navigation||wasEditing)){navigation=createNavigation(villageObstacles(props()));residents.forEach(r=>r.next=0);}
  if(wasEditing&&!editing)residents.forEach(r=>r.next=0);wasEditing=editing;
  residents.forEach((r,i)=>{
   const mesh=r.mesh,body=mesh.userData.body,a=anchor(r);bubbles[i].hidden=true;if(!mesh.visible)return;
   if(editing||reduced){mesh.position.x=a.x;mesh.position.z=a.z;r.next=0;body.rotation.set(0,0,0);body.position.y=0;mesh.userData.arms[1].rotation.z=.4;mesh.userData.feet.forEach(f=>f.position.y=.14);mesh.userData.eyes?.forEach(({eye,shine})=>{eye.scale.y=.065;shine.visible=true;});return;}
   r.next=(r.next||0)-dt;if(r.next<=0){choose(r);r.next=11+(i%7)*.55;}
   let goal=r.route[r.waypoint];if(goal&&Math.hypot(goal.x-mesh.position.x,goal.z-mesh.position.z)<.06)goal=r.route[++r.waypoint];
   let moving=false;
   if(goal){const dx=goal.x-mesh.position.x,dz=goal.z-mesh.position.z,d=Math.hypot(dx,dz),step=Math.min(d,dt*.62);
    const occupied=p=>residents.some(s=>s!==r&&s.mesh.visible&&Math.hypot(p.x-s.mesh.position.x,p.z-s.mesh.position.z)<.95);
    const candidates=[{x:mesh.position.x+dx/d*step,z:mesh.position.z+dz/d*step}];
    for(const side of [i%2?1:-1,i%2?-1:1])candidates.push({x:mesh.position.x+(dx-dz*side)/d*step*.7,z:mesh.position.z+(dz+dx*side)/d*step*.7});
    const next=candidates.find(p=>navigation.segment(mesh.position,p)&&!occupied(p));if(next){mesh.position.x=next.x;mesh.position.z=next.z;moving=true;}
   }
   r.activity=moving?['총총 산책 중','쉬러 가는 중','친구를 만나러 가는 중','꽃밭으로 총총','분수로 산책 중'][r.kind]:['잠깐 쉬는 중','꾸벅꾸벅 낮잠 중','친구에게 인사 중','꽃향기 맡는 중','분수 구경 중'][r.kind];
   const waiting=!!goal&&!moving,sleeping=!goal&&r.kind===1;if(waiting)r.activity='친구에게 길을 양보하는 중';
   body.rotation.z=moving?Math.sin(clock*7+i)*.055:sleeping?.13:Math.sin(clock*2+i)*.018;
   body.position.y=sleeping?-.07:0;
   mesh.userData.eyes?.forEach(({eye,shine})=>{eye.scale.y=sleeping?.013:.065;shine.visible=!sleeping;});
   mesh.userData.arms[1].rotation.z=!goal&&r.kind===2?.9+Math.sin(clock*7)*.35:.4;
   mesh.userData.feet[0].position.y=.14+(moving?Math.sin(clock*8+i)*.07:0);mesh.userData.feet[1].position.y=.14-(moving?Math.sin(clock*8+i)*.07:0);
   if(!moving&&!(i===selected&&speaking)&&(i===selected||i===Math.floor(clock/5)%residents.length)&&r.next>3){bubbles[i].hidden=false;bubbles[i].textContent=waiting?'먼저 가도 괜찮아 ♡':r.words;project(mesh,bubbles[i],1.9);}
  });
 },clear:p=>navigation?.clear(p)??true,status:id=>residents[id].activity,reset(){residents.forEach(r=>r.next=0);}};
}
