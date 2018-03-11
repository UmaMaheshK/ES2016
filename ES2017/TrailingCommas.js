//Trailing commas

//declare multiple variable with values assigns
[a, b, c] = [10, 11, 12];

console.log(a);//10
console.log(b);//11
console.log(c);//12

[x, y, z,] = [10, 11, 12];//x=10,y=11,z=12
[x, y, z,] = [10, 11, 12, 14];

console.log(x);//10
console.log(y);//11
console.log(z);//12

let arr = [1, 2, 3, 4,];
console.log(arr.length)//4
console.log(arr);//[1,2,3,4]

let arr1 = [1, 2, 3, , ,];
console.log(arr1.length)//5
console.log(arr1);//[ 1, 2, 3, <2 empty items> ]