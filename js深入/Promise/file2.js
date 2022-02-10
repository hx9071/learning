// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是')
// promise2.then(res => {
//     console.log(res) // 1秒后打印出：success
// }, err => {
//     console.log(err)
// })
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('fail')
    }, 1000)
})
promise2 = promise1.then(res => res, '这里的onRejected本来是一个函数，但现在不是')
promise2.then(res => {
    console.log(res)
}, err => {
    console.log(err) // 1秒后打印出：fail
})