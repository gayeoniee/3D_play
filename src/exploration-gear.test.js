import test from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';import {createExplorationGear} from './exploration-gear.js';
test('held tools animate casting, swinging, catching and releasing without invalid transforms',()=>{
 for(const reduced of [false,true]){const scene=new THREE.Scene(),actor=new THREE.Group();actor.userData.body=new THREE.Group();actor.add(actor.userData.body);scene.add(actor);const gear=createExplorationGear(scene,reduced);
 for(const kind of ['fish','butterfly']){gear.equip(actor,kind);assert.equal(gear.snapshot().kind,kind);gear.event('start',kind,{x:2,z:-3});for(let i=0;i<30;i++)gear.update(.05);assert.equal(gear.snapshot().state,kind==='fish'?'wait':'ready');gear.event('tap',kind);gear.update(.1);gear.event('success',kind);gear.update(.8);assert.ok(gear.active);gear.event('end',kind);assert.equal(gear.snapshot().state,'release');gear.update(1);assert.equal(gear.active,false);scene.traverse(o=>assert.ok([...o.position.toArray(),...o.scale.toArray()].every(Number.isFinite)));}
 gear.hide();assert.equal(gear.snapshot().visible,false);assert.equal(gear.active,false);}
});
