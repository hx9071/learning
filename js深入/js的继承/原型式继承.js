function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
console.log(person1.name, person1.friends); //kevin [ 'daisy', 'kelly' ] {}
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.friends); // kevin

// person2.firends.push('taylor');
// console.log(person2.friends); // ["daisy", "kelly", "taylor"]/