// 合并两个有序数组
/**
 * 
 * @param {*} nums1 数组1
 * @param {*} m  数组1的长度
 * @param {*} nums2  数组2
 * @param {*} n  数组2的长度
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0,
        p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) { //如果num1遍历完成 开始遍历数组2
            cur = nums2[p2++];
        } else if (p2 === n) { // 如果num2遍历完成 开始遍历数组1
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) { // 数组1的值比数组2的值小 就获取当前值 后面一个的值
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    return sorted
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));