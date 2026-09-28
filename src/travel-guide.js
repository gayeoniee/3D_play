import {destinations} from './exploration-world.js';
import {speciesHomes} from './nature-state.js';
import './travel-guide.css';
const details=[['🌼','햇살과 꽃잎이 가득한 산책길','닭 · 홍학 · 앵무 계열','햇살 송사리 · 꽃잎 나비'],['🌳','버섯과 나무 사이의 포근한 쉼터','부엉이 · 키위 · 공작 계열','도토리 붕어 · 숲빛 나비'],['☃️','눈꽃이 내려앉은 시원한 호숫가','펭귄 · 백조 · 설원올빼미 계열','눈꽃 빙어 · 눈꽃 나비']];
export function createTravelGuide({data,onChoose}){
 const dialog=document.createElement('dialog');dialog.id='travel-guide';dialog.setAttribute('aria-labelledby','travel-title');document.body.append(dialog);
 function open(current=null){
  dialog.innerHTML='<div class="travel-heading"><div><small>동글동글 탐험 지도</small><h2 id="travel-title">어느 마을로 놀러 갈까요?</h2></div><button class="travel-close" aria-label="닫기">×</button></div><p class="travel-intro">어떤 친구로든 방문할 수 있어요. 마을마다 만나는 친구와 수집하는 생물이 달라요.</p><div class="travel-cards">'+destinations.map((d,i)=>{const [icon,desc,friends,finds]=details[i],count=data.flock.filter(b=>speciesHomes[b.species]===i).length;return `<article style="--travel-color:${d.ground}"><div class="travel-art" aria-hidden="true">${icon}<span>${i===0?'🦋 🌷':i===1?'🍄 🍃':'🐧 ❄️'}</span></div><div class="travel-copy"><small>${current===i?'● 지금 있는 마을':count?'내 친구 '+count+'마리가 사는 곳':'새로운 풍경 만나기'}</small><h3>${d.name}</h3><p>${desc}</p><p class="travel-friends">🏡 ${friends}<br>🔎 ${finds}</p><button data-travel="${i}">${current===i?'여기서 계속 놀기':'이 마을로 출발'} <span>→</span></button></div></article>`;}).join('')+'</div><div class="travel-how"><strong>이렇게 즐겨요</strong><p>① 🎣 낚시·🦋 나비 잡기로 재료 모으기　② 🪺 내 마을의 <b>둥지·도감</b>에서 둥지 만들기　③ 세 번 돌보고 새로운 알 만나기</p><small>모든 마을에서 낚시·나비·별꽃을 즐겨요. 하루 보상 횟수는 마을을 바꿔도 공유돼요.</small></div>';
  dialog.querySelector('.travel-close').onclick=()=>dialog.close();dialog.querySelectorAll('[data-travel]').forEach(b=>b.onclick=()=>{dialog.close();onChoose(Number(b.dataset.travel));});if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
 }
 return {open};
}
