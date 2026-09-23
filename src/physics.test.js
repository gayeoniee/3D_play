import test from 'node:test';
import assert from 'node:assert/strict';
import { collide, launchDash, moveActor } from './physics.js';
import { maps, createMap, disposeMap } from './maps.js';

const egg = (values = {}) => ({ x:0,z:0,vx:0,vz:0,dx:1,dz:0,alive:true,
  cooldown:0,dashTime:0,impact:0,stagger:0,...values });

test('player can brake after a hit while opponents retain satisfying knockback',()=>{
 const player=egg({playerControlled:true,x:1}),bot=egg({x:1});
 collide(egg({vx:6,power:.82}),player);collide(egg({vx:6,power:.82}),bot);
 assert.ok(player.vx<bot.vx);
 for(let i=0;i<24;i++){moveActor(player,-1,0,8,1/120);moveActor(bot,-1,0,8,1/120);}
 assert.ok(player.x<bot.x);assert.ok(player.vx<bot.vx);
});

test('a normal hit slides a resisting opponent farther than the original physics', () => {
  const a=egg({vx:4}), b=egg({x:1});
  collide(a,b);
  const origin=b.x;
  let oldVelocity=4*.86+.35, oldDistance=0;
  for(let i=0;i<60;i++) {
    moveActor(b,-1,0,6.1,1/120);
    oldVelocity=(oldVelocity-6.1/120)*Math.exp(-1.35/120);
    oldDistance+=oldVelocity/120;
  }
  assert.ok(b.x-origin > oldDistance*2);
});

test('dash transfers a bigger impulse and retains forward momentum', () => {
  const a=egg({vx:7}), b=egg({x:1});
  const c=egg({vx:7,dashTime:.3}), d=egg({x:1});
  collide(a,b);
  assert.equal(collide(c,d).dash,true);
  assert.ok(d.vx>b.vx+3);
  assert.ok(c.vx>a.vx);
  assert.equal(c.dashTime,0);
  assert.ok(d.stagger>c.stagger);
});

test('separating contacts and tiny resting contacts do not create extra energy', () => {
  const a=egg({vx:-1}), b=egg({x:1,vx:1});
  assert.equal(collide(a,b),null);
  assert.equal(a.vx,-1);assert.equal(b.vx,1);
  const c=egg({vx:.01}),d=egg({x:1});
  assert.equal(collide(c,d),null);
  assert.ok(c.vx*c.vx+d.vx*d.vx<=.0001);
});

test('coincident centers resolve without NaN and directional dash is symmetric', () => {
  const a=egg({vx:4}),b=egg();collide(a,b);
  assert.ok(Number.isFinite(a.vx));assert.ok(Math.abs(a.x-b.x)>=1.08);
  const c=egg(),d=egg({x:1,vx:-7,dx:-1,dashTime:.3});
  assert.equal(collide(c,d).dash,true);
  assert.ok(c.vx < -10);assert.equal(d.dashTime,0);
});

test('dash cooldown and eliminated actors cannot be bypassed', () => {
  const a=egg();assert.equal(launchDash(a),true);
  const velocity=a.vx;assert.equal(launchDash(a),false);assert.equal(a.vx,velocity);
  assert.equal(launchDash(egg({alive:false})),false);
  assert.equal(collide(a,egg({alive:false})),null);
});

test('forest brakes faster than ice and kiln has stronger rebound', () => {
  const ice=egg({vx:5}),forest=egg({vx:5});
  for(let i=0;i<120;i++) {
    moveActor(ice,0,0,8,1/120,maps[0].drag);
    moveActor(forest,0,0,8,1/120,maps[2].drag);
  }
  assert.ok(ice.x>forest.x*1.3);
  const a=egg({vx:4}),b=egg({x:1}),c=egg({vx:4}),d=egg({x:1});
  collide(a,b,maps[0].bounce);collide(c,d,maps[1].bounce);
  assert.ok(d.vx>b.vx);
});

test('all map surfaces match collision radii and dispose cleanly', () => {
  for(const map of maps){
    const {root,platform}=createMap(map);
    assert.equal(platform.children[1].geometry.parameters.radiusTop,map.radius);
    assert.ok(map.radius>5.6);
    disposeMap(root);
    assert.equal(root.parent,null);
  }
});
