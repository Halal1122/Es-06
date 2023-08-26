const arr =[1, 2, 3];
const a = (x)=> console.log(x)
arr.forEach(a);

const forts = ['mango', 'tango', 'bango'];
forts.forEach(item=>{
    console.log(item)
});

const arr1 = [1, 2, 3];
let sum =0;
arr.forEach(item=> sum +=item)  // sum = sum + item [ মানে আইটেম আর সামের মান যোগ করে আবার সামের চলে আসবে ]
console.log(sum)
