/* 解决多层嵌套 */
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用~'));
    }
    let called = false;
    if (x instanceof Promise) {
        if (x.status == PENDING) {
            x.then(function(y) {
                resolvePromise(promise2, y, resolve, reject);
            }, reject)
        } else {
            x.then(resolve, reject);
        }
    } else if (x != null && ((typeof x == 'object') || (typeof x == 'function'))) {
        try {
            let then = x.then;
            if (typeof then == 'function') {
                then.call(x, function(y) {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, function(err) {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e)
        }
    } else {
        resolve(resolve(x));
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function(value) { return value };
    onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason };
    let self = this;
    let promise2;

    switch (self.status) {
        case FULFILLED:
            promise2 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    try {
                        let x = (onFulfilled(self.value));
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            });
            break;
        case REJECTED:
            promise2 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    try {
                        let x = onRejected(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            break;
        case PENDING:
            promise2 = new Promise(function(resolve, reject) {
                self.onResolvedCallbacks.push(function() {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }

                })
                self.onRejectedCallbacks.push(function() {
                    try {
                        let x = onRejected(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }

                })
            })
            break;
        default:
            throw 'promise 状态错误';
    }
    return promise2;
}