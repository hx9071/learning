// function* gen() {
//     yield 1
//     yield 2
//     return 3
//     yield 4
// }

// let g = gen()

// // console.log([...g]) // [1, 2]

// // for (let foo of g) {
// //     console.log(foo) // 1, 2
// // }

// console.log(g.next())
// console.log(g.next(10))
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

function* gen(x) {
        var y = 2 * (yield(x + 1))
        var z = yield(y / 3)
        return (x + y + z)
    }
    // 1. yield 表达式本身没有返回值，或者说总是返回undefined
    // 2. next() 方法可以带一个参数，该参数会改变上一个yield表达式的返回值
var a = gen(5);
console.log(a.next()); // {value: 6, done: false} 
console.log(a.next(3)); // {value: NaN, done: false}
console.log(a.next()); // {value: NaN, done: true}

var b = gen(5);
b.next() // {value: 6, done: false}
b.next(12) // {value: 8, done: false}
b.next(13) // {value: 42, done: true}

// 第一次调用 a 的 next() 方法时，返回 x+1 的值6。第二次运行a的 next() 方法的时候不带参数，导致 y 的值等于2 * 
// undefined（即NaN），除以 3 以后还是NaN，因此返回对象的 value 属性也等于 NaN。第三次运行a的 next() 方法的
// 时候不带参数，所以 z 等于undefined，返回对象的 value 属性等于5 + NaN + undefined，即NaN。

// 第一次调用b的 next() 方法时，返回 x+1 的值6；第二次调用 next() 方法，将上一次 yield 表达式的值设为12，因此
// y等于24，返回y / 3的值8；第三次调用 next() 方法，将上一次 yield 表达式的值设为13，因此 z 等于13，这时 x 等
// 于5，y 等于24，所以 return 语句的值等于42。