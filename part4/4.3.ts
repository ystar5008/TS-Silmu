// 제네릭 형식 매개변수, any와 unkown 모두 아주 넓은 값의 집합을 가리킨다. 언제, 무엇을 사용해야 할까?
// 실제 형식을 얻을 때는 제레닉 형식 매개변수를 사용한다
function identity<T>(value: T): T {
  return value;
}

type TypeIdentity = {
  a: number;
  b: string;
  c: number;
};
let a = identity(1); // a는 number
let b = identity("a"); // b는 string
let c = identity(true); // c는 boolean

// 제네릭 형식 매개변수에 애너테이션 추가
const d = identity<number>(1); // d는 1
const e = identity<string>("a"); // e는 "a"
const f = identity<boolean>(true); // f는 true
const g = identity<TypeIdentity>({
  a: 1,
  b: "a",
  c: 1,
}); // f는 true

const obj9 = identity<TypeIdentity>({
  a: 1,
  b: "a",
  c: 1,
});
console.log(d, e, f, g);

//제네릭 형식 매개변수를 이용하여 튜플형식 만들기
function pairs<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const [fnnumber, fnstring] = pairs<TypeIdentity, number>(obj9, 1); // fn은 [unknown, unknown]
console.log(fnnumber, fnstring);
