//Q. 다른 언어에서 제공하는 void 개념은 이미 알지만, 타입스크립트는 void를 다른 방식으로 취급한다.
//A. void란 콜백을 대체할 수 있는 형식으로 간주한다.

//void는 옆에 등장하는 표현식이 undefined를 반환하도록 평가한다.
let i = void 2; // i == undefined

//정의와 동시에 실행되는 함수를 호출할 때 void를 활용한다.
void function () {
  console.log("hey");
};

// 전역 네임 스페이스를 오염시키지 안흔ㄴ다.
console.log(typeof aRecursion); //undefined
void function aRecursion(i: any) {
  if (i > 0) {
    console.log(i--);
    aRecursion(i);
  }
};

// 값을 반환하지 않고 콜백을 호출하는 함수를 반환가능
function middleware(nextCallback) {
  if (coditionApplies()) {
    return void nextCallback;
  }
}
