//Q. 타입스크립트에서는 객체형시을 인터페이스와 형식 별칭 두가지 방식 중하나로 선언한다. 어떤 방식 사용?
//A. 프로젝트의 경계 내에서는 형식 별칭을 사용하고 다른 누군가가 소비해야할 형식에는 인터페이스를 사용한다.
//D. 현재는 두 방식 차이가 없다 , 인터페이스는 선언합치기를 지원하지만 형식 별칭은 지원하지 않는다.
type PersonType = {
  name: string;
  age: number;
  address: string[];
  greet(): string | undefined;
};

interface PersonAsInterface {
  name: string;
  age: number;
  address: string[];
  greet(): string | undefined;
}

interface PersonAsInterface {
  phone?: number;
}

function logType<T>(input: T): void {
  console.log("TypeScript type:", input);
}

const person2: PersonAsInterface = {
  name: "John",
  age: 30,
  address: ["123 Main St"],
  greet: () => "Hello!",
};

logType<PersonAsInterface>(person2);
