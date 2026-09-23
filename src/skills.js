import { applyImpulse } from './physics.js';

import { eggs } from './eggs.js';
export const skills=eggs.map(e=>({name:e.skillName,icon:e.icon,color:e.color,description:e.description,cooldown:3,kind:e.kind}));

function pushNearby(a,actors,range,force,cone=false,swirl=0,slow=0) {
  for(const b of actors) {
    if(b===a||!b.alive)continue;
    const x=b.x-a.x,z=b.z-a.z,d=Math.hypot(x,z);
    if(d>range)continue;
    const nx=d>.001?x/d:a.dx,nz=d>.001?z/d:a.dz;
    if(cone&&nx*a.dx+nz*a.dz<.45)continue;
    const strength=force*(1-.3*d/range)*(a.power||1);
    applyImpulse(b,(nx-nz*swirl)*strength,(nz+nx*swirl)*strength);
    b.impact=.24;b.stagger=Math.max(b.stagger||0,b.shield>0?.05:.25);
    b.hitStrength=Math.min(1,strength/9);
    if(!(b.feedbackCooldown>0)){b.skillHit={x:b.x,z:b.z,dx:nx,dz:nz,strength:force,color:skills[a.index].color,indices:[a.index,b.index]};b.feedbackCooldown=.18;}
    if(slow)b.slow=Math.max(b.slow||0,slow);
  }
}

export function activateSkill(a,actors) {
  if(!a.alive||a.cooldown>0)return false;
  a.cooldown=3;a.skillTime=.45;
  const id=a.index,kind=skills[id]?.kind;
  a.shieldFactor=id===8?.18:.25;
  switch(kind) {
    case 0:
      a.vx+=a.dx*9;a.vz+=a.dz*9;a.dashTime=.4;
      if(id===7||id===12){a.echo=.28;a.echoDx=a.dx;a.echoDz=a.dz;}break;
    case 1:
      a.shield=1.2;a.skillTime=1.2;a.vx*=.45;a.vz*=.45;
      pushNearby(a,actors,1.8,2.8);break;
    case 2:
      pushNearby(a,actors,id===14?3.2:2.8,8,false,0,id===6?.8:0);break;
    case 3:
      a.vx+=a.dx*4.5;a.vz+=a.dz*4.5;a.haste=id===15?1.5:1;a.skillTime=a.haste;a.dashTime=.2;
      if(id===10||id===15)a.shield=id===10?.45:.3;break;
    case 4:
      a.whirl=.9;a.skillTime=.9;break;
    case 5:
      pushNearby(a,actors,id===17?4.3:3.6,id===11?6.2:10,true);
      if(id===11)a.echo=.3;
      a.vx-=a.dx*1.2;a.vz-=a.dz*1.2;break;
    default:
      a.cooldown=0;a.skillTime=0;return false;
  }
  if(id===8)a.shield=a.skillTime=1.5;
  if(id===13){a.shield=a.skillTime=1.4;pushNearby(a,actors,2.2,1.5,false,0,1.2);}
  return true;
}

export function tickSkill(a,actors,dt) {
  for(const key of ['cooldown','dashTime','shield','haste','skillTime','slow','feedbackCooldown'])a[key]=Math.max(0,(a[key]||0)-dt);
  if(a.echo>0){a.echo=Math.max(0,a.echo-dt);if(a.echo===0&&a.alive){
    if(a.index===7){a.vx+=a.echoDx*3.8;a.vz+=a.echoDz*3.8;a.dashTime=.2;}
    if(a.index===12)pushNearby(a,actors,2,3.5);
    if(a.index===11)pushNearby(a,actors,3.6,6.2,true);
  }}
  if(a.whirl>0){
    const activeDt=Math.min(a.whirl,dt);a.whirl=Math.max(0,a.whirl-dt);
    if(a.alive)pushNearby(a,actors,2.5,11*activeDt,false,.45,a.index===9?.4:a.index===16?.75:0);
  }
}
