import test from 'node:test';
import assert from 'node:assert/strict';
import { createNavigation,villageObstacles } from './village-navigation.js';
import { freshVillage,saveVillage,readVillage,importVillage,exportVillage } from './village-state.js';
const store=()=>{const m=new Map();return {getItem:k=>m.get(k)??null,setItem:(k,v)=>m.set(k,v)};};
test('walks route around houses and every segment stays clear',()=>{
 const nav=createNavigation([{x:0,z:0,r:1.7}]),route=nav.path({x:-3,z:0},{x:3,z:0});
 assert.ok(route.length>2);assert.deepEqual({x:route.at(-1).x,z:route.at(-1).z},{x:3,z:0});
 for(let i=1;i<route.length;i++)assert.ok(nav.segment(route[i-1],route[i]));
});
test('ponds and fences block paths; unreachable destinations stop on the reachable side',()=>{
 const nav=createNavigation([{x:0,z:0,hx:.4,hz:8}]),route=nav.path({x:-3,z:0},{x:3,z:0});
 assert.ok(route.length);assert.ok(route.every(p=>p.x<0));for(let i=1;i<route.length;i++)assert.ok(nav.segment(route[i-1],route[i]));
});
test('residents moved inside props get a safe start; routes stay on the island',()=>{
 const nav=createNavigation([{x:0,z:0,r:2}]);const route=nav.path({x:0,z:0},{x:30,z:30});assert.ok(route.length);assert.ok(route.every(nav.clear));
 const objects=['house','tree','pond','flower','fountain','arena','bench','fence','egg'].map(type=>({userData:{layoutId:type+'-0'},position:{x:0,z:0}}));assert.equal(villageObstacles(objects).length,8);
 const free=createNavigation([]);assert.ok(free.segment({x:-1,z:0},{x:1,z:0}));
});
test('bad primary storage recovers the last good village without losing collection',()=>{
 const s=store(),d=freshVillage(()=>0);d.owned=[0,5,17];d.nicknames[17]='Star';saveVillage(s,d);d.shards=900;saveVillage(s,d);
 s.setItem('eggy-village-v1','truncated{');const restored=readVillage(s);assert.deepEqual(restored.owned,[0,5,17]);assert.equal(restored.nicknames[17],'Star');assert.equal(restored.shards,900);assert.equal(restored.recovered,true);
 saveVillage(s,restored);assert.equal(readVillage(s).shards,900);
});
test('optional recovery copy never prevents a successful main save when storage is tight',()=>{
 const s=store(),d=freshVillage(()=>0);const limited={getItem:s.getItem,setItem:(key,value)=>{if(key.endsWith('-recovery'))throw Error('quota');s.setItem(key,value);}};
 assert.equal(saveVillage(limited,d),true);d.shards=450;assert.equal(saveVillage(limited,d),true);assert.equal(readVillage(s).shards,450);
});
test('storage quota failure reports failure and leaves the last successful record readable',()=>{
 const s=store(),d=freshVillage(()=>0);saveVillage(s,d);const failing={getItem:s.getItem,setItem:()=>{throw Error('quota');}};d.shards=100;
 assert.equal(saveVillage(failing,d),false);assert.equal(readVillage(s).shards,300);
});
test('impossible imports reject and inconsistent daily claim is sanitized',()=>{
 const d=freshVillage(()=>0);assert.throws(()=>importVillage(exportVillage({...d,wins:10,matches:2})));
 const s=store();d.daily.completed=0;d.daily.claimed=true;saveVillage(s,d);assert.equal(readVillage(s).daily.claimed,false);
});
