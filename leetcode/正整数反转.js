// var reverse = function(x) {

//     if (x > 2147483648 || x < -2147483648 || x == 0) {
//         return 0;
//     }

//     let xs = Math.abs(x) + '';
//     let arr = xs.split('');
//     let brr = arr.reverse();
//     let y = brr.join('');

//     console.log(x < 0 ? -y : y);
// };
var reverse = function(x) {
    let y = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0)
        y = -y;
    return y > 2147483647 || y < -2147483648 ? 0 : y;
};
console.log(reverse(1534236469));

// var reverse = function (x) {
//     let y = parseInt(x.toString().split("").reverse().join(""));
//     if (x < 0)
//         y = - y;
//     return y > 2147483647 || y < -2147483648 ? 0 : y;
// };