// 빠진 프로터피와 undefined 값은 서로 다른 문제다 => 어떻게 구분?
type Settings = {
  language: "en" | "de" | "fr";
  // 선택
  theme?: "dracula" | "monokai" | "github";
};

const obj2: Settings = {
  language: "en",
  //theme: "dracula",
};

console.log(obj2);

function applySettings(setting: Settings) {
  // theme은 "dracula" | "monokai" | "github" | undefined
  //const theme = setting?.theme;
  const theme = setting?.theme;
  console.log(theme);
}

applySettings(obj2);

// Settings 타입의 객체를 받아서 theme 값을 반환하는 함수
// theme이 없거나 undefined인 경우 "default" 문자열을 반환
// ?? 연산자를 사용하여 null 또는 undefined일 때 기본값 처리
function getTheme(setting: Settings) {
  return setting.theme ?? "default";
}

const settings: Settings = {
  language: "de",
};

const settingsUndefined: Settings = {
  language: "de",
  theme: undefined,
};

console.log(getTheme(settings)); // default
console.log(getTheme(settingsUndefined)); //undefined

type Fn2 = typeof getTheme;
// type Fn = (settings: Settings
// => "draclua" | "monokai" | "github" | "default" | undefined
