//Q. 타입스크립트로 묘사하려는 일련의 데이터 모델이 있다.
//A. 유니온 형식과 인터섹션 형식으로 데이터를 모델링하고 특정 변형은 리터럴 형식으로 정의한다.

// ToyBase 와 {players:number} 의 인터섹션
type BoardGame = ToyBase & {
  // name: string;
  // price: number;
  // quantity: number;
  // minimumAge: number;
  players: number;
};

type Puzzle = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  pieces: number;
};

type Doll = ToyBase & {
  material: "plush" | "plastic";
};

// 공통 프로퍼티를 가지는 타입
type ToyBase = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
};

type Toy = Doll | BoardGame | Puzzle;

// ToyBase 타입
function printToy(toy: Toy) {
  console.log(toy);
}

// 에러 없음
const doll: Doll = {
  name: "kim",
  price: 9.99,
  quantity: 10000,
  minimumAge: 2,
  material: "plush",
};

printToy(doll);

type numOrStr = number | string;

function takeNumberOrString(value: numOrStr) {}

takeNumberOrString(2);
takeNumberOrString("2");

//리터럴 형식
type One = 1 | 2;
const one: One = 1;
const one1: One = 2; // 다른 값은 들어갈 수 없음

const dollModel = {
  name: "hi",
  price: 222,
  quantity: 5,
  minimumAge: 2,
  material: "plush",
};

function checkDoll(doll: Doll): Doll {
  if (doll.material === "plush") return doll;
  else return doll;
}

console.log(checkDoll(dollModel));
