import test from 'node:test';import assert from 'node:assert/strict';
import {createExplorationWorld,worldClear,walkAndPush,worldBounds} from './exploration-world.js';
test('three large destinations keep boulevards and all flower destinations walkable',()=>{
 assert.ok(worldBounds.x*worldBounds.z/(10*6.85)>13);
 for(let i=0;i<3;i++){const world=createExplorationWorld(i);for(let z=-23;z<=23;z+=.2)assert.ok(world.clear({x:0,z}));for(let x=-28;x<=28;x+=.2)assert.ok(world.clear({x,z:0}));for(const z of [-15,15])for(let x=-23;x<=23;x+=.2)assert.ok(world.clear({x,z}));for(const x of [-23,23])for(let z=-15;z<=15;z+=.2)assert.ok(world.clear({x,z}));for(const [x,z]of world.spots)assert.ok(world.clear({x,z}));assert.equal(world.clear({x:40,z:0}),false);world.dispose();}
});
test('walking pushes friends forward without pushing through solid objects or the boundary',()=>{
 const clear=p=>worldClear(p,[]),player={x:0,z:0},friend={x:.7,z:0};walkAndPush(player,[friend],2,0,clear);assert.ok(player.x>1.8);assert.ok(friend.x>2.5);
 player.x=0;friend.x=.7;const obstacle=[{x:3,z:0,r:1}];for(let i=0;i<100;i++)walkAndPush(player,[friend],.1,0,p=>worldClear(p,obstacle));assert.ok(worldClear(player,obstacle));assert.ok(worldClear(friend,obstacle));
 const edge={x:33,z:0};walkAndPush(edge,[],10,0,clear);assert.ok(clear(edge));
});
