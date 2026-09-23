// World units / seconds. Knockback temporarily reduces steering and ice drag.
export function applyImpulse(a,x,z){
  const resistance=(a.shield>0?(a.shieldFactor??.25):1)/(a.weight||1);
  a.vx+=x*resistance;a.vz+=z*resistance;
}
export function launchDash(a) {
  if (!a.alive || a.cooldown > 0) return false;
  a.vx += a.dx * 7.8;
  a.vz += a.dz * 7.8;
  a.cooldown = 3;
  a.dashTime = .34;
  return true;
}

export function moveActor(a, ix, iz, acceleration, dt, surfaceDrag = 1.15) {
  a.impact = Math.max(0, a.impact - dt);
  a.stagger = Math.max(0, a.stagger - dt);
  const control = (a.stagger > 0 ? .22 : a.haste>0 ? 1.6 : 1)*(a.moveSpeed||1)*(a.slow>0?.5:1);
  const drag = a.stagger > 0 ? .55 : a.dashTime > 0 ? .8 : surfaceDrag;
  const decay = Math.exp(-drag * dt);
  a.vx = (a.vx + ix * acceleration * control * dt) * decay;
  a.vz = (a.vz + iz * acceleration * control * dt) * decay;
  const speed = Math.hypot(a.vx, a.vz);
  if (speed > 14) { a.vx *= 14 / speed; a.vz *= 14 / speed; }
  a.x += a.vx * dt;
  a.z += a.vz * dt;
}

export function collide(a, b, bounce = 1) {
  if (!a.alive || !b.alive) return null;
  const dx = b.x - a.x, dz = b.z - a.z, distance = Math.hypot(dx, dz);
  if (distance >= 1.08) return null;
  const nx = distance > .0001 ? dx / distance : 1;
  const nz = distance > .0001 ? dz / distance : 0;
  const separation = (1.08 - distance) * .5;
  a.x -= nx * separation; a.z -= nz * separation;
  b.x += nx * separation; b.z += nz * separation;
  const closing = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz;
  if (closing <= 0) return null;
  const aDash = a.dashTime > 0 && a.dx * nx + a.dz * nz > .4;
  const bDash = b.dashTime > 0 && b.dx * nx + b.dz * nz < -.4;
  // Tiny resting contacts resolve without constantly generating bounce boosts.
  const strong = closing > .65;
  const impulse = (closing * .98 + (strong ? .85 : 0)) * (strong ? bounce : 1);
  let ax=-nx*impulse,az=-nz*impulse,bx=nx*impulse,bz=nz*impulse;
  if (aDash) {
    bx+=nx*3.8;bz+=nz*3.8;
    ax+=nx*impulse*.45;az+=nz*impulse*.45;
    a.dashTime = 0;
  }
  if (bDash) {
    ax-=nx*3.8;az-=nz*3.8;
    bx-=nx*impulse*.45;bz-=nz*impulse*.45;
    b.dashTime = 0;
  }
  applyImpulse(a,ax*(b.power||1),az*(b.power||1));applyImpulse(b,bx*(a.power||1),bz*(a.power||1));
  if (!strong && !aDash && !bDash) return null;
  a.impact = b.impact = .24;
  a.hitStrength=b.hitStrength=Math.min(1,closing/9);
  a.stagger = bDash ? .38 : aDash ? .08 : .22;
  b.stagger = aDash ? .38 : bDash ? .08 : .22;
  if(a.shield>0)a.stagger*=.25;
  if(b.shield>0)b.stagger*=.25;
  return { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2, dash: aDash || bDash,dx:bDash?-nx:nx,dz:bDash?-nz:nz,strength:closing,indices:[a.index,b.index] };
}
