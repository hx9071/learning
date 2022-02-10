// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 分成两个区间
// 从右到左寻找最小值 左边的指针一直往右边走
var getMin = function(array, target) {
        let left = 0;
        let right = array.length - 1;
        let mid = 0;
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (array[mid] < target) { //
                left = mid + 1;
            } else {
                right = mid
            }
            if (array[left] == target) {
                return left

            }
        }
        // return mid
    }
    // 右边的指针向左边走  
var getMax = function(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid = 0;
    while (left < right) {
        mid = Math.ceil((left + right) / 2);
        if (array[mid] > target) {
            right = mid - 1
        } else {
            left = mid
        }
        if (array[right] == target) {
            return right
        }
    }
    return mid
}
var getTargeArray = function(array, target) {
    let res = [-1, -1];
    if (array.length == 0) {
        return res;
    }
    let min = getMin(array, target);
    let max = getMax(array, target);
    res[0] = min;
    // res[1] = max
    return res
}
console.log(getTargeArray([7, 7, 7, 7, 8, 10], 7));