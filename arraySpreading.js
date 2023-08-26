const arr = [2, 3, 4];
const arr2 = [...arr]; // যদি কোন কারণে ... দিয়ে না লিখে তাহলে প্রথাম এ্যারে এবং দ্বিতীয় এ্যারে সেইম কপি করে পেলবে] 
arr.push(70);
arr.push(90);
arr2.push(50);
console.log(arr);
console.log(arr2)