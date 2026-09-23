export function createMobileControls({state,pause,resume,lobby}) {
  const pad=document.getElementById('joystick'),thumb=document.getElementById('joystick-thumb');
  const vector={x:0,z:0};let pointer=null,active=false,rotationPaused=false,touchInput=false,session=0;
  document.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')touchInput=true;},{capture:true,passive:true});
  const isMobile=()=>touchInput||navigator.maxTouchPoints>0||matchMedia('(pointer: coarse)').matches;
  function reset(){pointer=null;vector.x=vector.z=0;thumb.style.transform='translate(0px,0px)';pad.classList.remove('dragging');}
  function move(e){
    if(e.pointerId!==pointer)return;
    const box=pad.getBoundingClientRect(),limit=box.width*.3;
    let x=e.clientX-box.left-box.width/2,z=e.clientY-box.top-box.height/2;
    const length=Math.hypot(x,z);if(length>limit){x*=limit/length;z*=limit/length;}
    vector.x=Math.abs(x/limit)<.08?0:x/limit;vector.z=Math.abs(z/limit)<.08?0:z/limit;
    thumb.style.transform='translate('+x+'px,'+z+'px)';
  }
  pad.addEventListener('pointerdown',e=>{
    if(pointer!==null||state()!=='playing')return;e.preventDefault();pointer=e.pointerId;
    pad.setPointerCapture(pointer);pad.classList.add('dragging');move(e);
  });
  pad.addEventListener('pointermove',move);
  for(const type of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(type,e=>{if(e.pointerId===pointer)reset();});
  function sync(){
    if(!active)return;
    const portrait=innerHeight>innerWidth;
    document.getElementById('rotate-prompt').hidden=!portrait;
    if(portrait&&(state()==='playing'||state()==='countdown')){rotationPaused=true;reset();pause();}
    else if(!portrait&&rotationPaused){rotationPaused=false;if(state()==='paused'&&!document.hidden)resume();}
  }
  window.addEventListener('resize',sync);window.addEventListener('blur',reset);
  document.getElementById('rotate-back').addEventListener('click',lobby);
  return {vector,reset,
    begin(){
      if(!isMobile())return;active=true;const current=++session;document.body.classList.add('mobile-match');sync();
      // Orientation locking requires a user gesture and is not supported by all mobile browsers.
      (async()=>{
        try{if(!document.fullscreenElement&&document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();}catch{}
        if(!active||current!==session){if(!active&&document.fullscreenElement)document.exitFullscreen().catch(()=>{});return;}
        try{if(screen.orientation?.lock)await screen.orientation.lock('landscape');}catch{}
        if(!active||current!==session){if(!active){try{screen.orientation?.unlock?.();}catch{}}return;}
        sync();
      })();
    },
    end(){
      active=false;session++;rotationPaused=false;reset();document.body.classList.remove('mobile-match');document.getElementById('rotate-prompt').hidden=true;
      try{screen.orientation?.unlock?.();}catch{}
      if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
    }
  };
}
