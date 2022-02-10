function a(callback) {
    console.log("我是回调函数a")
    callback();
    // 回调函数 即完成当前函数后调用其他函数
}

function b() {
    console.log("我是回调函数b")
}

function c() {
    console.log("我是回调函数c")
}

function test() {
    a(b);
    a(c);
}
test();
//--------------------------------
async function asyncFn() {
    return '我后执行'
}
asyncFn().then(result => {
    console.log(result);
})
console.log('我先执行');
//--------------------------------
var name = 'my name is window';
var obj = {
    name: 'my name is obj',
    fn: function() {
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function() {
            console.log(this.name, 'e'); //my name is window
        }, 1000)
    }
}
obj.fn()