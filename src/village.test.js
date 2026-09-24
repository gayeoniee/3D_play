import test from 'node:test';
import assert from 'node:assert/strict';
import { eggs,rollEgg } from './eggs.js';
import { freshVillage,readVillage,saveVillage,drawEgg,greetResident,awardMatch,dailyProgress,exportVillage,importVillage,equipOutfit,cleanName } from './village-state.js';
import { activateSkill,tickSkill } from './skills.js';
import { clampPlacement } from './village-editor.js';
test('every three cumulative wins grant one ticket; tickets pay before shards',()=>{
 const d=freshVillage(()=>0);d.daily.claimed=true;d.daily.completed=3;for(const rank of [1,6,1,2,1])awardMatch(d,rank);
 assert.equal(d.tickets,1);assert.equal(d.wins,3);d.shards=0;
 const result=drawEgg(d,sequence(.7,.5));assert.equal(result.payment,'ticket');assert.equal(d.shards,0);assert.equal(d.tickets,0);
 for(let i=0;i<3;i++)awardMatch(d,1);assert.equal(d.tickets,1);
 const before=d.shards;assert.equal(drawEgg(d,sequence(.7,.5)).duplicate,true);assert.equal(d.shards,before+40);
});
test('three completed matches grant a daily ticket once, regardless of wins, and reset next day',()=>{
 const d=freshVillage(()=>0);for(const r of [6,5,4])awardMatch(d,r,'2026-09-23');assert.equal(d.tickets,1);assert.equal(d.daily.claimed,true);
 awardMatch(d,3,'2026-09-23');assert.equal(d.tickets,1);assert.equal(d.daily.completed,3);
 assert.equal(dailyProgress(d,'2026-09-24').completed,0);assert.equal(d.daily.completed,3);
 for(const r of [1,1,1])awardMatch(d,r,'2026-09-24');assert.equal(d.tickets,3);assert.equal(d.wins,3);
 const before=JSON.stringify(d);awardMatch(d,0,'2026-09-25');assert.equal(JSON.stringify(d),before);
});
test('duplicate fragments unlock permanent cosmetics without spending or changing combat stats',()=>{
 const d=freshVillage(()=>0);assert.equal(equipOutfit(d,0,'ribbon'),false);
 drawEgg(d,sequence(0,0));assert.equal(d.fragments[0],1);assert.equal(equipOutfit(d,0,'ribbon'),true);assert.equal(d.fragments[0],1);
 assert.equal(equipOutfit(d,1,'none'),false);assert.equal(equipOutfit(d,0,'hat'),false);assert.equal(equipOutfit(d,0,'bogus'),false);
 d.fragments[0]=5;assert.equal(equipOutfit(d,0,'garden'),true);assert.equal(equipOutfit(d,0,'hat'),true);assert.equal(d.fragments[0],5);
});
test('backups round trip names, cosmetics, layouts, currency and daily rewards; malformed files reject',()=>{
 const d=freshVillage(()=>0);d.nicknames[0]='Little Egg';d.fragments[0]=5;d.outfits[0]='garden';d.layout={'egg-0':{x:2,z:1}};awardMatch(d,2);
 assert.deepEqual(importVillage(exportVillage(d)),d);
 for(const invalid of ['broken','{}',JSON.stringify({app:'another',version:1,data:d}),exportVillage({...d,shards:-1}),exportVillage({...d,owned:[99]}),'x'.repeat(250001)])assert.throws(()=>importVillage(invalid));
 assert.equal(cleanName('<hi>\n'), 'hi');assert.equal(Array.from(cleanName('a'.repeat(20))).length,12);
 const s=storage();saveVillage(s,{...d,outfits:Array(18).fill('hat'),fragments:[]});assert.equal(readVillage(s).outfits[0],'none');
});
test('legacy wins migrate once and valid placement survives browser storage',()=>{
 const s=storage(),d=freshVillage(()=>0);delete d.tickets;d.wins=7;d.matches=9;
 d.layout={'house-0':{x:2,z:3},'egg-0':{x:-1,z:2},'tree-1':{x:999,z:0},bad:{x:1,z:1}};
 saveVillage(s,d);const loaded=readVillage(s);assert.equal(loaded.tickets,2);assert.deepEqual(Object.keys(loaded.layout),['house-0','egg-0']);
 loaded.tickets=0;saveVillage(s,loaded);assert.equal(readVillage(s).tickets,0);
 const p=clampPlacement(100,100,1);assert.ok(Math.hypot(p.x/9.8,p.z/6.7)<=1.000001);
});
const storage=()=>{const data=new Map();return {getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};};
const sequence=(...values)=>()=>values.shift()??0;
test('starter, migration and persistence only allow owned valid favorites',()=>{
 const data=freshVillage(()=>.4);assert.equal(data.owned.length,1);assert.equal(data.shards,300);assert.ok(data.owned.includes(data.favorite));
 const s=storage();saveVillage(s,data);assert.deepEqual(readVillage(s),data);
 s.setItem('eggy-village-v1',JSON.stringify({favorite:17,owned:[2,2,-1,999],shards:-100,hearts:[-5],wins:10,matches:1}));
 const loaded=readVillage(s);assert.deepEqual(loaded.owned,[2]);assert.equal(loaded.favorite,2);assert.equal(loaded.shards,0);assert.equal(loaded.wins,1);
 s.setItem('eggy-village-v1','broken');assert.equal(readVillage(s).owned.length,1);
 assert.equal(saveVillage(null,data),false);
});
test('rarity boundaries and uniform within-tier index selection match displayed odds',()=>{
 assert.equal(rollEgg(sequence(.59999,0)),0);
 assert.equal(rollEgg(sequence(.6,0)),6);
 assert.equal(rollEgg(sequence(.91999,.999)),11);
 assert.equal(rollEgg(sequence(.92,0)),12);
 assert.equal(rollEgg(sequence(.999,.999)),17);
 assert.equal(new Set(eggs.map(e=>e.skillName)).size,18);
});
test('draws debit exactly 100, grant new eggs or a 40-shard duplicate refund',()=>{
 const data=freshVillage(()=>0);
 let result=drawEgg(data,sequence(.7,.5));assert.equal(result.id,9);assert.equal(result.duplicate,false);assert.equal(data.shards,200);
 result=drawEgg(data,sequence(.7,.5));assert.equal(result.duplicate,true);assert.equal(data.shards,140);assert.deepEqual(data.owned,[0,9]);
 data.shards=99;assert.equal(drawEgg(data),null);assert.equal(data.shards,99);assert.equal(data.draws,2);
});
test('greetings reward owned eggs once per day, and completed matches fund the next draw',()=>{
 const data=freshVillage(()=>0);assert.equal(greetResident(data,17,'2026-09-22'),false);
 assert.equal(greetResident(data,0,'2026-09-22'),true);assert.equal(data.shards,320);
 assert.equal(greetResident(data,0,'2026-09-22'),false);assert.equal(data.shards,320);
 assert.equal(greetResident(data,0,'2026-09-23'),true);assert.equal(data.hearts[0],2);
 assert.equal(awardMatch(data,1),150);assert.equal(awardMatch(data,6),20);assert.equal(awardMatch(data,7),0);assert.equal(data.matches,2);assert.equal(data.wins,1);
});
test('all 18 skills activate and expire without invalid velocity or status',()=>{
 for(const egg of eggs){
 const a={index:egg.id,x:0,z:0,vx:0,vz:0,dx:1,dz:0,alive:true,cooldown:0,power:egg.power/100};
 const b={index:(egg.id+1)%18,x:1,z:0,vx:0,vz:0,dx:1,dz:0,alive:true,cooldown:0};
 assert.equal(activateSkill(a,[a,b]),true);assert.equal(a.cooldown,3);
 for(let i=0;i<361;i++)tickSkill(a,[a,b],1/120);
 assert.equal(a.cooldown,0);assert.ok(Number.isFinite(a.vx));assert.ok(Number.isFinite(b.vz));
 }
});
test('rare traits have mechanical differences: second dash, slow, roots and repeated shot',()=>{
 const make=index=>({index,x:0,z:0,vx:0,vz:0,dx:1,dz:0,alive:true,cooldown:0});
 const mango=make(7);activateSkill(mango,[mango]);const first=mango.vx;tickSkill(mango,[mango],.3);assert.ok(mango.vx>first);
 const cocoa=make(6),target={...make(0),x:1};activateSkill(cocoa,[cocoa,target]);assert.equal(target.slow,.8);
 const matcha=make(8);activateSkill(matcha,[matcha]);assert.equal(matcha.shieldFactor,.18);assert.equal(matcha.shield,1.5);
 const grape=make(11),enemy={...make(0),x:1};activateSkill(grape,[grape,enemy]);const push=enemy.vx;tickSkill(grape,[grape,enemy],.31);assert.ok(enemy.vx>push);
});
