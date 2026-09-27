import {explorationDay} from './exploration-state.js';
export const nestThemes=[
 {name:'꽃잎 둥지',icon:'🌸',color:'#e8b1c5',rare:[7,9,10],epic:[14,16]},
 {name:'조개 둥지',icon:'🐚',color:'#aed8df',rare:[9,10,11],epic:[13,15]},
 {name:'숲속 둥지',icon:'🍃',color:'#a8c993',rare:[6,7,8],epic:[15,16]},
 {name:'별빛 둥지',icon:'✨',color:'#bfb0df',rare:[6,10,11],epic:[12,17]}
];
export const catches={fish:['햇살 송사리','도토리 붕어','눈꽃 빙어','별꼬리 물고기'],butterfly:['꽃잎 나비','숲빛 나비','눈꽃 나비','달빛 나비']};
// Every species keeps its home through all three growth stages.
export const speciesHomes=[0,2,0,0,1,0,1,0,1,0,2,1,0,2,0,2,0,1];
const count=n=>Number.isSafeInteger(n)&&n>=0?Math.min(n,1000000):0;
export function readNature(v={}){
 const list=k=>Array.isArray(v?.[k])?[...new Set(v[k].filter(n=>Number.isInteger(n)&&n>=0&&n<4))]:[];
 return {shell:count(v?.shell),petal:count(v?.petal),twig:count(v?.twig),fish:list('fish'),butterfly:list('butterfly'),built:v?.built===true,theme:Number.isInteger(v?.theme)&&v.theme>=0&&v.theme<4?v.theme:0,care:Math.min(3,count(v?.care)),pity:Math.min(4,count(v?.pity)),eggs:count(v?.eggs),day:typeof v?.day==='string'?v.day:'',fishToday:Math.min(10,count(v?.fishToday)),butterflyToday:Math.min(10,count(v?.butterflyToday)),careToday:Math.min(3,count(v?.careToday))};
}
export function natureToday(data,day=explorationDay()){
 data.nature=readNature(data.nature);if(data.nature.day!==day)Object.assign(data.nature,{day,fishToday:0,butterflyToday:0,careToday:0});return data.nature;
}
export function rewardCatch(data,kind,map,random=Math.random,day){
 if(!Object.hasOwn(catches,kind)||!Number.isInteger(map)||map<0||map>2)return null;
 const n=natureToday(data,day);if(n[kind+'Today']>=10)return null;
 const id=random()<.15?3:map,fresh=!n[kind].includes(id);if(fresh)n[kind].push(id);
 n[kind+'Today']++;n[kind==='fish'?'shell':'petal']++;n.twig++;const shards=fresh?20:5;data.shards+=shards;
 return {id,name:catches[kind][id],fresh,shards};
}
export function buildNest(data,theme){const n=natureToday(data);if(!nestThemes[theme])return false;if(n.built){n.theme=theme;return true;}if(n.shell<2||n.petal<2||n.twig<2)return false;n.shell-=2;n.petal-=2;n.twig-=2;n.built=true;n.theme=theme;return true;}
export function careNest(data,day){const n=natureToday(data,day);if(!n.built||n.care>=3||n.careToday>=3||n.shell<1||n.petal<1)return false;n.shell--;n.petal--;n.care++;n.careToday++;return true;}
export function claimNestEgg(data,random=Math.random){
 const n=natureToday(data);if(!n.built||n.care<3)return null;
 const epic=n.pity>=4||random()<.2,pool=nestThemes[n.theme][epic?'epic':'rare'],species=pool[Math.min(pool.length-1,Math.floor(random()*pool.length))];
 n.care=0;n.pity=epic?0:n.pity+1;n.eggs++;const bird={id:data.flock.length,species,stage:0};data.flock.push(bird);if(!data.owned.includes(species))data.owned.push(species);return bird;
}
