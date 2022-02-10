function xunhuan(max) {
    let i = 1;
    let res = 0
    while (i <= max) {
        if (i % 3 == 0) {
            res = i + res
        }
        i++;

    }
    return res
}
console.log(xunhuan(200));