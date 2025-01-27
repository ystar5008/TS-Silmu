// 타입스크립트 열거형 enum은 훌륭하게 추상화를 제공한다. 하지만 열거형은 다른 형식 시스템과 다르게 동작하는것 같다.
// 열거형보다는 cosnt 열거형을 사용한다.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 형식으로 사용

//값으로 사용
//move(Direction2.Up);

// var Direction;
// (function (Direction: any) {
//   Direction[(Direction["Up"] = 0)] = "Up";
//   Direction[(Direction["Down"] = 1)] = "Down";
//   Direction[(Direction["Left"] = 2)] = "Left";
//   Direction[(Direction["Right"] = 3)] = "Right";
// })(Direction || (Direction = {}));

const enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

const enum Direction3 {
  Up = 1,
  Down, //2
  Left, //3
  Right = 6,
}

type Direction4 = 0 | 1 | 2 | 3;

function move(diretion: Direction4) {
  console.log(diretion);
}

move(Direction2.Up); //0
move(0); //0

// 숫자 열거형은 숫자 유니온 형식과 같은 집합을 정의한다.

// 유니온형식은 오직 정의된 숫자만 허용하지만 숫자 열거형은 모든 값을 핟당하도록 허용한다. +

enum Traits {
  None, // 0000
  Friendly = 1, // 0001 또는 1<<0
  Mean = 1 << 1, // 0010
  Funny = 1 << 2, // 0100
  Boring = 1 << 3, // 1000
}

//(0010 | 0100) = 0110
let aPersonsTraits = Traits.Funny | Traits.Mean;
console.log(aPersonsTraits);

enum Status {
  Admin = "Admin",
  User = "User",
  Moderator = "Moderator",
}

function closeThread(threadId: number, status: Status | Status2) {}
closeThread(1, "Admin"); // 오류
closeThread(1, Status.Admin);

enum Roles {
  Admin = "Admin",
  User = "User",
  Moderator = "Moderator",
}

closeThread(1, Roles.Admin); // 오류 "Admin"은 "Roles"에 할당될 수 없습니다.

type Status2 = "Admin" | "User" | "Moderator";

const Direction5 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // Direction5 객체를 상수로 선언하여 각 방향에 숫자 값을 할당

// Direction5의 상숫값 얻기
type Direction5 = (typeof Direction5)[keyof typeof Direction5];
// Direction5 객체의 값 타입을 추출하여 Direction5 타입으로 정의

//(typeof Deirection5)[keyof typeof Direction5]는 Direction5 객체의 값 타입을 추출한다.
//keyof typeof Direction5는 Direction5 객체의 키를 추출한다.

function move2(direction: Direction5) {}

move2(30); // 오류
