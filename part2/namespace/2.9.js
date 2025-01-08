function printCollection(coll) {
    console.log.apply(console, coll.entries());
}
var person4 = {
    name: "kim",
};
var Person5 = /** @class */ (function () {
    function Person5(n) {
        this.name = n;
    }
    return Person5;
}());
var person5 = new Person5("kim");
function printPersons(coll) {
    console.log(coll);
}
printPersons([{ name: "kim" }]);
