export function explorationDay(date=new Date()){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
export function readExploration(value,day=explorationDay()){
 return {day:/^\d{4}-\d{2}-\d{2}$/.test(value?.day)?value.day:day,collected:Array.isArray(value?.collected)?[...new Set(value.collected.filter(i=>Number.isInteger(i)&&i>=0&&i<5))]:[]};
}
export function collectStarFlower(data,id,day=explorationDay()){
 if(!Number.isInteger(id)||id<0||id>=5)return 0;
 data.exploration=readExploration(data.exploration,day);
 if(data.exploration.day!==day)data.exploration={day,collected:[]};
 if(data.exploration.collected.includes(id))return 0;
 data.exploration.collected.push(id);
 const reward=data.exploration.collected.length===5?60:10;data.shards+=reward;return reward;
}
