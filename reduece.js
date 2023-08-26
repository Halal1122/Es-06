const arr = [1, 2, 3, 4, 5]
const initial = 50;
const sum = arr.reduce((previous,current)=>previous +  current, initial)
console.log(sum)