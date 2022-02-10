// 判断是不是回文数
// 方法-：将数字转为数组
// var isPalindrome = function(x) {
//     if (x < 0) {
//         return false;
//     }
//     let status = true;;
//     let arr = x.toString().split('');
//     let i = 0;
//     while (i < Math.floor(arr.length / 2)) {
//         let after = arr.length - 1 - i;
//         if (arr[after] == arr[i]) {
//             i++;
//         } else {
//             status = false
//             break
//         }
//     }
//     return status
// };
//纯数字操作
var isPalindrome = function(x) {
    if (x == 0) {
        return true;
    } else if (x < 0 || x % 10 == 0) {
        return false;
    } else {
        let length = Math.floor(x.toString().length / 2);
        let after = x % (Math.pow(10, length));
        let afters = after.toString().split("").reverse().join("");
        let pre = parseInt(x / Math.pow(10, length));
        if ((x.toString().length % 2)) {
            length = length + 1;
            pre = parseInt(x / Math.pow(10, length));
        }
        console.log(pre, length, after);
        return afters == pre;
    }
}

var x = 1001;
console.log(isPalindrome(x));