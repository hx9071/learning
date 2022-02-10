/**
 * 
 * @param {Array} nums 
 */
function merageSort(nums) {
    if (nums.length > 1) {
        let c = nums.length >> 1
        let left = merageSort(nums.slice(0, c));
        let right = merageSort(nums.slice(c));
        let res = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                res.push(left.shift())
            } else {
                res.push(right.shift())
            }
        }
        return res.concat(right, left)
    }
    return nums
}

console.log('object :>> ', merageSort([5, 2, 1, 6, 4]));