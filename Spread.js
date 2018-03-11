//ES7(ES2016) Featurs

//Object Rest / Spread Properties

//Exp1
let { a, b, c } = { a: 10, b: 20, c: 30 };
console.log(a)//10
console.log(b)//20
console.log(c)//30

//Exp2
let { a1, b1, c1, ...x } = { a1: 110, b1: 120, c1: 130, x: 1, y: 2, z: 3 };
console.log(a1);//110
console.log(b1);//120
console.log(c1);//130
console.log(x);//{x:1,y:2,z:3}

//Exp3
let a2 = 10, b2 = 20, c2 = 30;
let x2 = { x: 1, y: 2, z: 3 };
let obj = { a2, b2, c2, ...x2 };

//Exp4
[a, b, c] = [100, 200, 300];
console.log(a)//100
console.log(b)//200
console.log(c)//300