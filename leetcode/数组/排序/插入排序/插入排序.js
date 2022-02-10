// 第 1种插入的方式是：1 应该放置在下标为 0 的位置，通过和它前面的那些元素依次交换，
// 最终 1 被交换到下标为 0 的位置，然后前 4 个数字有序。

// 第 2 种插入的方式是：先将 2 赋值给一个临时的变量，然后将 2 之前比 2
//  严格大的所有元素从后向前依次赋值，最后一定会空出 1个位置出来，这个空出来的位置就是 2
//   应该放置的位置，我们将 2 赋值回去。

var charu = function(array) {
        let min = 0;
        let brr = array;
        for (let i = 0; i < brr.length; i++) {
            min = i;
            for (let j = i + 1; j < brr.length; j++) {
                if (brr[j] < brr[i]) {
                    min = j;
                }
            }
            brr = jiaohuan(brr, i, min)
        }
        return brr
    }
    /**
     * @param {*} i 数组插入的位置
     * @param {*} j 被插入的值的index
     */
var jiaohuan = function(array, i, j) {
    let temp = array[i];
    let temp1 = array[j]
    array.splice(j, 1, temp);
    array.splice(i, 1, temp1);
    return array;
}
console.log(charu([2, 1, 3, 5, 4]));






//方法一
// var charu = function(array) {
//     let min = 0;
//     let brr = array
//     for (let i = 0; i < brr.length; i++) {
//         min = i;
//         for (let j = i + 1; j < brr.length; j++) {
//             if (brr[j] < brr[i]) {
//                 min = j;
//             }
//         }
//         brr = jiaohuan(brr, i, min)
//     }
//     return brr
// }
// var jiaohuan = function(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     return array
// // }
// console.log(charu([2, 1, 3, 5, 4]));