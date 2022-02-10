// let text = async(res, reb) => {
//     console.log(res, '入参')
//     new Promise((resolve, reject) => {
//         console.log('Promise1');
//         setTimeout(() => {
//             console.log(res, '1秒后哦');
//             reject('Rejected_' + reb);
//             resolve('FULFILLED_' + res);
//         }, 1000);
//         console.log('Promise2');
//     }).then(ress => {
//         console.log(ress)
//     }).catch(rej => {
//         console.log(rej)
//     })
//     console.log(reb, '出参')
// }
// console.log(text(1, 5))
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise')
    }, 1000)
})
promise2 = promise1.then(res => {
    // 返回一个Promise对象
    console.log(res, 'promise1.then');
    // return new Promise((resolve, reject) => { // promise1 后的 promise2
    //         resolve(res, 'promise2.then')
    //     })
    // resolve(res + 'promise2.then')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('这里返回一个Promise')
        }, 2000)
    }).then(ress => {
        console.log('promise2' + ress)
    })
})
promise2.then(res => {
    console.log(res, 'promise2') //3秒后打印出：这里返回一个Promise
})