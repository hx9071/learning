function Parent() {
    this.name = ['kevin'];
}
Parent.prototype.getName = function() {
    console.log(this.name);
}

function Child() {

}
Child.prototype = new Parent();
var child1 = new Child();
child1.getName()
child1.name.push('向引用增加属性')
child1.getName()
var child2 = new Child();
child2.getName()