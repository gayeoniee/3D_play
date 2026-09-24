import test from 'node:test';import assert from 'node:assert/strict';
import {freshVillage,exportVillage,importVillage} from './village-state.js';
import {collectStarFlower,readExploration} from './exploration-state.js';
test('five flowers award exactly 100 shards, survive backup and cannot be collected twice',()=>{
 const d=freshVillage(()=>0),before=d.shards,day='2026-09-24';
 for(let i=0;i<5;i++){assert.equal(collectStarFlower(d,i,day),i===4?60:10);assert.equal(collectStarFlower(d,i,day),0);}
 assert.equal(d.shards,before+100);const copy=importVillage(exportVillage(d));assert.deepEqual(copy.exploration,d.exploration);assert.equal(collectStarFlower(copy,4,day),0);
 assert.equal(collectStarFlower(copy,0,'2026-09-25'),10);assert.deepEqual(copy.exploration.collected,[0]);assert.equal(collectStarFlower(copy,-1),0);
});
test('old and malformed exploration records normalize without granting rewards',()=>{
 assert.deepEqual(readExploration({day:'bad',collected:[0,0,2,5,-1,'1']} ,'2026-09-24'),{day:'2026-09-24',collected:[0,2]});
 assert.deepEqual(readExploration(undefined,'2026-09-24'),{day:'2026-09-24',collected:[]});
});
