import test from 'node:test';import assert from 'node:assert/strict';import {newNatureGame,stepNatureGame,actNatureGame} from './nature-game.js';
test('fishing requires a bite and alternating tension control; holding forever loses',()=>{
 const g=newNatureGame('fish',()=>0);assert.equal(actNatureGame(g),false);while(g.phase==='wait')stepNatureGame(g,.05);assert.ok(actNatureGame(g));let hold=true;for(let i=0;i<500&&g.result===null;i++){if(g.tension>.7)hold=false;if(g.tension<.35)hold=true;stepNatureGame(g,.05,{hold});}assert.equal(g.result,true);const progress=g.progress;stepNatureGame(g,.05,{hold:true});assert.equal(g.progress,progress);
 const fail=newNatureGame('fish',()=>0);while(fail.phase==='wait')stepNatureGame(fail,.05);actNatureGame(fail);for(let i=0;i<200;i++)stepNatureGame(fail,.05,{hold:true});assert.equal(fail.result,false);
 const missed=newNatureGame('fish',()=>0);for(let i=0;i<80;i++)stepNatureGame(missed,.05);assert.equal(missed.result,false);
});
test('butterfly requires aim, enforces cooldown, and ends after three hits or misses',()=>{
 const g=newNatureGame('butterfly');for(let i=0;i<3;i++){stepNatureGame(g,.05);g.x=g.tx;g.y=g.ty;actNatureGame(g);assert.equal(actNatureGame(g),false);for(let j=0;j<14;j++)stepNatureGame(g,.05);}assert.equal(g.result,true);assert.equal(g.hits,3);
 const fail=newNatureGame('butterfly');for(let i=0;i<3;i++){fail.x=0;fail.y=0;actNatureGame(fail);for(let j=0;j<14;j++)stepNatureGame(fail,.05);}assert.equal(fail.result,false);
});
