// API는 모든 문자열을 전달할 수 있어야 하는데 그중에서도 몇가지 문자열값을 자동완성으로 보여주려한다.
// 문자열 리터럴 유니온 형식에 string & {}를 사용하여 문자열 리터럴 유니온 타입을 만들어보자.

type Entry = {
  // 개발중
};

type ContentType = "post" | "page" | "asset" | (string & {});
function retrieve(contentType: ContentType): Entry[] {
  // 개방중
}

retrieve("post");
