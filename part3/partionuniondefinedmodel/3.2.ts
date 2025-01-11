//Q. 유니온 형식 모델에 중복되는 여러 속성이 있으므로 흐름제어에서 구별하기가 번거롭다.
//A. 각 유니온의 구성요서에 종류를 가리키는 kind 프로퍼티를 문자열 리터럴 형식으로 추가한 후 이문자열 리터럴의 내용을 확인한다.
type Circle = {
  radius: number;
  kind: "circle";
};

type Square = {
  X: number;
  kind: "square";
};

type Triangle = {
  x: number;
  y: number;
  kind: "triangle";
};

type Rectangle = {
  x: number;
  y: number;
};
//Triangle 과 Square 타입은 x 프로퍼티를 공유함
type Shape = Circle | Triangle | Square | Rectangle;

// 세가지 형식은 서로 비슷하지만 area함수는 어려움 없이 구별한다

function area(shape) {
  switch (shape) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "triangle":
      return shape.x * shape.y;
    case "square":
      return shape.x * shape.X;
    default:
      throw Error("not possible");
  }
}
