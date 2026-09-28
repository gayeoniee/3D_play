export function newNatureGame(kind,random=Math.random){return {kind,phase:kind==='fish'?'wait':'chase',time:0,phaseTime:0,biteAt:1.4+random()*1.2,tension:.45,progress:0,strain:0,hits:0,misses:0,cooldown:0,x:.5,y:.5,tx:.5,ty:.5,result:null,note:''};}
export function stepNatureGame(g,dt,input={}){
 if(g.result!==null)return;dt=Math.min(.05,Math.max(0,dt));g.time+=dt;g.phaseTime+=dt;g.cooldown=Math.max(0,g.cooldown-dt);
 if(g.time>25){g.result=false;g.note='시간이 다 되었어요.';return;}
 if(g.kind==='fish'){
  if(g.phase==='wait'&&g.time>=g.biteAt){g.phase='bite';g.phaseTime=0;g.note='입질! 지금 낚아채요!';}
  else if(g.phase==='bite'&&g.phaseTime>1.5){g.result=false;g.note='입질을 놓쳤어요. 다음에는 느낌표가 뜨면 눌러요.';}
  else if(g.phase==='reel'){
   g.tension=Math.max(0,Math.min(1,g.tension+dt*((input.hold?.42:-.3)+Math.sin(g.time*3.7)*.12)));
   const safe=g.tension>=.2&&g.tension<=.8;g.strain=safe?Math.max(0,g.strain-dt*2):g.strain+dt;
   if(input.hold&&safe)g.progress=Math.min(1,g.progress+dt*.28);
   if(g.progress>=1){g.result=true;g.note='잘 끌어올렸어요!';}else if(g.strain>1.3){g.result=false;g.note=g.tension>.8?'줄이 너무 팽팽해졌어요. 빨간 구간에서는 손을 떼요.':'줄이 느슨해져 물고기가 달아났어요. 조금씩 당겨요.';}
  }
 }else{
  g.tx=.5+Math.sin(g.time*(.9+g.hits*.12))*.32;g.ty=.5+Math.sin(g.time*1.31+.7)*.3;
  g.x=Math.max(.05,Math.min(.95,g.x+(input.x||0)*dt*.62));g.y=Math.max(.05,Math.min(.95,g.y+(input.y||0)*dt*.62));
 }
}
export function actNatureGame(g){
 if(g.result!==null||g.cooldown>0)return false;
 if(g.kind==='fish'){if(g.phase==='wait'){g.note='아직 살짝 건드리는 중이에요. 입질을 기다려요!';return false;}if(g.phase==='bite'){g.phase='reel';g.phaseTime=0;g.note='초록 구간에서 당기고, 빨개지기 전에 놓아요.';return true;}return false;}
 g.cooldown=.65;const hit=Math.hypot((g.x-g.tx)*1.4,g.y-g.ty)<.19;
 if(hit){g.hits++;g.note='잡았다! '+g.hits+'/3';if(g.hits===3){g.result=true;g.note='나비 세 마리와 인사했어요!';}}else{g.misses++;g.note='살짝 빗나갔어요. 원 안에 나비를 맞춰요!';if(g.misses>=3){g.result=false;g.note='나비들이 멀리 날아갔어요. 세 번까지 조심히 겨눠요.';}}return true;
}
export function runNatureGame({dialog,kind,motion,done}){
 const g=newNatureGame(kind),keys=new Set();let pointerHold=false,raf=0,previous=performance.now(),disposed=false;
 const area=dialog.querySelector('.nature-play-area'),button=dialog.querySelector('#nature-catch'),status=dialog.querySelector('#nature-game-status'),timer=dialog.querySelector('#nature-timer');
 function hold(){return pointerHold||keys.has('Space')||keys.has('KeyE');}
 function act(){if(actNatureGame(g))motion('tap',kind);render();}
 function render(){area.dataset.phase=g.phase;timer.textContent=Math.ceil(25-g.time)+'초 · '+(kind==='fish'?'끌어올리기 '+Math.round(g.progress*100)+'%':'성공 '+g.hits+'/3 · 남은 기회 '+(3-g.misses));const announcement=g.note||(kind==='fish'?'찌가 크게 내려갈 때까지 기다려요…':'조준 원을 움직여 나비를 따라가요.');
  if(status.textContent!==announcement)status.textContent=announcement;
  if(kind==='fish'){dialog.querySelector('.fishing-bobber').textContent=g.phase==='bite'?'❗':g.phase==='reel'?'🐟':'🎣';dialog.querySelector('.tension-needle').style.left=g.tension*100+'%';dialog.querySelector('.reel-progress').value=g.progress;button.textContent=g.phase==='reel'?(hold()?'당기는 중 · 놓으면 느슨해져요':'길게 눌러 당기기'):g.phase==='bite'?'지금 낚아채기!':'입질 기다리는 중';}
  else {const target=dialog.querySelector('.nature-butterfly'),aim=dialog.querySelector('.nature-aim');target.style.left=g.tx*100+'%';target.style.top=g.ty*100+'%';aim.style.left=g.x*100+'%';aim.style.top=g.y*100+'%';aim.classList.toggle('on-target',Math.hypot((g.x-g.tx)*1.4,g.y-g.ty)<.19);button.textContent=g.cooldown>0?'잠자리채 준비 중…':'잠자리채 휘두르기';}
 }
 const codes=['Space','KeyE','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD'];
 function down(e){if(!dialog.open||!codes.includes(e.code))return;e.preventDefault();if(!e.repeat&&(e.code==='Space'||e.code==='KeyE'))act();keys.add(e.code);}
 function up(e){if(codes.includes(e.code)){e.preventDefault();keys.delete(e.code);}}
 function clear(){keys.clear();pointerHold=false;}
 function press(e){e.preventDefault();button.setPointerCapture(e.pointerId);pointerHold=true;act();}
 function release(){pointerHold=false;}
 function aim(e){if(kind!=='butterfly')return;const r=area.getBoundingClientRect();g.x=Math.max(.05,Math.min(.95,(e.clientX-r.left)/r.width));g.y=Math.max(.05,Math.min(.95,(e.clientY-r.top)/r.height));render();}
 let dragging=null;function dragStart(e){e.preventDefault();dragging=e.pointerId;area.setPointerCapture(e.pointerId);aim(e);}function drag(e){if(e.pointerId===dragging)aim(e);}function dragEnd(){dragging=null;}
 window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);button.addEventListener('pointerdown',press);for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,release);
 // Enter activates the focused action button; pointer clicks already act on pointerdown.
 button.onclick=e=>{if(e.detail===0)act();};area.addEventListener('pointerdown',dragStart);area.addEventListener('pointermove',drag);area.addEventListener('pointerup',dragEnd);area.addEventListener('pointercancel',dragEnd);
 function dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);clear();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);button.removeEventListener('pointerdown',press);for(const name of ['pointerup','pointercancel','lostpointercapture'])button.removeEventListener(name,release);area.removeEventListener('pointerdown',dragStart);area.removeEventListener('pointermove',drag);area.removeEventListener('pointerup',dragEnd);area.removeEventListener('pointercancel',dragEnd);button.onclick=null;}
 function tick(now){if(disposed||!dialog.open)return;const dt=Math.min(.1,(now-previous)/1000);previous=now;for(let t=0;t<dt;t+=.025)stepNatureGame(g,Math.min(.025,dt-t),{hold:hold(),x:Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA')),y:Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'))});render();if(g.result!==null){dispose();done(g.result,g.note);return;}raf=requestAnimationFrame(tick);}
 render();raf=requestAnimationFrame(tick);return dispose;
}
