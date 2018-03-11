//Object.assign(target,source1,source2...sourcen);

/*
//Exp1

let obj = { a: 1, b: 2 };
let obj1 = Object.assign({}, obj);
console.log(obj);//{ a: 1, b: 2 }
console.log(obj1);//{ a: 1, b: 2 }

obj.a = 10;
console.log(obj);//{ a: 10, b: 2 }
console.log(obj1);//{ a: 1, b: 2 }

obj1.a = 100;
console.log(obj);//{ a: 10, b: 2 }
console.log(obj1);//{ a: 100, b: 2 }

*/

/*
//Exp2 Merging objects
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let o4 = Object.assign(o1, o2, o3);
console.log(o4);//{ a: 1, b: 2, c: 3 }
console.log(o1);//{ a: 1, b: 2, c: 3 }

o1.a = 100;
console.log(o4);//{ a: 100, b: 2, c: 3 }
console.log(o1);//{ a: 100, b: 2, c: 3 }

o4.a = 120;
console.log(o4);//{ a: 120, b: 2, c: 3 }
console.log(o1);//{ a: 120, b: 2, c: 3 }

let o5 = o4;
o1.a = 100;
console.log(o4);//{ a: 100, b: 2, c: 3 }
console.log(o5);//{ a: 100, b: 2, c: 3 }
*/

/*
//Exp4 Merging objects with same properties

var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
*/
function test() {
    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.assign({}, obj1);
    console.log(obj2);//{ a: 0, b: { c: 0 } }

    obj1.a = 1;
    console.log(obj1); // { a: 1, b: { c: 0}}
    console.log(obj2); // { a: 0, b: { c: 0}}

    obj2.a = 2;
    console.log(obj1); // { a: 1, b: { c: 0}}
    console.log(obj2); // { a: 2, b: { c: 0}}

    obj2.b.c = 3;
    console.log(obj1); // { a: 1, b: { c: 3}}
    console.log(obj2); // { a: 2, b: { c: 3}}

    // Deep Clone
    obj1 = { a: 0, b: { c: 0 } };
    let obj3 = JSON.parse(JSON.stringify(obj1));

    obj1.a = 4;
    obj1.b.c = 4;
    
    console.log(obj1); // { a: 4, b: { c: 4}}
    console.log(obj3); // { a: 0, b: { c: 0}}
}
test();