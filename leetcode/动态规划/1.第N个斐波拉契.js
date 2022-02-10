// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
function feb(n) {
    if (n <= 1) {
        return n
    };
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    let i;
    for (i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n]
}
console.log(feb(10));