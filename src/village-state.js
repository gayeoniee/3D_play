import { eggs,rollEgg,DRAW_COST,DUPLICATE_REFUND } from './eggs.js';
import { restoreFlock } from './evolution.js';
import {readExploration} from './exploration-state.js';
import {rewardForRank} from './match-rewards.js';
const KEY='eggy-village-v1';
const validRecord=text=>{try{const d=JSON.parse(text);return d&&typeof d==='object'&&(d.flock===undefined||(Array.isArray(d.flock)&&d.flock.length>0&&d.flock.every(b=>Number.isInteger(b?.species)&&b.species>=0&&b.species<18&&Number.isInteger(b.stage)&&b.stage>=0&&b.stage<=2)))&&((Array.isArray(d.owned)&&d.owned.some(i=>Number.isInteger(i)&&i>=0&&i<18))||(Number.isInteger(d.favorite)&&d.favorite>=0&&d.favorite<18));}catch{return false;}};
export const freshVillage=(random=Math.random)=>{const starter=Math.floor(random()*6);return restoreFlock({favorite:starter,owned:[starter],shards:300,tickets:0,layout:{},nicknames:Array(18).fill(''),fragments:Array(18).fill(0),outfits:Array(18).fill('none'),daily:{day:localDay(),completed:0,claimed:false},exploration:readExploration(),draws:0,garden:'peach',hearts:Array(18).fill(0),greeted:Array(18).fill(''),matches:0,wins:0});};
export const cleanName=value=>typeof value==='string'?Array.from(value.replace(/[\u0000-\u001f\u007f<>]/g,'').trim()).slice(0,12).join(''):'';
export const outfitCost={none:0,ribbon:1,hat:3,garden:5};
export function equipOutfit(data,id,outfit){if(!data.owned.includes(id)||!Object.hasOwn(outfitCost,outfit)||(data.fragments[id]||0)<outfitCost[outfit])return false;data.outfits[id]=outfit;return true;}
export function readVillage(storage){
  const initial=freshVillage();
  try{
    const raw=storage.getItem(KEY),backup=validRecord(raw)?raw:storage.getItem(KEY+'-recovery');
    if(!validRecord(backup))return initial;const data=JSON.parse(backup);
    const count=v=>Number.isSafeInteger(v)&&v>=0&&v<=1e9?v:0;
    const valid=id=>Number.isInteger(id)&&id>=0&&id<eggs.length;
    const owned=Array.isArray(data.owned)?[...new Set(data.owned.filter(valid))]:[valid(data.favorite)?data.favorite:initial.favorite];
    if(!owned.length)owned.push(valid(data.favorite)?data.favorite:initial.favorite);
    const wins=Math.min(count(data.wins),count(data.matches));
    const layout={};for(const [key,p] of Object.entries(data.layout||{}).slice(0,2000))if(/^(house|tree|flower|pond|fountain|arena|bench|fence|egg|bird)-\d+$/.test(key)&&Number.isFinite(p?.x)&&Number.isFinite(p?.z)&&Math.abs(p.x)<=12&&Math.abs(p.z)<=9)layout[key]={x:p.x,z:p.z};
    const restored={favorite:owned.includes(data.favorite)?data.favorite:owned[0],owned,shards:data.shards===undefined?300:count(data.shards),draws:count(data.draws),tickets:data.tickets===undefined?Math.floor(wins/3):count(data.tickets),layout,
      garden:['peach','lemon','lilac'].includes(data.garden)?data.garden:'peach',
      nicknames:initial.nicknames.map((_,i)=>cleanName(data.nicknames?.[i])),
      fragments:initial.fragments.map((_,i)=>count(data.fragments?.[i])),
      outfits:initial.outfits.map((_,i)=>Object.hasOwn(outfitCost,data.outfits?.[i])&&count(data.fragments?.[i])>=outfitCost[data.outfits[i]]?data.outfits[i]:'none'),
      daily:{day:/^\d{4}-\d{2}-\d{2}$/.test(data.daily?.day)?data.daily.day:localDay(),completed:Math.min(3,count(data.daily?.completed)),claimed:data.daily?.claimed===true&&count(data.daily?.completed)>=3},
      hearts:initial.hearts.map((_,i)=>count(data.hearts?.[i])),
      greeted:initial.greeted.map((_,i)=>typeof data.greeted?.[i]==='string'?data.greeted[i].slice(0,10):''),
      exploration:readExploration(data.exploration),matches:count(data.matches),wins:Math.min(count(data.wins),count(data.matches))};
    restoreFlock(restored,data);if(!validRecord(raw))Object.defineProperty(restored,'recovered',{value:true});return restored;
  }catch{return initial;}
}
export function saveVillage(storage,data){try{const next=JSON.stringify(data),previous=storage.getItem(KEY);
  if(previous!==next)storage.setItem(KEY,next);
  if(validRecord(next)){try{storage.setItem(KEY+'-recovery',next);}catch{}}
  return true;}catch{return false;}}
