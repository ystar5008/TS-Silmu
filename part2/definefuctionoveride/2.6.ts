// Q. 함수 API는 매우 유연하며 문맥에 따라 다양한 형식을 갖는 인수를 허용한다. 이를 한 함수 시그니처로 정의하기는 어렵다
// A. 함수 오버로드를 사용한다.

type Callbackfn = () => void;

// 형식 시스템의 형식
function task(name: string, depedencies: string[]): void;
function task(name: string, callback: Callbackfn): void;
function task(name: string, depedencies: string[], callback: Callbackfn): void;

// 실제 구현
function task(
  name: string,
  param2: string[] | Callbackfn,
  param3?: Callbackfn
): void {}

task("what", () => {
  console.log("콜백 두개?"),
    () => {
      console.log("타입은 지원");
    };
});

function fn(input: number): number;
function fn(input: number): number;
function fn(input: number | string): number | string {
  if (typeof input === "number") {
    return "this also work";
  } else {
    return 1338;
  }
}

const typesaysNum = fn(12);
const typeSaysStr = fn("helloworld");

type TaskFn = {
  (name: string, depedencies: string[]): void;
  (name: string, callback: Callbackfn): void;
  (name: string, depedencies: string[], callback: Callbackfn): void;
};

const taskImpl: TaskFn = function (
  name: string,
  param2: string[] | Callbackfn,
  param3?: Callbackfn
): void {
  if (Array.isArray(param2)) {
    // dependencies 배열이 전달된 경우
    if (param3) {
      // callback도 함께 전달된 경우
      console.log(`Task ${name} with deps and callback`);
    } else {
      // dependencies만 전달된 경우
      console.log(`Task ${name} with deps only`);
    }
  } else {
    // callback만 전달된 경우
    console.log(`Task ${name} with callback only`);
    param2();
  }
};
