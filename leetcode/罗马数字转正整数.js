var romanToInt = function(s) {
    let val = s.split('');
    let mapss = maps();
    let num = 0;
    for (let i = 0; i < val.length;) {
        if (i + 1 < val.length && mapss.has(s.substring(i, i + 2))) {
            num = num + mapss.get(s.substring(i, i + 2));
            i = i + 2;
        } else {
            num = num + mapss.get(s.substring(i, i + 1));
            i = i + 1;
        }
    }
    console.log(num, '结果');
    return num
};

var maps = function() {
    let map = new Map();
    map.set('I', 1);
    map.set('IV', 4);
    map.set('V', 5);
    map.set('IX', 9);
    map.set('X', 10);
    map.set('XL', 40);
    map.set('XC', 90);
    map.set('L', 50);
    map.set('C', 100);
    map.set('CD', 400);
    map.set('CM', 900);
    map.set('D', 500);
    map.set('M', 1000);
    return map;
}
romanToInt("IV")