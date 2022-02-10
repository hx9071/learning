// var longestCommonPrefix = function(strs) {
//     if (!strs.length) return ''
//     let flag = strs[0]
//     while (strs.some(str => (str.slice(0, flag.length) !== flag))) {
//         //如果有就循环继续，如果没有当前flag就是前缀解
//         //查看字符串数组中有没有其前缀和flag不等的

//         flag = flag.slice(0, flag.length - 1) //把标记字符串缩短一个字符
//         console.log(flag, 'flag', );
//     }
//     return flag
// };
let flag = '';
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    flag = strs[0];
    while (flag.length && !strs.every(ifindex)) {
        flag = flag.slice(0, flag.length - 1);
    }
    console.log(flag, '----');
    return flag
};

function ifindex(str) {
    return str.slice(0, flag.length) === flag;
}
longestCommonPrefix(["flower", "flow", "flight"]);