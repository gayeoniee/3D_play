import test from 'node:test';import assert from 'node:assert/strict';
import {freshVillage,exportVillage,importVillage} from './village-state.js';
import {readNature,rewardCatch,buildNest,careNest,claimNestEgg,natureToday,speciesHomes} from './nature-state.js';
test('catch rewards persist, discoveries pay once, and daily limits are shared between villages',()=>{
 const d=freshVillage(()=>0),before=d.shards;for(let i=0;i<10;i++)assert.ok(rewardCatch(d,'fish',i%3,()=>.5));assert.equal(rewardCatch(d,'fish',2),null);assert.equal(d.nature.shell,10);assert.equal(d.shards-before,3*20+7*5);
 assert.deepEqual(importVillage(exportVillage(d)).nature,d.nature);natureToday(d,'2099-01-01');assert.equal(d.nature.fishToday,0);assert.equal(d.nature.shell,10);
 assert.equal(rewardCatch(d,'invalid',0),null);assert.equal(rewardCatch(d,'fish',9),null);
});
test('nest consumes materials, requires care, grants one separate egg and guarantees fifth epic',()=>{
 const d=freshVillage(()=>0);d.nature={...readNature(),shell:50,petal:50,twig:50};assert.ok(buildNest(d,1));assert.equal(d.nature.shell,48);assert.equal(claimNestEgg(d),null);
 for(let round=0;round<5;round++){d.nature.careToday=0;for(let i=0;i<3;i++)assert.ok(careNest(d));assert.equal(careNest(d),false);const b=claimNestEgg(d,()=>.9);assert.equal(b.stage,0);assert.ok(round<4?b.species<12:b.species>=12);assert.equal(claimNestEgg(d),null);}
 assert.equal(d.flock.length,6);assert.equal(d.nature.pity,0);assert.deepEqual(importVillage(exportVillage(d)).flock,d.flock);
});
test('malformed and legacy nature records normalize safely, all species have homes',()=>{
 assert.deepEqual(readNature(null),readNature());assert.equal(readNature({care:999,pity:99,shell:-1,theme:12,fish:[0,0,8]}).care,3);assert.deepEqual(readNature({fish:[0,0,8]}).fish,[0]);assert.equal(speciesHomes.length,18);assert.ok(speciesHomes.every(i=>i>=0&&i<=2));
});
