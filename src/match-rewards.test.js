import test from 'node:test';import assert from 'node:assert/strict';
import {matchRewards,rewardForRank} from './match-rewards.js';import {freshVillage,awardMatch} from './village-state.js';
test('each rank earns its advertised reward and ties earn the same amount',()=>{
 assert.deepEqual(matchRewards,[150,110,80,50,30,20]);
 for(let rank=1;rank<=6;rank++){const a=freshVillage(()=>0),b=freshVillage(()=>0);const before=a.shards;assert.equal(awardMatch(a,rank),rewardForRank(rank));awardMatch(b,rank);assert.equal(a.shards,b.shards);assert.equal(a.shards-before,matchRewards[rank-1]);if(rank>1)assert.ok(matchRewards[rank-2]>matchRewards[rank-1]);}
 for(const rank of [0,7,NaN,1.5])assert.equal(rewardForRank(rank),0);
});
