// 给你一个整数数组 nums， 按要求返回一个新数组  counts。 数组 counts 有该性质：
// counts[i] 的值是  nums[i] 右侧小于  nums[i] 的元素的数量。
// 示例 1：
// 输入： nums = [5, 2, 6, 1]
// 输出：[2, 1, 1, 0]
// 解释：
// 5 的右侧有 2 个更小的元素(2 和 1)
// 2 的右侧仅有 1 个更小的元素(1)
// 6 的右侧有 1 个更小的元素(1)
// 1 的右侧有 0 个更小的元素
// 示例 2：
// 输入： nums = [-1]
// 输出：[0]
// 示例 3：
// 输入： nums = [-1, -1]
// 输出：[0, 0]

var countSmaller = function(nums) {
    let num = new Array(nums.length).fill(0);
    let i = 0;
    var minSort = function(i, j) {

        if (nums[j] < nums[i]) {
            num[i]++
        }
        if (j < nums.length - 1) {
            j++;
            minSort(i, j)
        } else {
            return
        }
    }
    while (i < nums.length) {
        minSort(i, i + 1);
        i++
    }
    return num
};
console.log(countSmaller([5, 2, 6, 1]));