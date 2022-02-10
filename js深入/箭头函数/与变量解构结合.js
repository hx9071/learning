let json = '{"a":"hello","b":"world"}'
let { a, b } = JSON.parse(json)
console.log(a, b) //  hello world
let [a, b, c, d, e] = "abcde"
console.log(a, b, c, d, e) // a b c d e