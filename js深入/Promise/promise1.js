/* 定义初始态 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

function Promise1(executor) {
    let self = this;
    self.status = PENDING;
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];

    /* 如果 promise的状态为 pendding，转为成功态 */
    function resolve(value) {
        if (value != null && value.then && typeof value.then == 'function') {
            return value.then(resolve, reject);
        }
        setTimeout(function() {
            if (self.status == PENDING) {
                self.status = FULFILLED;
                self.value = value;
                console.log(self.value, self.status, self.onResolvedCallbacks)
                    // console.log(cb, 'cb')
                    // self.onResolvedCallbacks.forEach(cb => cb(self.value))
            }
        })
    }

    /* 如果 promise的状态为 pendding，转为失败态 */
    function reject(reason) {
        setTimeout(function() {
            if (self.status == PENDING) {
                self.status = REJECTED;
                self.value = reason;
                // self.onRejectedCallbacks.forEach(cb => cb(self.value))
            }
        })
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e)
    }
}
let promise = new Promise1((resolve, reject) => {
    /* 异步操作 调用 resolve / reject */
    resolve('12121')
});
// promise.then(Fulfilled, Rejected)