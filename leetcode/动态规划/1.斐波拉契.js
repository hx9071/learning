// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。
function feb(n) {
    if (n <= 1) {
        return n
    };
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    let i;
    for (i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n]
}
console.log(feb(10));
// 使用回溯的解法->对二叉树的遍历