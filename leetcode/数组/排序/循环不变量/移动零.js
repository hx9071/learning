// 给定一个数组 nums，编写一个函数将所有 0 
// 移动到数组的末尾，同时保持非零元素的相对顺序。

// 从前往后遍历的会有 0 0 1 这样的特殊情况出现
//从后往前可以避免这个问题
// var charu = function(array) {
//     let brr = array;
//     let length = array.length;
//     for (let i = length - 1; i >= 0; i--) {
//         if (brr[i] == 0) {
//             brr.push(0);
//             brr.splice(i, 1);
//         }
//     }
//     return brr
// }
// 在双指针基础上加判断，slow=fast和slow指向的值不为0时不交换 
// 思路清奇
var moveZeroes = function(array) {
    let brr = array;
    let slow = 0,
        temp = 0,
        fast = 0;
    while (fast < brr.length) {
        while (brr[slow] != 0 && slow < fast) {
            slow++
        }
        if (brr[fast] != 0) {
            temp = brr[fast];
            brr[fast] = brr[slow];
            brr[slow] = temp
        }
        fast++;
    }
    return brr
};
console.log(moveZeroes([0, 1, 0, 3, 12]));