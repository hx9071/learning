// map数据结构类似于对象，是键值对的集合，传统的键只能是字符串，map的键不限于字符串，各种类型的值都可以 

// c创建一个map的对象
// class Map{

// }
let map = new Map();
map.set('id', 10001);
console.log(map.get('name'));
map.set('name', 'html');

// 根据key获取value
console.log(map, map.size);

console.log(map.has('name'));

console.log(map.keys(), map.values(), '-------'); // 不是数组 伪数组

// 遍历
for (const iterator of map) {
    console.log(iterator, 'iterator');
}

for (let key of map) {
    console.log(key, 'key');
}

for (let key of map.keys()) {
    console.log(key, 'key');
}

for (let key of map.values()) {
    console.log(key, 'map.values()');
}

map.forEach((value, key) => {
    console.log(key, 'value', value);
});

console.log(map.entries());
for (let item of map.entries()) {
    console.log(item, 'item-entries');
}

const num = [1, 2, 3];
const map1 = new Map();
num.forEach((value, index) => {
    map1.set(value, index)
});
console.log("map1", map1);
const arr = Array.from(map1.keys());
console.log(arr);