const numbers = [1,2,4,3,5,7];
const filter = numbers => {
    const result = [];
    for(let item of numbers){
        if(item%2 === 0){
            result.push(item)
        }
    }
    return result;
}
const x = filter(numbers);
console.log(x)

const y = numbers.filter((item)=> item%2 ===0)
console.log(y)