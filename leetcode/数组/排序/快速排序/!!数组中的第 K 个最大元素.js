// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 第K个最大的元素 序号是len-K
var partition = function(nums, left, right) {
    let pivot = nums[left];
    let j = left;
    for (let i = left + 1; i <= right; i++) {
        if (nums[i] < pivot) {
            swap(nums, j, i);
        }
    }
    swap(nums, j, left);
    return j;
}
var swap = function(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
var quiklySort = function(nums, k) {
    let len = nums.length,
        left = 0,
        right = nums.length - 1;
    let target = len - k
    while (true) {
        let index = partition(nums, left, right);
        if (index == target) {
            console.log(nums);
            return nums[index]
        } else if (index < target) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

}
console.log(quiklySort([3, 2, 3, 1, 2, 4, 5, 5, 6], 2));