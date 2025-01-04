type Person = {
  name: string;
  age: number;
};

const me: Person = createPerson();

function createPerson(): Person {
  return { name: "kim", age: 22 };
}

function printPerson(person: Person) {
  console.log(person.name, person.age);
}

printPerson(me);
