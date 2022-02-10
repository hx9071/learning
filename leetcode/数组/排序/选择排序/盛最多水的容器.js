// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器。
//找出数组中的最大值和距离最远的第二个大的值 两边向中间查值
var waterBox = function(array) {
    let len = array.length;
    let left = 0;
    let right = len - 1;
    let max = 0;
    while (left < right) {
        let min = Math.min(array[left], array[right]);
        max = Math.max(min * (right - left), max);
        if (array[left] > array[right]) {
            right--
        } else if (array[left] < array[right]) {
            left++
        } else {
            left++;
            right--
        }

    }
    return max
}
console.log(waterBox([1, 8, 6, 2, 5, 4, 8, 3, 7]));