export function localDay(date=new Date()){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
export function greetResident(data,index,day=localDay()){
  if(!data.owned.includes(index)||data.greeted[index]===day)return false;
  data.greeted[index]=day;data.hearts[index]+=1;data.shards+=20;return true;
}
export function drawEgg(data,random=Math.random){
 if(!data.tickets&&data.shards<DRAW_COST)return null;
 if(!data.flock)restoreFlock(data);
 const id=rollEgg(random),duplicate=data.owned.includes(id);
 const payment=data.tickets>0?'ticket':'shards';if(payment==='ticket')data.tickets--;else data.shards-=DRAW_COST;data.draws++;
 if(duplicate){data.shards+=DUPLICATE_REFUND;data.fragments[id]++;}else data.owned.push(id);
 const birdId=data.flock.length;data.flock.push({id:birdId,species:id,stage:0});
 return {id,birdId,duplicate,refund:duplicate?DUPLICATE_REFUND:0,payment};
}
export function dailyProgress(data,day=localDay()){return data.daily.day===day?data.daily:{day,completed:0,claimed:false};}
export function awardMatch(data,rank,day=localDay()){
 if(!Number.isInteger(rank)||rank<1||rank>6)return 0;
 const reward=rewardForRank(rank);data.matches++;if(rank===1){data.wins++;if(data.wins%3===0)data.tickets=(data.tickets||0)+1;}data.shards+=reward;
 data.daily={...dailyProgress(data,day)};data.daily.completed=Math.min(3,data.daily.completed+1);
 if(data.daily.completed===3&&!data.daily.claimed){data.daily.claimed=true;data.tickets++;}return reward;
}
export function exportVillage(data){return JSON.stringify({app:'eggy-village',version:1,exportedAt:new Date().toISOString(),data},null,2);}
export function importVillage(text){
 if(typeof text!=='string'||text.length>250000)throw Error('파일이 너무 커요. 동글동글 저장 파일을 선택해 주세요.');
 let file;try{file=JSON.parse(text);}catch{throw Error('읽을 수 없는 파일이에요. JSON 저장 파일을 선택해 주세요.');}
 if(file?.app!=='eggy-village'||file.version!==1||!file.data||!Array.isArray(file.data.owned)||!file.data.owned.length||file.data.owned.some(id=>!Number.isInteger(id)||id<0||id>=18))throw Error('지원하는 동글동글 저장 파일이 아니에요.');
 for(const key of ['shards','tickets','draws','matches','wins'])if(!Number.isSafeInteger(file.data[key])||file.data[key]<0||file.data[key]>1e9)throw Error('저장 기록이 올바르지 않아요. 현재 마을은 그대로 유지돼요.');
 if(file.data.wins>file.data.matches)throw Error('경기와 승리 기록이 맞지 않아요. 현재 마을은 그대로 유지돼요.');
 if(file.data.flock!==undefined&&(!Array.isArray(file.data.flock)||!file.data.flock.length||file.data.flock.some(b=>!Number.isInteger(b?.species)||b.species<0||b.species>=18||!Number.isInteger(b.stage)||b.stage<0||b.stage>2)))throw Error('친구들의 진화 기록이 올바르지 않아요.');
 return readVillage({getItem:()=>JSON.stringify(file.data)});
}
