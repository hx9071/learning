// 真题描述：给你两个有序整数数组 nums1 和 nums2，
// 请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
function add(arr, brr) {
    let sum = new Array(arr.length + brr.length);
    let b = 0;
    let a = 0;
    let avalue;
    let bvalue;
    let length = arr.length > brr.length ? arr.length : brr.length;

    for (let i = 0; i  < length; i++) {
        avalue = arr[a];
        bvalue = brr[b];
        if (avalue) {

        }
        if (arr[a] < brr[b]) {
            sum[i] = arr[a];
            b = b + 1;
        }
        if (arr[a] > brr[b]) {
            sum[i] = b;
            a = a + 1;
        }
        if (arr[a] == brr[b]) {
            a = a + 1;
            b = b + 1;
        }
    }
}