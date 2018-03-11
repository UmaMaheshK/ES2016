//Exp1
function resolveAfter2Seconds() {
    return new Promise(resolve => { setTimeout(() => { resolve('resolved'); }, 2000); });
}

async function fun1() {
    let result = await resolveAfter2Seconds();
    console.log(result);
}
fun1();


function fun2(x) {
    return new Promise(res => { setTimeout(() => res(x), 2000); });
}
//Exp2
async function add(a) {
    const x = await fun2(20);
    const y = await fun2(30);
    return a + x + y;
}
add(10).then(s => console.log(`print ${s} after 4 seconds`));//print 60 after 4 seconds

//Exp3
async function add1(a) {
    const x = fun2(20);
    const y = await fun2(30);
    return a + await x + await y;
}
add1(10).then(s => console.log(`print ${s} after 2 seconds`));//print 60 after 2 seconds

//Exp4
async function f2() {
    var y = await 20;
    console.log(y); // 20
}
f2();

//Exp5
async function f3() {
    try {
      var z = await Promise.reject(30);
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();