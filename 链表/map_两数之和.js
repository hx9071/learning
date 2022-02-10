// 给一个正整数数组，和一个整数目标值，在该数组中找出相加为目标值的两个值 并找出它们的数组下标
const nums = [2, 7, 11, 15, 6, 3];
const target = 9;
var twoSum = function(nums, target) {
    let arr = [];
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let chazhi = target - nums[i];
        if (map.has(chazhi)) {
            console.log([map.get(chazhi), i]);
        } else {
            map.set(nums[i], i)
        }
    }

};
// console.log([map.get(chazhi), i]);
twoSum(nums, target);