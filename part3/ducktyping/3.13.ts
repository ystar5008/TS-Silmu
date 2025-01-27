class Balance {
  //private으로 두 클래스를 구분함
  private _nominal: void = undefined;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

class AccountNumber {
  private _nominal: void = undefined;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

const balance = new Balance(12345565);
const accountNumber = new AccountNumber(12345565);

function accptBalance(balance: Balance) {
  console.log(balance.value);
}
console.log(accptBalance(balance));
//accptBalance(accountNumber); // 에러 발생 ''AccountNumber' 형식의 인수는 'Balance' 형식의 매개 변수에 할당될 수 없습니다.

// Credits 타입은 number와 결합된 타입으로, _kind 속성을 "credits"로 가집니다.
type Credits = number & {
  _kind: "credits";
};

// AccountNumber2 타입은 number와 결합된 타입으로, _kind 속성을 "accountNumber"로 가집니다.
type AccountNumber2 = number & { _kind: "accountNumber" };

// account 변수는 AccountNumber2 타입으로 12345678 값을 가집니다.
const account = 12345678 as AccountNumber2;

// balance2 변수는 Credits 타입으로 10000 값을 가집니다.
let balance2 = 10000 as Credits;

// amount 변수는 Credits 타입으로 3000 값을 가집니다.
const amount = 3000 as Credits;

// increase 함수는 balance와 amount를 더한 값을 Credits 타입으로 반환합니다.
function increase(balance: Credits, amount: Credits) {
  console.log(balance);
  console.log(amount);
  if (balance._kind !== "credits" || amount._kind !== "credits") {
  }
  console.log("여기");
  return (balance + amount) as Credits;
}

// balance2에 amount를 더한 값을 다시 balance2에 할당합니다.
balance2 = increase(balance2, amount);
// account는 Credits 타입이 아니므로, 이 줄은 타입 오류를 발생시킵니다.
//balance2 = increase(balance2, account);

const result = balance2 + amount;
const credits = (balance2 + amount) as Credits;
