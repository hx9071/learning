// 练习：数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组，求出这个数组中的逆序对的总数。
// 示例 1:
// 输入: [7,5,6,4]
// 输出: 5
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let sum = 0,
        mid = Math.floor((nums.length) / 2),
        arr1 = nums.slice(0, mid),
        arr2 = nums.slice(mid, nums.length);
    let i = 0,
        j = 0;

};
console.log(reversePairs([7, 5, 3, 6, 4]));