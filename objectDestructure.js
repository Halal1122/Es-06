const person= {name:'yeasir', age: 24, address: 'chunati'};
const { age, ...f}= person;
console.log(age, f)