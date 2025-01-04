type Person1 = {
  name: string;
  age: number;
};

type User = {
  name: string;
  age: number;
  id: number;
};

/**
 *  @param {Person1} person - 타입은 Person1
 *  @returns {void}
 */

function printPerson(person: Person1) {
  console.log(person.name, person.age);
}

const user: User = {
  name: "kim",
  age: 43,
  id: 222,
};

// user 객체를 대입해도 에러 발생x
printPerson(user);
