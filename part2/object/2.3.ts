// Q. 자바스크립트 객체를 값으로 사용하려 한다. 자바스크립트 객체는 object, Obecjt, {} 라는 세가지 다른 객체형식으로 표현할 수 있다. 어떤형식 사용?
// A. 객체, 함수 ,배열 같은 복합 형식에는 object를 사용한다. 그 밖의 값은 {}로 표현한다.
// D. 타입스크립트는 형식을 두가지로 분류한다. number , boolean ,s tring symbol , bigint와 그 하위 형식을 포함하는 기본형식이다
// 두번째는 객체의 하위형식과 다른 복합형식이나 기본형식을 합성한 복합형식이다.

let obj: {}; // Object와 비슷함
obj = 32;
obj = "hello";
obj = true;
obj = () => {
  console.log("hello");
};
obj = undefined; // 오류
obj = null; // 오류
obj = { name: 2, age: 2 };
obj = [];
obj = /.*/;
