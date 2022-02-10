let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})
promise2 = promise1.then(res => {
    // return new Promise((resolve, reject) => {
    //     // resolve(res, 'promise1.resolve');
    //     reject(res + 'promise1.reject')
    // })

    throw new Error('这里抛出一个异常e')
})
promise2.then(res => {
    console.log(res, '2')
}, err => {
    console.log(err, 'promise2.then') //1秒后打印出：这里抛出一个异常e
})