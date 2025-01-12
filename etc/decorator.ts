// 데코레이터의 실행 순서
// 데코레이터는 아래 순서로 실행됩니다:

// 속성 데코레이터 → 매개변수 데코레이터
// 메서드 데코레이터
// 접근자 데코레이터
// 클래스 데코레이터

// 클래스 데코레이터
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person7 {
  name = "John";

  constructor() {
    console.log("Creating a new person...");
  }
}

// 메서드 데코레이터
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));

//접근자 데코레이터
function LogAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor: ${propertyKey}`);
}

class Person6 {
  private _name: string = "";

  @LogAccessor
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

//속성 데코레이터
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property: ${propertyKey}`);
}

class Product {
  @LogProperty
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

//매개 변수 데코레이터
function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Parameter in ${propertyKey} at index ${parameterIndex}`);
}

class Person8 {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}

// 데코레이터 팩토리
function LoggerWithPrefix(prefix: string) {
  return function (constructor: Function) {
    console.log(`${prefix} - Logging...`);
  };
}

@LoggerWithPrefix("CustomPrefix")
class Animal {
  constructor() {
    console.log("Animal created");
  }
}
