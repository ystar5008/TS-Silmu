// gudtlr dosjxpdltus
type Collection = Person[];

function printCollection(coll: Collection) {
  console.log(...coll.entries());
}

const person4 = {
  name: "kim",
};

type Person4 = typeof person4;

class Person5 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const person5 = new Person5("kim");

type Collection2 = Person5[];

function printPersons(coll: Collection2) {
  console.log(coll);
}

printPersons(new Person5("kim"));
printPersons([{ name: "kim" }]);

function checkPerson(person: Person5) {
  return person instanceof Person5;
}

checkPerson(new Person5("kim")); // true
checkPerson({ name: "kim" }); // false
