// A small cached walking grid. Saved furniture stays exactly where the player put it.
export function villageObstacles(objects){
 return objects.flatMap(o=>{const id=o.userData.layoutId||'',p=o.position,type=id.split('-')[0];
  const radii={house:1.3,tree:.3,fountain:1.28,arena:2.15};
  const boxes={pond:[2.15,1.15],flower:[.72,.44],bench:[.62,.3],fence:[2.18,.14]};
  if(radii[type])return [{x:p.x,z:p.z,r:radii[type]+.44}];
  if(boxes[type])return [{x:p.x,z:p.z,hx:boxes[type][0]+.44,hz:boxes[type][1]+.44}];return [];
 });
}
export function createNavigation(obstacles){
 const spacing=.4,cols=51,rows=35,points=[],lookup=new Map();
 function clear(p){return Number.isFinite(p.x)&&Number.isFinite(p.z)&&Math.hypot(p.x/10,p.z/6.85)<=1&&obstacles.every(o=>o.r?Math.hypot(p.x-o.x,p.z-o.z)>o.r:Math.abs(p.x-o.x)>o.hx||Math.abs(p.z-o.z)>o.hz);}
 function segment(a,b){const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.08));for(let i=0;i<=n;i++)if(!clear({x:a.x+(b.x-a.x)*i/n,z:a.z+(b.z-a.z)*i/n}))return false;return true;}
 for(let z=0;z<rows;z++)for(let x=0;x<cols;x++){const p={x:(x-25)*spacing,z:(z-17)*spacing,gx:x,gz:z};if(clear(p)){p.id=points.length;points.push(p);lookup.set(z*cols+x,p);}}
 const nearest=(p,avoid=()=>false)=>points.reduce((best,q)=>avoid(q)?best:!best||Math.hypot(q.x-p.x,q.z-p.z)<Math.hypot(best.x-p.x,best.z-p.z)?q:best,null);
 const neighbors=points.map(p=>{const result=[];for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dz)continue;const q=lookup.get((p.gz+dz)*cols+p.gx+dx);if(q&&Math.abs(q.gx-p.gx)<=1&&segment(p,q))result.push(q.id);}return result;});
 function path(start,end){
  const s=clear(start)?start:nearest(start),goal=clear(end)?end:nearest(end);if(!s||!goal)return [];
  if(segment(s,goal))return [s,goal];
  const from=points.map(p=>({p,d:Math.hypot(p.x-s.x,p.z-s.z)})).sort((a,b)=>a.d-b.d).find(({p})=>segment(s,p))?.p;
  if(!from)return [s];
  const open=[from.id],visited=new Set(),g=new Map([[from.id,0]]),parent=new Map();let last=from,score=Math.hypot(from.x-goal.x,from.z-goal.z);
  while(open.length){
   let best=0;for(let i=1;i<open.length;i++){const a=points[open[i]],b=points[open[best]];if(g.get(a.id)+Math.hypot(a.x-goal.x,a.z-goal.z)<g.get(b.id)+Math.hypot(b.x-goal.x,b.z-goal.z))best=i;}
   const p=points[open.splice(best,1)[0]];visited.add(p.id);const distance=Math.hypot(p.x-goal.x,p.z-goal.z);
   if(distance<score){last=p;score=distance;}
   if(segment(p,goal)){last=p;score=0;break;}
   for(const id of neighbors[p.id]){if(visited.has(id))continue;const q=points[id],cost=g.get(p.id)+Math.hypot(p.x-q.x,p.z-q.z);if(cost<(g.get(id)??Infinity)){g.set(id,cost);parent.set(id,p.id);if(!open.includes(id))open.push(id);}}
  }
  const raw=[last];while(parent.has(raw[0].id))raw.unshift(points[parent.get(raw[0].id)]);raw.unshift(s);if(score===0)raw.push(goal);
  const result=[s];let i=0;while(i<raw.length-1){let next=raw.length-1;while(next>i+1&&!segment(raw[i],raw[next]))next--;result.push(raw[next]);i=next;}return result;
 }
 return {clear,segment,path,nearest};
}
