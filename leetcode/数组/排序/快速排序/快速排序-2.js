// 从左到右开始遍历 
var swap = function(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
var quiklySort = function(nums, k) {
    let len = nums.length,
        left = 0,
        right = nums.length - 1;
    let arr = JSON.parse(JSON.stringify(nums));

    var partition = function(nums, left, right) {
        let pivot = nums[left];
        let j = left;
        for (let i = left; i <= right; i++) {
            if (nums[i] < pivot) {
                swap(nums, j, i);
                j++
                // j 的初值为 left，先右移，再交换，小于 pivot 的元素都被交换到前面
            }

        }
        // 在之前遍历的过程中，满足 nums[left + 1..j] < pivot，并且 nums(j..i) >= pivot 
        // 交换
        swap(nums, j, left);
        console.log(nums, pivot);
        // 交换以后 nums[left..j - 1] < pivot, nums[j] = pivot, nums[j + 1..right] >= pivot
        return nums;
    }
    while (left < right) {
        nums = partition(nums, left, right);
        left++;
    }

    return nums
}
console.log(quiklySort([9, 7, 4, 1, 2, 4, 5, 8, 11]));