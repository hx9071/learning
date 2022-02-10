/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pre = 0,
        last = nums.length - 1;
    let middel = nums.length >> 1; // 获取中间值 偶数余以2为0 奇数余以2为1
    while (pre <= last) {
        console.log(pre, '上标', last, '下标', nums[middel], middel);
        console.log(nums[middel]);
        if (nums[middel] < target) {
            pre = middel;
            middel = (pre + last) >> 1;
            console.log(pre, '上标', last, '下标', nums[middel], middel);
        }
        if (nums[middel] > target) {
            pre = middel;
            last = nums.length - 1;
            middel = (pre + middel) >> 1;
        }
        if (nums[middel] == target) {
            console.log(nums[middel]);
            return middel;
        }
        return -1;
    }
    console.log('长度', middel, '中间值');
};
searchInsert([1, 2, 4, 5], 5)