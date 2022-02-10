function Test1() {
    var hashArr = {},
        tempArr = []; //hashArr为hash表，tempArr为临时数组
    var arr = [1, 3, 2, 3, 5, 4, 2, 7];
    var d11 = new Date();
    var st = d11.getTime();
    for (var j = 0; j < 1000000; j++) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (!hashArr[arr[i]]) {
                hashArr[arr[i]] = true;
                tempArr.push(this[i]);
            }
        }
    }
    var d12 = new Date();
    var et = d12.getTime();
    console.log("Test1 Length:" + tempArr.length + "  And Time:" + (et - st) / 1000);
}
Test1()