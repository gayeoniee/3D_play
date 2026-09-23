// All eggs falling in the same physics step share a rank; array order cannot break ties.
export function recordFalls(actors,fallen,time) {
  const batch=fallen.filter(a=>a.alive);
  if(!batch.length)return;
  const rank=actors.filter(a=>a.alive).length-batch.length+1;
  for(const a of batch){a.alive=false;a.rank=rank;a.eliminatedAt=time;a.fall=0;}
}

export function completeRanks(actors) {
  for(const a of actors)if(a.alive)a.rank=1;
}

export function standings(actors) {
  return [...actors].sort((a,b)=>(a.rank??0)-(b.rank??0)||a.index-b.index);
}
