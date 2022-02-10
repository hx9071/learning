var xzArray = function(array) {
        let brr = array;
        for (let i = 0; i < brr.length - 1; i++) {
            let min = i;
            let j;
            for (j = i + 1; j < brr.length; j++) {
                if (array[min] > brr[j]) {
                    min = j
                }
            }
            brr = swap(brr, min, i);
            console.log(i, min);
            // 获取到最小值后 交换两个数组的位置
        }
        return array
    }
    // 从小到大 升序排列  找最小值
var swap = function(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp

    return array
}
console.log(xzArray([4, 6, 3, 5, 1, 3]));