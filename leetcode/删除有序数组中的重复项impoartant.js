// var removeDuplicates = function(nums) {
//     if (!nums.length) {
//         return 0;
//     }
//     let strs = '';
//     let i = 0;
//     // 不使用额外的数组空间
//     while (i < nums.length) {
//         let str = nums.join();
//         if (strs.indexOf(nums[i])) {
//             strs = strs + nums[i];
//         }
//         i++;
//     }
//     return strs.split('')
// };
var removeDuplicates = function(nums) {
    let R = 0,
        L = 0;
    let news = [];
    while (R < nums.length) {
        if (nums[R] != nums[L]) {
            L++;
            nums[L] = nums[R]
        }
        R++
    }

    return L + 1
};

console.log(removeDuplicates([1, 1, 2]));