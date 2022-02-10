var quiklySort = function(nums) {
    let index = 0;
    let arr = JSON.parse(JSON.stringify(nums)),
        brr = []

    function sort(index) {
        let lessthan = [],
            morethan = [];
        if (index == nums.length) {
            return
        } else {
            let mid = []
            for (let i = 0; i < brr.length; i++) {
                if (arr[index] < brr[i]) {
                    morethan.push(brr[i])
                } else if (arr[index] > brr[i]) {
                    lessthan.push(brr[i])
                }
            }
            brr = [];
            mid.push(arr[index]);
            brr = lessthan.concat(mid, morethan);
            index++;
            // console.log(mid, arr, '数组', brr);
            sort(index);
        }
    }
    sort(index);
    return brr
}
console.log(quiklySort([3, 2, 3, 1, 2, 4, 5, 5, 6]));