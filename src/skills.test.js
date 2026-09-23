import test from 'node:test';
import assert from 'node:assert/strict';
import { activateSkill,tickSkill } from './skills.js';
import { collide,moveActor } from './physics.js';
import { recordFalls,completeRanks,standings } from './ranking.js';
const egg=(index,extra={})=>({index,x:0,z:0,vx:0,vz:0,dx:1,dz:0,alive:true,rank:null,cooldown:0,dashTime:0,impact:0,stagger:0,shield:0,haste:0,whirl:0,skillTime:0,...extra});

test('every skill obeys a 3-second cooldown and cannot be cast after falling',()=>{
 for(let i=0;i<6;i++){
   const a=egg(i);assert.equal(activateSkill(a,[a]),true);assert.equal(a.cooldown,3);
   assert.equal(activateSkill(a,[a]),false);tickSkill(a,[a],2.9);assert.equal(activateSkill(a,[a]),false);
   tickSkill(a,[a],.11);assert.equal(activateSkill(a,[a]),true);
   a.cooldown=0;a.alive=false;assert.equal(activateSkill(a,[a]),false);
 }
});
test('butter charge and mint haste have distinct movement behavior',()=>{
 const butter=egg(0),mint=egg(3),normal=egg(2);
 activateSkill(butter,[butter]);activateSkill(mint,[mint]);
 assert.ok(butter.vx>mint.vx);assert.equal(mint.haste,1);
 mint.vx=0;moveActor(mint,1,0,8,.1);moveActor(normal,1,0,8,.1);assert.ok(mint.vx>normal.vx);
 tickSkill(mint,[mint],1.01);assert.equal(mint.haste,0);
});
test('mochi shield reduces both collision and ranged knockback by 75 percent',()=>{
 const a=egg(0,{vx:5}),b=egg(1,{x:1,shield:1});
 const c=egg(0,{vx:5}),d=egg(1,{x:1});collide(a,b);collide(c,d);
 assert.ok(Math.abs(b.vx/d.vx-.25)<.00001);
 const peach=egg(2),shielded=egg(1,{x:2,shield:1}),unshielded=egg(3,{x:-2});
 activateSkill(peach,[peach,shielded,unshielded]);assert.ok(Math.abs(shielded.vx/-unshielded.vx-.25)<.00001);
});
test('peach pushes radially, soda only hits its forward cone, and neither hits dead eggs',()=>{
 for(const index of [2,5]){
 const a=egg(index),front=egg(0,{x:2}),back=egg(1,{x:-2}),far=egg(3,{x:5}),dead=egg(4,{x:1,alive:false});
 activateSkill(a,[a,front,back,far,dead]);assert.ok(front.vx>0);assert.equal(far.vx,0);assert.equal(dead.vx,0);
 if(index===2)assert.ok(back.vx<0);else {assert.equal(back.vx,0);assert.ok(a.vx<0);}
 }
});
test('lilac whirl acts over time and stops at expiry',()=>{
 const a=egg(4),b=egg(0,{x:2});activateSkill(a,[a,b]);assert.equal(b.vx,0);
 for(let i=0;i<90;i++)tickSkill(a,[a,b],.01);
 assert.ok(b.vx>5);assert.ok(b.vz>0);const speed=b.vx;tickSkill(a,[a,b],1);assert.ok(Math.abs(b.vx-speed)<1e-10);
});
test('elimination ranks descend and same-step falls share a rank',()=>{
 const actors=Array.from({length:6},(_,i)=>egg(i));
 recordFalls(actors,[actors[4]],1);assert.equal(actors[4].rank,6);
 recordFalls(actors,[actors[1],actors[3]],2);assert.equal(actors[1].rank,4);assert.equal(actors[3].rank,4);
 recordFalls(actors,[actors[1]],3);assert.equal(actors[1].eliminatedAt,2);
 recordFalls(actors,[actors[2],actors[5]],4);completeRanks(actors);
 assert.equal(actors[0].rank,1);assert.deepEqual(standings(actors).map(a=>a.rank),[1,2,2,4,4,6]);
});
test('timeout survivors and simultaneous final falls are both joint first place',()=>{
 const actors=[egg(0),egg(1),egg(2)];recordFalls(actors,[actors[2]],1);completeRanks(actors);
 assert.deepEqual(actors.map(a=>a.rank),[1,1,3]);
 const final=[egg(0),egg(1)];recordFalls(final,final,9);completeRanks(final);
 assert.deepEqual(final.map(a=>a.rank),[1,1]);
});
