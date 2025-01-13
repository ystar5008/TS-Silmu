//Q "어떤조건에따라 값을 기존에 할당한 것 보다 좁은 형식으로 특정하고 싶지만, 타입스크립트가 이를 지원하지 안흔다"
//A. 형식 찬반 형을 헬퍼 함수의 시그니처에 추가해서 형식 시스텀의 Boolean 조건의 효과를 이용한다.
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(input: number) {
  if (isDice(input)) {
  } else {
  }
}

//헬퍼 함수 작성
function isDice(value: number): value is Dice {
  return [1, 2, 3, 4, 5, 6].includes(value);
}
