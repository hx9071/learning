function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = new Parent();
var child1 = new Child('kevin', '18');
console.log(child1);
// child1.colors.push('新增')

// // Parent {
// //     name: 'kevin',
// //     colors: [ 'red', 'blue', 'green', '新增' ],
// //     age: '18'
// //   }
// var child2 = new Child();
// console.log(child2);
// //Parent {
// //     name: undefined,
// //     colors: [ 'red', 'blue', 'green' ],
// //     age: undefined
// //   }