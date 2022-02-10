// 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
// 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，
// 你就可以选择向上爬一个阶梯或者爬两个阶梯。
// 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

// 在首尾都加一个0
// 分别代表地面，和楼顶
// 数组的每一个数字代表从当前楼梯迈出所需要耗费的体力
// 从地面开始，第一步可以选择第0阶或者第1阶，都不费力
// 最终要求到达最后一个0（楼顶）所耗费的体力最少。
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1],    + cost[i - 2]);
    }
    return dp[n];
};