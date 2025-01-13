//Q. 구별된 유니온 형식 모델에 객체 리터럴을 할당할 수 없다.
//A. 형식 어서션과  const 컨텐스트로 리터럴 형식을 고정한다.
let firstname = "kim"; // name은 문자열
const firstname2 = "kim"; // name은 kim

// person8은 {name : sring}
let person8 = { name: "kim" };

const person9 = { name: "kim" };

person9.name = "kimmm"; // 재할당 가능

//정확한 형식 애너테이션
const circle: Circle = {
  radius: 2,
  kind: "circle",
};

area(circle);

// 넓힌 집합
// type Shape = Circle | Square | Triangle | Rectangle;
const circle2: Shape = {
  radius: 2,
  kind: "circle",
};

//형식 어서션
const circle3 = {
  radius: 2,
  kind: "circle",
} as Circle;

// as const 형식 어서션, const 컨텐스를 이용해 정확한 값을 특정함
// const 컨텍스트를 전체에 적용하면 객체는 읽기전용이되므로 변경불가
const circle4 = {
  radius: 2,
  kind: "circle" as "circle",
};

area(circle4);

// Type '\"rectangle\"' is not assignable to type '\"circle\"'
circle4.kind = "rectangle";
