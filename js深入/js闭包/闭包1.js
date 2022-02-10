// var data = [];
// for (var i = 0; i < 4; i++) {
//     data[i] = function() {
//         console.log(i);
//     };
// }
// data[0](); 4
// data[1](); 4
// data[2](); 4
// var data = [];
// for (var i = -4; i < 4; i++) {
//     data[i] = (function(i) {
//         return function() {
//             console.log(i + 1);
//         }
//     })(i);
// }
// data[0](); // 0
// data[1](); // 1
// data[2](); // 2
// var value = 1;

// // function foo() {
// //     console.log(value);
// // }

// function bar() {
//     // var value = 2;
//     var foo = function() {
//         console.log(value);
//     }();
// }

// bar();
var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f;
}
checkscope();