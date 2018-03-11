let arr = [1, 2, 3, 4];

console.log(arr.lastIndexOf(1));//0
console.log(arr.lastIndexOf(10));//-1

console.log(arr.includes(1));//true
console.log(arr.includes(10));//false

//includes(searchElement,fromIndex)
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
