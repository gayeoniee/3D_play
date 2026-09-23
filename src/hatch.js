import { rarityColors } from './eggs.js';
export function createHatchDialog({friends,reduced,onMeet}){
 const $=id=>document.getElementById(id);let timer=null,last=null;
 const finish=()=>{clearTimeout(timer);timer=null;$('draw-dialog').classList.remove('is-hatching');$('draw-dialog').classList.add('is-revealed');$('draw-stage-copy').textContent=last?.duplicate?'다시 만나도 반가워!':'톡! 새로운 친구가 왔어요!';$('draw-meet').disabled=false;};
 const clean=()=>{clearTimeout(timer);timer=null;};
 $('close-draw').addEventListener('click',()=>$('draw-dialog').close());
 $('draw-dialog').addEventListener('close',()=>{if(!$('draw-dialog').open)clean();});
 $('draw-skip').addEventListener('click',finish);
 $('draw-meet').addEventListener('click',()=>{if(!last)return;$('draw-dialog').close();onMeet(last.id);});
 return {show(result){
   clean();last=result;const egg=friends[result.id],dialog=$('draw-dialog');
   dialog.classList.remove('is-revealed');dialog.classList.toggle('is-hatching',!reduced);dialog.style.setProperty('--hatch-color',rarityColors[egg.rarity]);
   $('draw-portrait').style.setProperty('--egg',egg.color);$('draw-name').textContent=egg.name;
   $('draw-rarity').textContent=egg.rarity+(result.duplicate?' · 다시 만난 친구':' · NEW');$('draw-rarity').style.color=rarityColors[egg.rarity];
   $('draw-copy').textContent=result.duplicate?'다시 만나 반가워! 별조각 40개와 이 친구의 꾸미기 조각 1개를 받았어요. 작은 옷장에서 장식을 만나보세요!':'작은 발로 총총, '+egg.name+'가 이사 왔어요.';
   $('draw-personality').textContent='“'+egg.desc+'”';$('draw-skill-title').textContent=egg.icon+' '+egg.skillName;$('draw-skill-description').textContent=egg.description;
   $('draw-traits').innerHTML=[['통! 밀치는 힘',egg.power],['총총! 발걸음',egg.speed],['꾹! 버티는 힘',egg.weight]].map(([name,value])=>'<span>'+name+'<b>'+value+'</b></span>').join('');
   $('draw-stage-copy').textContent='안에서 누가 꼬물꼬물…';$('draw-meet').disabled=!reduced;dialog.showModal();
   if(reduced)finish();else timer=setTimeout(finish,1450);
 }};
}
