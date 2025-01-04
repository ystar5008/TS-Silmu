// Q. any와 unknown 형식 중 무엇을 사용해야할까?
// A. 형식 기능을 끄고 싶은 상황에서 any를 사용하며 주의가 필요할 때 unknown을 사용함
// D. any와 unknown 모두 최상위 형식이므로 모든 값은 any나 unknown과 호환된다
const _name: any = "kim";
const person: any = { name: "kim", age: 20 };
const notAvailable: any = undefined;

const me: any = "kim";
// __name 변수에 me 할당
const __name: string = me;
// me 변수는 string이지만 age 변수에도 할당 가능
// any는 허용성이 너무 좋아 형심 검사를 무력화하므로 잠재적 오류와 문제를 일으킬수있다.
const age: number = me;
console.log(age);

type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  for (let key in person) {
    console.log(`${key} : ${person[key as keyof Person]}`);
  }
}

printPerson({ name: "kim", age: 22 });
