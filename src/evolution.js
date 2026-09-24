export const birdKinds=[
 ['병아리','햇살 닭','chicken'],['아기 펭귄','눈꽃 펭귄','penguin'],['아기 홍학','복숭아 홍학','flamingo'],
 ['아기 타조','바람 타조','ostrich'],['아기 공작','라일락 공작','peacock'],['아기 오리','물결 오리','duck'],
 ['아기 부엉이','코코아 부엉이','owl'],['아기 앵무','망고 앵무','parrot'],['아기 키위','숲속 키위','kiwi'],
 ['아기 두루미','장미 두루미','crane'],['아기 백조','구름 백조','swan'],['아기 비둘기','포도 비둘기','pigeon'],
 ['아기 봉황','불꽃 봉황','phoenix'],['아기 황제펭귄','서리 황제펭귄','emperor'],['아기 수리','번개 수리','eagle'],
 ['아기 설원올빼미','달빛 설원올빼미','snowowl'],['아기 벌새','황금 벌새','hummingbird'],['아기 극락조','별빛 극락조','paradise']
];
export const evolutionCost=[300,700];
export function restoreFlock(data,raw=data){
 const valid=Array.isArray(raw.flock)&&raw.flock.length&&raw.flock.every(b=>Number.isInteger(b?.species)&&b.species>=0&&b.species<18&&Number.isInteger(b.stage)&&b.stage>=0&&b.stage<=2);
 data.flock=valid?raw.flock.map((b,id)=>({id,species:b.species,stage:b.stage})):data.owned.map((species,id)=>({id,species,stage:0}));
 for(const species of data.owned)if(!data.flock.some(b=>b.species===species))data.flock.push({id:data.flock.length,species,stage:0});
 if(!valid&&data.layout)for(const bird of data.flock){const old=data.layout['egg-'+bird.species];if(old)data.layout['bird-'+bird.id]={...old};}
 data.owned=[...new Set(data.flock.map(b=>b.species))];
 data.favoriteBird=Number.isInteger(raw.favoriteBird)&&data.flock[raw.favoriteBird]?.species===data.favorite?raw.favoriteBird:data.flock.findIndex(b=>b.species===data.favorite);
 if(data.favoriteBird<0){data.favoriteBird=0;data.favorite=data.flock[0].species;}
 return data;
}
export function evolveBird(data,id){
 const bird=data.flock?.[id];if(!bird||bird.stage>=2)return false;
 const cost=evolutionCost[bird.stage];if(data.shards<cost)return false;
 data.shards-=cost;bird.stage++;data.favoriteBird=id;data.favorite=bird.species;return true;
}
export function formName(bird){return bird.stage?birdKinds[bird.species][bird.stage-1]:'달걀';}
