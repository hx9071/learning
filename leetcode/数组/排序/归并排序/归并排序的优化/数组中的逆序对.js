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
    let length = nums.length - 1;
    let sum = 0;

    function sort(index) {
        let xiabiao = index;
        if (index == length + 1) {
            return
        }
        for (let i = index + 1; i < nums.length; i++) {
            if (nums[index] > nums[i]) {
                sum++;
            }
        }
        xiabiao++;
        sort(xiabiao)
    }
    sort(0);
    // return sum
    console.log(sum);
};
reversePairs([7, 5, 6, 4])