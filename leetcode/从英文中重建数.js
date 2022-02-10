/**
 * @param {string} s
 * @return {string}
 */
var number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// z - 0
// w - 2
// u - 4
// g - 8
// x - 6
// e - 0 1 3 5 7 8 9
// r - 0 3 4
// i - 5 6 8 9
// t - 2 3 8
// o - 0 1 2 4
// h - 3 8
// f - 4 5
// s - 6 7
// n - 1 7 9

// z o -0
// t h -3
// s i -6
// s e -7
var originalDigits = function(s) {
    const c = new Map();
    for (const ch of s) {
        c.set(ch, (c.get(ch) || 0) + 1);
    }

    const cnt = new Array(10).fill(0);
    console.log(cnt);
    cnt[0] = c.get('z') || 0;
    cnt[2] = c.get('w') || 0;
    cnt[4] = c.get('u') || 0;
    cnt[6] = c.get('x') || 0;
    cnt[8] = c.get('g') || 0;

    cnt[3] = (c.get('h') || 0) - cnt[8];
    cnt[5] = (c.get('f') || 0) - cnt[4];
    cnt[7] = (c.get('s') || 0) - cnt[6];

    cnt[1] = (c.get('o') || 0) - cnt[0] - cnt[2] - cnt[4];

    cnt[9] = (c.get('i') || 0) - cnt[5] - cnt[6] - cnt[8];
    console.log(cnt);
    const ans = [];
    for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < cnt[i]; ++j) {
            // 0转码后  加上
            ans.push(String.fromCharCode(i + '0'.charCodeAt()));
        }
    }
    return ans.join('');
};
console.log(originalDigits('oneone'));
