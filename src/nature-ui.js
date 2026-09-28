import * as THREE from 'three';
import {eggs} from './eggs.js';
import {nestThemes,catches,natureToday,rewardCatch,buildNest,careNest,claimNestEgg,speciesHomes} from './nature-state.js';
import './nature.css';
import './nature-action.css';
export function createNature({data,root,persist,refresh,onBird,reduced}){
 const dialog=document.createElement('dialog');dialog.id='nature-dialog';dialog.setAttribute('aria-labelledby','nature-title');document.body.append(dialog);
 let motion=()=>{};
 let mode='',raf=0,start=0,hits=0,finished=true,currentMap=0;
 const nest=new THREE.Group();nest.position.set(-.8,.16,4.7);root.add(nest);
 const material=new THREE.MeshStandardMaterial({color:'#c5a077'}),decorMaterial=new THREE.MeshStandardMaterial({color:'#e8b1c5'}),ringGeo=new THREE.TorusGeometry(.7,.13,8,32),gemGeo=new THREE.SphereGeometry(.13,12,8);
 for(let i=0;i<3;i++){const m=new THREE.Mesh(ringGeo,material);m.rotation.x=Math.PI/2;m.position.y=i*.11;m.scale.setScalar(1-i*.08);nest.add(m);}
 for(let i=0;i<8;i++){const m=new THREE.Mesh(gemGeo,decorMaterial);m.position.set(Math.cos(i*Math.PI/4)*.72,.28,Math.sin(i*Math.PI/4)*.72);nest.add(m);}
 const egg=new THREE.Mesh(new THREE.SphereGeometry(.32,16,12),new THREE.MeshStandardMaterial({color:'#fff0cb'}));egg.scale.y=1.35;egg.position.y=.45;nest.add(egg);
 function sync(){const n=natureToday(data);nest.visible=n.built;egg.visible=n.care>=3;decorMaterial.color.set(nestThemes[n.theme].color);}
 function frame(title,body){cancelAnimationFrame(raf);dialog.innerHTML='<div class="nature-heading"><h2 id="nature-title">'+title+'</h2><button id="nature-close" aria-label="닫기">×</button></div>'+body;dialog.querySelector('#nature-close').onclick=()=>dialog.close();if(dialog.querySelector('.nature-result')){const back=document.createElement('button');back.id='nature-release';back.textContent='놓아주고 산책하기';back.onclick=()=>dialog.close();dialog.append(back);}if(!dialog.open)dialog.showModal();dialog.scrollTop=0;}
 function save(){sync();persist();refresh();}
 function book(message=''){
  mode='nest';finished=true;dialog.classList.remove('nature-action-dialog');document.body.classList.remove('nature-in-action');const n=natureToday(data),t=nestThemes[n.theme];sync();
  frame('🪺 나의 자연 수첩',`<p class="nature-intro">연못에서 낚시하고, 꽃밭에서 나비를 만나 재료를 모아요.</p><p class="nature-bag">🐚 조개 ${n.shell} · 🌸 꽃잎 ${n.petal} · 🌿 가지 ${n.twig}</p><div class="nest-preview" style="--nest-color:${t.color}"><span>${n.care>=3?'🥚':t.icon}</span><strong>${n.built?t.name:'작은 둥지를 만들어 볼까요?'}</strong><small>${n.built?'장식을 바꾸면 찾아오는 알의 종류가 달라져요.':'조개 2 + 꽃잎 2 + 가지 2로 만들어요.'}</small></div><div class="nest-themes">${nestThemes.map((t,i)=>`<button data-theme="${i}" aria-pressed="${n.theme===i}">${t.icon} ${t.name}</button>`).join('')}</div><p class="nature-status" role="status">${message||'물고기와 나비는 잡은 뒤 자연으로 돌려보내요.'}</p><div class="nature-buttons"><button id="nest-build" ${n.built?'hidden':''}>선택한 둥지 만들기</button><button id="nest-care" ${!n.built||n.care>=3||n.careToday>=3||n.shell<1||n.petal<1?'disabled':''}>돌보기 ${n.care}/3 · 🐚1 🌸1</button><button id="nest-claim" ${n.care<3?'hidden':''}>✨ 신비한 알 만나기</button></div><p class="nature-rules">돌보기는 하루 3회 · 3회 돌보면 알 1개 확정<br>희귀 80% · 에픽 20% · 에픽 없이 4번 받으면 다음은 에픽 확정 (현재 ${n.pity}/4)<br>알로 합류하며, 진화는 컬렉션에서 직접 선택해요. 장식 변경은 완성 후 무료예요.</p><p class="nature-pool">이 둥지의 친구들: ${[...t.rare,...t.epic].map(i=>eggs[i].name).join(' · ')}<br>각 등급 안에서는 같은 확률이에요.</p><section class="nature-codex"><h3>탐험 도감</h3>${Object.entries(catches).map(([kind,names])=>`<p>${kind==='fish'?'🎣 물고기':'🦋 나비'} ${n[kind].length}/4</p><div>${names.map((name,i)=>`<span class="${n[kind].includes(i)?'found':''}">${n[kind].includes(i)?name:'미발견'}</span>`).join('')}</div>`).join('')}<small>마을마다 다른 생물 · 특별한 생물 확률 15%<br>종류별 하루 10회 보상 · 첫 발견 ✦20 / 다시 발견 ✦5<br>낚시: 조개·가지 +1 / 나비: 꽃잎·가지 +1</small></section>`);
  const homes=['햇살 들꽃','도토리 숲','눈꽃 호수'];dialog.querySelector('.nature-pool').textContent='이 둥지의 친구들: '+[...t.rare,...t.epic].map(i=>eggs[i].name+' ('+homes[speciesHomes[i]]+')').join(' · ')+' · 각 등급 안에서는 같은 확률이에요. 내 마을에서는 모두 함께 지내고, 탐험에서는 각자 좋아하는 마을에서 만나요.';
  dialog.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{const theme=Number(b.dataset.theme);if(n.built)buildNest(data,theme);else data.nature.theme=theme;save();book();});
  dialog.querySelector('#nest-build').onclick=()=>{const ok=buildNest(data,data.nature.theme);save();book(ok?'둥지 완성! 재료를 모아 포근하게 돌봐 주세요.':'조개·꽃잎·가지가 각각 2개 필요해요.');};
  dialog.querySelector('#nest-care').onclick=()=>{const ok=careNest(data);save();book(ok?(data.nature.care===3?'새가 신비한 알을 남겨 두었어요!':'둥지를 따뜻하게 돌봤어요. 오늘 '+data.nature.careToday+'/3회'):'오늘은 쉬어가요. 재료와 돌보기 횟수를 확인해 주세요.');};
  dialog.querySelector('#nest-claim').onclick=()=>{const bird=claimNestEgg(data);if(!bird)return;onBird(bird);save();const e=eggs[bird.species];frame('✨ 새로운 친구가 왔어요!',`<div class="nest-reveal" style="--egg-color:${e.color}"><div class="nature-egg">•ᴗ•</div><h3>${e.name} · ${e.rarity}</h3><p>${e.desc}</p><p>${e.icon} ${e.skillName}<br>${e.description}</p><small>알 모습으로 컬렉션에 합류했어요!</small></div><button id="nature-done">둥지로 돌아가기</button>`);dialog.querySelector('#nature-done').onclick=()=>book();};
 }
 function finish(win){if(finished)return;finished=true;motion(win?'success':'miss',mode);cancelAnimationFrame(raf);const reward=win?rewardCatch(data,mode,currentMap):null;if(reward)save();frame(win?'🌟 찾았다!':'다음엔 잡을 수 있어요!',`<div class="nature-result"><span>${mode==='fish'?'🐟':'🦋'}</span><h3>${reward?reward.name:win?'오늘의 보상을 모두 받았어요.':'아쉽지만 괜찮아요!'}</h3><p>${reward?(reward.fresh?'도감에 처음 등록! ':'')+'별조각 +'+reward.shards+'<br>'+(mode==='fish'?'조개':'꽃잎')+' +1 · 가지 +1':'재료는 차감되지 않아요.'}</p><p>다시 탐험하며 또 도전해 보세요.</p></div>`);}
 function play(kind,map){
  const n=natureToday(data);if(n[kind+'Today']>=10){frame('오늘도 잘 놀았어요!', '<p>이 놀이의 오늘 보상 10회를 모두 받았어요. 내일 다시 만나요!</p>');return;}
  mode=kind;currentMap=map;hits=0;finished=false;start=performance.now();dialog.classList.add('nature-action-dialog');document.body.classList.add('nature-in-action');motion('start',kind);
  frame(kind==='fish'?'🎣 반짝 연못 낚시':'🦋 나비 따라잡기',kind==='fish'?'<p>찌가 초록 구간에 들어오면 <b>낚아채기</b>를 눌러요!</p><div class="fish-water">🐟<span>〰</span></div><div class="fish-meter"><span></span><i></i></div><button id="nature-catch">낚아채기!</button><p id="nature-timer" role="status"></p>':'<p>나비를 세 번 톡톡 눌러요! 잡은 뒤에는 놓아줘요.</p><div class="butterfly-field"><button id="nature-catch" aria-label="나비 잡기">🦋</button><span>🌼　🌷　🌼</span></div><p id="nature-timer" role="status"></p>');
  const button=dialog.querySelector('#nature-catch'),timer=dialog.querySelector('#nature-timer');
  const phase=()=>{const t=(performance.now()-start)/2800;return 1-Math.abs(t%2-1);};
  button.onclick=()=>{if(document.hidden||finished)return;motion('tap',kind);if(kind==='fish'){const v=parseFloat(dialog.querySelector('.fish-meter i').style.left)/100;finish(v>=.36&&v<=.68);}else{hits++;if(hits===3)finish(true);}};
  function tick(){if(!dialog.open||finished)return;const elapsed=(performance.now()-start)/1000;if(elapsed>=12){finish(false);return;}timer.textContent=(kind==='butterfly'?hits+'/3 · ':'')+Math.ceil(12-elapsed)+'초 남음';if(kind==='fish')dialog.querySelector('.fish-meter i').style.left=phase()*100+'%';else{button.style.left=(42+Math.sin(elapsed*(reduced?.5:1.1))*30)+'%';button.style.top=(30+Math.cos(elapsed*.8)*20)+'%';}raf=requestAnimationFrame(tick);}tick();
 }
 dialog.addEventListener('close',()=>{motion('end',mode);document.body.classList.remove('nature-in-action');dialog.classList.remove('nature-action-dialog');finished=true;cancelAnimationFrame(raf);});document.addEventListener('visibilitychange',()=>{if(document.hidden&&dialog.open&& !finished)dialog.close();});
 sync();return {book,play,sync,setMotion:fn=>{motion=fn;},close:()=>dialog.close()};
}
