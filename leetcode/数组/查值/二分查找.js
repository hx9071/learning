var binarysearch = function(array, target) {
    if (array.length == 1) {
        if (array[0] == target) {
            return 0
        }
    }
    let right = array.length - 1;
    let left = 0;
    let mid = array.length % 2 == 0 ? (array.length / 2) : ((array.length + 1) / 2);
    while (left <= right) {
        if (target == array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }
    return -1
};
console.log(binarysearch([-1, 0, 3, 5, 9, 12], 9));