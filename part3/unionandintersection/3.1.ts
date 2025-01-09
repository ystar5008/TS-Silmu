//Q. 타입스크립트로 묘사하려는 일련의 데이터 모델이 있다.
//A. 유니온 형식과 인터섹션 형식으로 데이터를 모델링하고 특정 변형은 리터럴 형식으로 정의한다.

type BoardGame = {
  name: string;
  price: number;
  quantity: number;
  minimymAge: number;
  players: number;
};

type Puzzle = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  pieces: number;
};

type Doll = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
  material: string;
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
