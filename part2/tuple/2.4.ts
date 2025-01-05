// Q. 자바스크립트 배열에 데이터를 저장했다. 저장된 위치에 따라 데이터 형식이 정해지므로 저장된 데이터 순서가 바뀌면 안된다. 타입스크립트 형식 추론을 이용하면 원하는 작업을 구현할수 없다.
// A. 튜플 사용
// D. 복잡한 객체에 데이터를 저장할 떄 자ㅏㅂ스킓트 객체와 배열을 자주 사용한다. 기존에는 Person 객체에 자료를 저장했는데 엔트리 항목과 값을 저장하는 방식도 있다.
type Person = [name: string, age: number];
const person: Person = ["kim", 22]; //name과 age

const _person = {
  _name: "kim",
  age: 2,
};

const { _name, age } = _person;
const { _name: anotherName, age: anotherAge } = _person;

console.log(person[0]);
console.log(person[1]);

hello(...person);

function hello(...ars: Person) {
  console.log(...ars);
}
