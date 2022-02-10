// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var climbStairs = function(n) {
//     let res = 0;
//     if (n === 1 || n === 0) return 1;
//     if (n > 1) {
//         res = climbStairs(n - 1) + climbStairs(n - 2)
//     }
//     console.log(res, '', n)
//     return res;
// };
// 普通解法
// var climbStairs = function(n) {
//     if (n === 1 || n === 0) {
//         return 1;
//     } else {
//         var pre = 1;
//         var cur = 1;
//         for (var i = 2; i <= n; i++) {
//             cur = pre + cur;
//             pre = cur - pre;
//             console.log(cur, '', pre)
//         }

//         return cur
//     }
//     //028-63202964
// }

// 动态规划
var climbStairs = function(n) {
    const res = [];
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
        // console.log(res[i], i, res);
    }
    return res[n];
};
console.log(climbStairs(10), 'climbStairs(10)', );