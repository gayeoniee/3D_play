const KEY='eggy-village-v1';
export function createStorageSession(storage,onConflict){
 let expected;try{expected=storage.getItem(KEY);}catch{return null;}
 let conflicted=false;
 const conflict=()=>{if(!conflicted){conflicted=true;onConflict();}};
 window.addEventListener('storage',e=>{try{if((e.key===KEY||e.key===null)&&storage.getItem(KEY)!==expected)conflict();}catch{}});
 return {getItem:key=>storage.getItem(key),setItem(key,value){
  if(storage.getItem(KEY)!==expected)conflict();
  if(conflicted)throw Error('다른 탭에서 마을이 바뀌었어요. 최신 기록을 불러와 주세요.');
  storage.setItem(key,value);if(key===KEY)expected=value;
 }};
}
