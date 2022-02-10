// var removeElement = function(nums, val) {
//     let left = 0,
//         right = nums.length;
//     while (left < right) {
//         if (nums[left] == val) {
//             nums[left] = nums[right - 1];
//             right--;
//         } else {
//             left++;
//         }

//     }
//     return left;
// };
var removeElement = function(nums, val) {
    let i = 0,
        length = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[length++] = nums[i]
        }
    }
    console.log(nums);
    return length;
};
console.log(removeElement([3, 2, 2, 3]), 3);