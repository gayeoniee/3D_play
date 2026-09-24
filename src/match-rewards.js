export const matchRewards=Object.freeze([150,110,80,50,30,20]);
export const rewardForRank=rank=>Number.isInteger(rank)&&rank>=1&&rank<=6?matchRewards[rank-1]:0;
