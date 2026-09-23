import * as THREE from 'three';
export function clampPlacement(x,z,radius=.5){
 const rx=Math.max(1,10.8-radius),rz=Math.max(1,7.7-radius),distance=Math.hypot(x/rx,z/rz);
 return distance>1?{x:x/distance,z:z/distance}:{x,z};
}
export function createVillageEditor({root,camera,container,data,save}){
 const objects=[],history=[],ray=new THREE.Raycaster(),pointer=new THREE.Vector2(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),-.14);
 let editing=false,selected=null,drag=null;
 const $=id=>document.getElementById(id);
 const marker=new THREE.Mesh(new THREE.RingGeometry(.9,1,64),new THREE.MeshBasicMaterial({color:'#d6a54d',side:THREE.DoubleSide,depthWrite:false}));marker.rotation.x=-Math.PI/2;marker.visible=false;root.add(marker);
 function message(text){$('edit-status').textContent=text;}
 function sync(){marker.visible=editing&&!!selected;if(selected){marker.position.set(selected.object.position.x,.17,selected.object.position.z);marker.scale.setScalar(selected.radius+.2);}}
 function store(item,p){item.object.position.x=p.x;item.object.position.z=p.z;data.layout[item.id]={x:p.x,z:p.z};sync();}
 function coords(e){const b=container.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(pointer,camera);}
 function ground(e){coords(e);return ray.ray.intersectPlane(plane,new THREE.Vector3());}
 function hit(e){coords(e);const contact=ray.intersectObjects(objects.filter(a=>a.object.visible).map(a=>a.object),true)[0];if(!contact)return null;let o=contact.object;while(o&&!o.userData.layoutId)o=o.parent;return objects.find(a=>a.id===o?.userData.layoutId);}
 function remember(items){history.push(items);if(history.length>20)history.shift();$('edit-undo').disabled=false;}
 function select(item){selected=item;sync();message(item?item.name+' 선택 · 드래그 또는 방향키로 이동':'집·나무·꽃밭·달걀을 눌러 옮겨보세요.');}
 function cancel(){if(!drag)return;store(drag.item,drag.before);drag=null;save();}
 function setEditing(value){cancel();editing=value;container.classList.toggle('editing',value);$('village-edit').textContent=value?'배치 완료 ✓':'마을 꾸미기 ↔';$('village-edit').setAttribute('aria-pressed',String(value));$('editor-toolbar').hidden=!value;select(null);}
 container.addEventListener('pointerdown',e=>{
   if(!editing||drag||e.button!==0)return;e.preventDefault();const item=hit(e);select(item);if(!item)return;
   const p=ground(e);if(!p)return;const before={x:item.object.position.x,z:item.object.position.z};drag={id:e.pointerId,item,before,ox:before.x-p.x,oz:before.z-p.z};container.setPointerCapture(e.pointerId);
 });
 container.addEventListener('pointermove',e=>{
   if(!editing||!drag||drag.id!==e.pointerId)return;e.preventDefault();const p=ground(e);if(p)store(drag.item,clampPlacement(p.x+drag.ox,p.z+drag.oz,drag.item.radius));
 });
 container.addEventListener('pointerup',e=>{
   if(!drag||drag.id!==e.pointerId)return;const d=drag;drag=null;
   if(Math.hypot(d.item.object.position.x-d.before.x,d.item.object.position.z-d.before.z)>.01){remember([{item:d.item,position:d.before}]);save();message(d.item.name+' 배치를 저장했어요.');}
 });
 for(const type of ['pointercancel','lostpointercapture'])container.addEventListener(type,()=>cancel());
 window.addEventListener('blur',cancel);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
 document.addEventListener('keydown',e=>{
   if(!editing||!selected||e.target.closest('button,dialog,input,textarea'))return;
   const moves={ArrowLeft:[-.25,0],ArrowRight:[.25,0],ArrowUp:[0,-.25],ArrowDown:[0,.25]};if(!moves[e.code])return;e.preventDefault();
   const p=selected.object.position;remember([{item:selected,position:{x:p.x,z:p.z}}]);store(selected,clampPlacement(p.x+moves[e.code][0],p.z+moves[e.code][1],selected.radius));save();
 });
 $('village-edit').addEventListener('click',()=>{setEditing(!editing);$('village-edit').blur();});
 $('edit-undo').addEventListener('click',()=>{const entry=history.pop();if(entry){entry.forEach(({item,position})=>store(item,position));save();message('이전 배치로 되돌렸어요.');}$('edit-undo').disabled=!history.length;});
 $('edit-reset').addEventListener('click',()=>{remember(objects.map(item=>({item,position:{x:item.object.position.x,z:item.object.position.z}})));objects.forEach(item=>store(item,item.initial));save();message('기본 배치로 돌아왔어요. 되돌리기로 취소할 수 있어요.');});
 return {
   get editing(){return editing;},stop:()=>setEditing(false),
   register(id,name,object,radius){const initial={x:object.position.x,z:object.position.z},item={id,name,object,radius,initial};objects.push(item);object.userData.layoutId=id;const p=data.layout[id];if(p)store(item,clampPlacement(p.x,p.z,radius));},
   update:sync,
   snapshot:()=>objects.filter(a=>a.object.visible).map(a=>{const p=a.object.position.clone();p.y+=a.id.startsWith('house')?1:a.id.startsWith('tree')?1.2:a.id.startsWith('egg')?.7:.3;p.project(camera);const b=container.getBoundingClientRect();return {id:a.id,x:a.object.position.x,z:a.object.position.z,screenX:b.left+(p.x*.5+.5)*b.width,screenY:b.top+(-p.y*.5+.5)*b.height};})
 };
}
