// 寻找旋转排序数组中的最小值
// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。
// 例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组
//  [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，
// 并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
var revolveArr = function(nums) {
    let right = 0;
    let left = nums.length - 1
    let mid = 0;
    let start = nums[0] > nums[left] ? left : right;
    min = nums[start];
    function sort(index){
        if(index== nums.length){
            return
        }
        if(nums[0] > nums[nums.length - 1]){ // 左边有最小值 从左边开始遍历

        }else{ // 右边有最小值 从右边开始遍历

        }
    }
    return min
}
console.log(revolveArr(
    [5, 1, 2, 3, 4]
));