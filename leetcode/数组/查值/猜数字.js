const pick = 6;
var guessNumber = function(n) {
    if (pick == n) {
        return 0
    }
    if (pick < n) {
        return -1
    }
    if (pick > n) {
        return 1
    }
};
/**
 * 
 * @param {*} n 边界值
 */
var caishu = function(n) {
    let picks = 0;
    let left = n;
    let right = 0;
    let mid = 0;
    if (pick > n) {
        return pick
    }
    while (picks <= n) {
        if (guessNumber(picks) == 0) {
            return picks
        } else if (guessNumber(picks) < 0) {
            left = picks - 1;

        } else {
            right = picks + 1;
        }
        mid = Math.floor((left + right) / 2)
        picks++;
    }
    return 0;
}

console.log(caishu(10));