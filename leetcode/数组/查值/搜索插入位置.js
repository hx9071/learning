// ：搜索插入位置
// 分析：这道题要求我们在一个有序数组里查找插入元素的位置
// 示例 1：目标元素 55 在有序数组 [1, 3, 5, 6][1,3,5,6] 里，下标为 22，输出 22；
// 示例 2：目标元素 22 不在有序数组 [1, 3, 5, 6][1,3,5,6] 里，返回 33 
// 的下标 11 ，我们可以知道，如果数组中不存在目标元素，返回第 1 个严格大于目标元素的数值的下标；
// 示例 3：目标元素 77 不在有序数组 [1, 3, 5, 6][1,3,5,6] 里。特别地，
// 77 比最后一个元素 66 还大，返回最后一个元素的下标 +1+1；
// 示例 4：目标元素 00 不在有序数组 [1, 3, 5, 6][1,3,5,6] 里。特别地，00 比第
// 一个元素 11 还小，返回第 1 个元素的下标 00。
// 由上面 4 个示例，知道题目要我们找的是 大于等于目标元素的第 1 个下标。

var binarryserach = function(array, target) {
    let right = array.length - 1;
    let left = 0;
    let mid;
    if (array.length == 0) {
        return 0;
    }

    if (array[right] < target) {
        return array.length;
    }
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return 0
}
console.log(binarryserach([1, 3, 5, 6], 5));