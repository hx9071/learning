// 练习：旋转数组
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 示例 1:
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
var revolveArr = function(nums, k) {
    let length = nums.length;
    let newArr = new Array(length).fill(0);
    let xiabiao;
    for (let i = 0; i < length; i++) {
        if (k + i < length) {
            xiabiao = k + i;
        } else {
            xiabiao = k + i - length;
        }
        newArr[xiabiao] = nums[i]
    }
    return newArr
}
console.log(revolveArr([1, 2, 3, 4, 5, 6, 7], 3));