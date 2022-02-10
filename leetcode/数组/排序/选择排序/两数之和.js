// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
var sumres = function(array, target) {
    let maps = new Map();
    let num = [-1, -1]
    for (let i = 0; i < array.length; i++) {
        let chazhi = target - array[i];
        if (maps.has(array[i])) {
            num = [maps.get(array[i]), i]
            break
        }
        maps.set(chazhi, i);
    }
    return num
}
console.log(sumres([1, 5, 4, 3, 6], 4));