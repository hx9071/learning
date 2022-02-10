function Type() {};
var types = [
    new Array,
    //
    [],
    new Boolean,
    true, // remains unchanged
    new Date,
    new Error,
    new Function,
    function() {},
    Math,
    new Number,
    1, // remains unchanged
    new Object,
    {},
    new RegExp,
    /(?:)/,
    new String,
    "test" // remains unchanged
];
for (var i = 0; i < types.length; i++) {
    types[i].constructor = Type;
    // instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
    types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
};
console.log(types.join("\n"));
// function Type() {},false,
// function Type() {},false,
// function Type() {},false,false
// function Boolean() { [native code] },false,true
// function Type() {},false,Tue Oct 12 2021 17:31:16 GMT+0800 (中国标准时间)
// function Type() {},false,Error
// function Type() {},false,function anonymous( ) { }
// function Type() {},false,function() {}
// function Type() {},false,[object Math]
// function Type() {},false,0
// function Number() { [native code] },false,1
// function Type() {},false,[object Object]
// function Type() {},false,[object Object]
// function Type() {},false,/(?:)/
// function Type() {},false,/(?:)/
// function Type() {},false,
// function String() { [native code] },false,test