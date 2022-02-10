function indexOf(arr, target, start, end) {
    start = start || 0;
    end = end || arr.length - 1;
    // let mid = Math.floor((start + end) / 2);
    let mid = (start + end) >> 1;
    console.log(start, end);
    while (start <= end) {
        console.log(start, end, target, arr[mid]);
        if (target > arr[mid]) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else if (target < arr[mid]) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        } else {
            return mid;
        }
    }
    console.log(start, end);
    return -1;
}
let a = [0, 1, 2, 3, 4, 5, 6, 434, 435];
console.log(indexOf(a, 5), 'res'); //打印结果为5