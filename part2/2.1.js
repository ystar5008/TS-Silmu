var me = createPerson();
function createPerson() {
    return { name: "kim", age: 22 };
}
function printPerson(person) {
    console.log(person.name, person.age);
}
printPerson(me);
