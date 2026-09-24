// Keep the village visible; existing controls retain their state and listeners.
export function createVillageHome({onZoom}){
  const stage=document.querySelector('.village-stage');
  const dialog=document.createElement('dialog');
  dialog.id='village-panel';
  dialog.setAttribute('aria-labelledby','village-panel-title');
  dialog.innerHTML='<div class="village-panel-heading"><h2 id="village-panel-title"></h2><button type="button" aria-label="마을로 돌아가기">×</button></div><div class="village-panel-content"></div>';
  document.body.append(dialog);
  const content=dialog.querySelector('.village-panel-content');
  const panels={
    collection:['달걀 컬렉션','.residents-section','.resident-card'],
    hatch:['두근두근 둥지','.hatch-card'],
    settings:['마을 관리','.village-bottom','.backup-card']
  };
  for(const entry of Object.values(panels)){
    entry.slice(1).forEach(selector=>content.append(document.querySelector(selector)));
  }
  const dock=document.createElement('nav');dock.className='village-dock';dock.setAttribute('aria-label','마을 활동');
  dock.innerHTML='<button data-panel="collection"><span>🥚</span>내 달걀</button><button data-panel="hatch"><span>✧</span>달걀 뽑기</button><button data-panel="settings"><span>⚙</span>마을 관리</button>';
  const arena=document.getElementById('village-arena-link');
  arena.className='village-battle-button';arena.innerHTML='<span>⚑</span>경기장';dock.append(arena);stage.append(dock);
  stage.append(document.querySelector('.village-stats'));
  const zoom=document.createElement('button');zoom.className='village-zoom';zoom.textContent='가까이 보기 ＋';zoom.setAttribute('aria-pressed','false');
  zoom.addEventListener('click',()=>{const near=zoom.getAttribute('aria-pressed')!=='true';zoom.setAttribute('aria-pressed',String(near));zoom.textContent=near?'마을 전체 보기 −':'가까이 보기 ＋';onZoom(near);});stage.append(zoom);
  function close(){if(dialog.open)dialog.close();}
  function open(key){
    const [title,...selectors]=panels[key];
    Array.from(content.children).forEach(node=>node.hidden=!selectors.some(selector=>node.matches(selector)));
    document.getElementById('village-panel-title').textContent=title;
    if(!dialog.open)dialog.showModal();
    content.scrollTop=0;
  }
  dock.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>open(button.dataset.panel)));
  dialog.querySelector('.village-panel-heading button').addEventListener('click',close);
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});
  document.getElementById('draw-meet').addEventListener('click',close);
  document.getElementById('village-greet').addEventListener('click',close);
  document.querySelectorAll('.resident-button').forEach(button=>button.addEventListener('click',()=>document.querySelector('.resident-card').scrollIntoView({block:'start'})));
  return {open,close};
}
