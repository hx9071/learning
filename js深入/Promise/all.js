//all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据
let Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise1')
    }, 3000)
})
let Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2')
    }, 2000)
})
let Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise')
    }, 1000)
})
let p = Promise.all([Promise1, Promise2, Promise3])

p.then(res => {
    console.log(res, 'res')
}).catch(ress => {
    console.log(ress, '错误')
})