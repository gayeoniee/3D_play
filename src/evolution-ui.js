import {birdKinds,evolutionCost,evolveBird,formName} from './evolution.js';
export function createEvolutionUI({data,friends,selectBird,refresh,persist}){
 const section=document.createElement('section');section.className='evolution-card';
 section.innerHTML='<h3>함께 사는 친구들</h3><p>같은 종류라도 한 마리씩 따로 자라요. 함께할 친구를 골라주세요.</p><div class="flock-list"></div><strong class="evolution-path"></strong><p class="evolution-copy"></p><button class="evolve-button primary"></button><p class="evolution-message" role="status"></p>';
 document.querySelector('.resident-card').prepend(section);
 const list=section.querySelector('.flock-list'),button=section.querySelector('.evolve-button'),message=section.querySelector('.evolution-message');
 const dialog=document.createElement('dialog');dialog.className='evolution-dialog';dialog.setAttribute('aria-labelledby','evolution-title');
 dialog.innerHTML='<h2 id="evolution-title">새로운 모습으로 자랄까요?</h2><p class="evolution-confirm-copy"></p><p>진화하면 이전 모습으로 돌아갈 수 없어요. 달걀 모습의 친구는 뽑기로 다시 만날 수 있어요.</p><div class="backup-actions"><button class="evolution-cancel">아직 기다릴래요</button><button class="evolution-confirm">진화하기</button></div>';document.body.append(dialog);
 let pending=null;
 button.addEventListener('click',()=>{const b=data.flock[data.favoriteBird];if(!b||b.stage>=2)return;pending={id:b.id,stage:b.stage};dialog.querySelector('.evolution-confirm-copy').textContent=friends[b.species].name+' · '+formName(b)+' → '+birdKinds[b.species][b.stage]+' / 별조각 '+evolutionCost[b.stage]+'개';dialog.showModal();});
 dialog.querySelector('.evolution-cancel').addEventListener('click',()=>dialog.close());
 dialog.querySelector('.evolution-confirm').addEventListener('click',()=>{const b=data.flock[pending?.id];if(b&&b.stage===pending.stage&&evolveBird(data,b.id)){persist();refresh();message.textContent=friends[b.species].name+'가 '+formName(b)+'로 자랐어요! 마을에서 날갯짓을 만나보세요.';}dialog.close();});
 let signature='';
 return {refresh(){
  const b=data.flock[data.favoriteBird];
  const next=JSON.stringify([data.favoriteBird,data.flock]);
  if(signature!==next){signature=next;list.replaceChildren();data.flock.forEach(bird=>{const item=document.createElement('button');item.textContent=friends[bird.species].name+' · '+formName(bird)+' #'+(bird.id+1);item.setAttribute('aria-pressed',String(bird.id===b.id));item.addEventListener('click',()=>{message.textContent='';selectBird(bird.id);});list.append(item);});}
  section.querySelector('.evolution-path').textContent='달걀 → '+birdKinds[b.species][0]+' → '+birdKinds[b.species][1];
  section.querySelector('.evolution-copy').textContent='현재: '+formName(b)+' · 진화는 되돌릴 수 없어요. 경기 능력치는 그대로 유지돼요.';
  button.disabled=b.stage===2||data.shards<evolutionCost[b.stage];button.textContent=b.stage===2?'멋진 어른 새로 자랐어요':birdKinds[b.species][b.stage]+'로 진화 · ✦ '+evolutionCost[b.stage];
 }};
}
