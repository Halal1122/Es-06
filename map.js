const arr = [1, 2, 3]
const result = arr.map((item )=> item *2)
console.log(result)
console.log('main',arr) // main array চেন্জ হয় না কারণ ‍array একটি non primitive date type

const fruts = ['mango', 'tango', 'bango']
fruts.map((item,index) => console.log(item,index))