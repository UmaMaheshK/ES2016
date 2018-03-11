//Rest Parameters

//Exp1
function fun1(...args) {
    return args.reduce((prev, curr) => prev + curr);
}

let a = [1, 2, 3, 4, 5];
console.log(fun1(...a));//15
console.log(fun1(1, 2, 3, 4, 5));//15

//Exp2 Destructuring rest parameters
function fun2(...[a, b, c]) {
    return a + b + c;
}

console.log(fun2())//NaN
console.log(fun2(1))//NaN
console.log(fun2(1, 2, 3))//6
//ignor the 4
console.log(fun2(1, 2, 3, 4))//6

//Exp3
function fun3(...args) {
    console.log(args.length);
}
fun3()//0
fun3(1)//1
fun3(1, 2, 3, 4, 5)//5

//Exp4
//last parameter should be rest paramenter
function fun4(a, b, c, ...args) {
    console.log('a:= ', a);
    console.log('b:= ', b);
    console.log('c:= ', c);
    console.log(args);
}
fun4(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Exp5
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

//Exp6
function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

//Exp7
function sortArguments() {
    var args = Array.from(arguments);
    var sortedArgs = args.sort();
    return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7