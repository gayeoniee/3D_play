export function createSound(){
 let context,enabled=true,lastHit=-1;const voices=new Set();
 function stop(){for(const voice of voices){try{voice.stop();}catch{}}voices.clear();}
 try{enabled=localStorage.getItem('eggy-sound')!=='off';}catch{}
 const button=document.createElement('button');button.className='sound-toggle';button.id='sound-toggle';button.type='button';document.querySelector('header').append(button);
 function sync(){button.textContent=enabled?'♪ 효과음 켜짐':'♪ 효과음 꺼짐';button.setAttribute('aria-pressed',String(enabled));}
 function unlock(){if(!enabled)return;try{context??=new (window.AudioContext||window.webkitAudioContext)();if(context.state==='suspended')context.resume().catch(()=>{});}catch{}}
 document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
 button.addEventListener('click',()=>{enabled=!enabled;try{localStorage.setItem('eggy-sound',enabled?'on':'off');}catch{}sync();if(enabled)unlock();else{stop();context?.suspend().catch(()=>{});}});sync();
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();context?.suspend().catch(()=>{});}else if(enabled&&context)context.resume().catch(()=>{});});
 function tone(from,to,duration=.12,type='sine',volume=.05,delay=0){
  if(!enabled||!context||context.state!=='running')return;
  const t=context.currentTime+delay,o=context.createOscillator(),gain=context.createGain();o.type=type;o.frequency.setValueAtTime(from,t);o.frequency.exponentialRampToValueAtTime(Math.max(30,to),t+duration);gain.gain.setValueAtTime(.001,t);gain.gain.exponentialRampToValueAtTime(volume,t+.009);gain.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(gain);gain.connect(context.destination);voices.add(o);o.start(t);o.stop(t+duration+.01);o.onended=()=>{voices.delete(o);o.disconnect();gain.disconnect();};
 }
 return {hit(strength=1){if(!context||context.currentTime-lastHit<.075)return;lastHit=context.currentTime;tone(310+strength*18,95,.13,'sine',.035+Math.min(strength,10)*.004);if(strength>6)tone(760,420,.1,'triangle',.025,.025);},skill(kind){tone([260,520,380,680,450,800][kind],[650,280,100,1000,700,180][kind],.2,'triangle',.045);},win(){[523,659,784].forEach((n,i)=>tone(n,n,.18,'sine',.05,i*.12));},get enabled(){return enabled;}};
}
