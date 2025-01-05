var person = ["kim", 22]; //name과 age
var _person = {
    _name: "kim",
    age: 2,
};
var _name = _person._name, age = _person.age;
var anotherName = _person._name, anotherAge = _person.age;
console.log(person[0]);
console.log(person[1]);
hello(person);
function hello(ars) {
    console.log(ars);
}
