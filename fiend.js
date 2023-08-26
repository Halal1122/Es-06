const fruits = ['mango', 'tango', 'bango']

const find = (fruits)=>{
    for(let item of fruits){
        if(item === 'bango'){
            return item;
        }
    }
    return null;
}
const x = find(fruits);
console.log(x)

const y= fruits.find((item)=>(item === 'vango'))
console.log(y)