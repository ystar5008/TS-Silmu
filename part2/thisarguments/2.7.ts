//Q. this의 형식을 가정한느 콜백함수를 구현해야 하는데 함수를 구현하느 시점에서는 this를 어떻게 정의해야할지 모르겠다
//A. this. 매개변수를 함수 시그니처 시작 부분에 정의한다

const author = {
  name: "kim",
};

function hi() {
  console.log(this.name);
}

// author.hi(); // 이름 출력

const pet = {
  name: "도그",
  kind: "고양이",
};

hi.apply(pet); // "도그" 출력
hi.call(author); // "kim" 출력

const boundHi = hi.bind(author); //
boundHi(); //kim 출력

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hi() {
    console.log(this.name);
  }

  hi_timeout() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  }

  hi_timeout_arrow() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  }
}

const person = new Person("kim");
person.hi(); //kim
person.hi_timeout(); //undefined
person.hi_timeout_arrow(); // kim
