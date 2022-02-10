// 合并两个有序数组 方法2
/**
 * 
 * @param {*} nums1 数组1
 * @param {*} m  数组1的长度
 * @param {*} nums2  数组2
 * @param {*} n  数组2的长度
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
    return nums1
};
console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));