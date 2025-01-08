// Q. 심볼 형식에서 오류메세지가 발생했는데 symbol이란 무엇이며 어떻게 사용하는 걸까
// A. 고유하며 반복할 수없는 객체 프로퍼티에 symbol을 사용한다. symbol은 민감한 정보를 저장하고 접근할 때 유용하다

// 서술자가 같은 심볼과도 겹치지 않음
const TITLE1 = Symbol("title");
const TITLE2 = Symbol("title");

console.log(TITLE1.description);
console.log(TITLE1.toString());
