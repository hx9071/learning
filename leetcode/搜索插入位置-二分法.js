// 使用时间复杂度为o(log n)的算法4
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    console.log((right - left) >> 1, 'right - left) >> 1');
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};
console.log(searchInsert([1, 2, 3, 5, 6], 5));