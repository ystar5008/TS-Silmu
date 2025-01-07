//Q. this의 형식을 가정한느 콜백함수를 구현해야 하는데 함수를 구현하느 시점에서는 this를 어떻게 정의해야할지 모르겠다
//A. this. 매개변수를 함수 시그니처 시작 부분에 정의한다
var author = {
    name: "kim",
};
function hi() {
    console.log(this.name);
}
// author.hi(); // 이름 출력
var pet = {
    name: "도그",
    kind: "고양이",
};
hi.apply(pet); // "도그" 출력
hi.call(author); // "kim" 출력
