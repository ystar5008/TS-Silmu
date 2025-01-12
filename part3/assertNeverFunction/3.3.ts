//Q. 시간이 지나면서 유니온 형식에 새 구성요소를 추가하는 상황이 발생했다. 관련된 부분을 모든 코드에서 고쳐야 한다.
//A. assertNever 함수로 모든 남은 케이스에 어서션을 적용해 모든 상황을 확인하도록 완전검사를 수행한다.

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
  kind: "rectangle";
};

type Shape = Circle | Square | Triangle | Rectangle;

function area(shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "triangle":
      return shape.x * shape.y;
    case "square":
      return shape.x * shape.X;
    case "rectangle":
      return shape.x * shape.y;
    default:
      // Rectangle 형식인수는 never 형식의 매개변수에 할당 될 수 없습니다.
      assertNever(shape);
  }
}

function assertNever(value: never) {
  console.error("Unkonw value", value);
  throw Error("Not possible");
}
