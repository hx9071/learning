// 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// function nums(arr, target) {
//     let brr = arr.map((x, index) => [index, Math.abs(target - x)]);
//     let maps = new Map(brr);
//     for (var [key, value] of maps) {
//         if (arr.indexOf(value) > 0) {
//             console.log(arr.indexOf(value), value);
//         }

//     }
// }  
const diffs = {}
const twoSum = function(nums, target) {
    // 这里我用对象来模拟 map 的能力

    // 缓存数组长度
    const len = nums.length
        // 遍历数组
    for (let i = 0; i < len; i++) {
        // 因为本题不考虑重复的情况 一边插入当前值的位置 一边判断遍历的值的差值是否插入 
        //   如果发现差值已经插入 如果有对应差值就得到了答案 插入的时候一定没有差值插入对象 所以不用担心
        // 差值相等的情况 这个情况下 两个差值一定是不相等的
        if (diffs[target - nums[i] + ''] !== undefined) {
            // 若有对应差值，那么答案get！
            return [diffs[target - nums[i]], i]
        }
        // 若没有对应差值，则记录当前值
        diffs[nums[i]] = i;

    }
    // console.log(diffs, diffs['5']);
};

//
console.log(twoSum([1, 2, 13, 2, 3, 5], 10)); // 3 4