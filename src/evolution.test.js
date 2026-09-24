import test from 'node:test';import assert from 'node:assert/strict';
import {freshVillage,drawEgg,saveVillage,readVillage,exportVillage,importVillage} from './village-state.js';
import {evolveBird,restoreFlock,birdKinds} from './evolution.js';
test('irreversible evolution charges once per stage; a new draw is a separate egg',()=>{
 const d=freshVillage(()=>0);d.shards=1500;
 assert.equal(evolveBird(d,0),true);assert.equal(d.flock[0].stage,1);assert.equal(d.shards,1200);
 assert.equal(evolveBird(d,0),true);assert.equal(d.flock[0].stage,2);assert.equal(d.shards,500);
 assert.equal(evolveBird(d,0),false);assert.equal(d.shards,500);
 const result=drawEgg(d,()=>0);assert.equal(result.birdId,1);assert.equal(d.flock[0].stage,2);assert.equal(d.flock[1].stage,0);
 d.shards=299;assert.equal(evolveBird(d,1),false);assert.equal(d.flock[1].stage,0);
});
test('legacy placements migrate, evolution persists and backups keep every individual',()=>{
 const d=freshVillage(()=>0);delete d.flock;delete d.favoriteBird;d.owned=[0,1];d.layout={'egg-1':{x:2,z:3}};restoreFlock(d);
 assert.deepEqual(d.layout['bird-1'],{x:2,z:3});d.shards=1000;evolveBird(d,1);drawEgg(d,()=>0);
 const memory=new Map(),storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v)};saveVillage(storage,d);
 const restored=readVillage(storage);assert.deepEqual(restored.flock,d.flock);assert.equal(restored.favoriteBird,1);
 assert.deepEqual(importVillage(exportVillage(d)).flock,d.flock);
 const invalid=JSON.parse(exportVillage(d));invalid.data.flock[0].stage=-1;assert.throws(()=>importVillage(JSON.stringify(invalid)));
 assert.equal(new Set(birdKinds.map(k=>k[2])).size,18);
});
