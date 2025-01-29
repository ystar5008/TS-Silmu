// 같은 기능을 수행하지만 서로다른 형식을 취급하는 두함수
// 제네릭으로 동작을 일반화

// 자막파일 언어형식 타입
type Languages = {
  de: URL;
  en: URL;
  pt: URL;
  es: URL;
  fr: URL;
  ja: URL;
};

// 주어진 언어가 Languages 타입의 컬렉션에 존재하는지 확인하는 함수
function isLanguageAvailable(
  collection: Languages, // Languages 타입의 객체
  lang: string // 확인할 언어 문자열
): lang is keyof Languages {
  // lang이 Languages 타입의 키인지 여부를 반환
  // de, en, pt, es, fr, ja 중 하나인지 확인
  console.log(lang in collection);
  return lang in collection; // lang이 collection 객체의 키 중 하나인지 확인
}

function loadLanguage(collection: Languages, lang: string) {
  if (isLanguageAvailable(collection, lang)) {
    return collection[lang];
  }
}

const subtitles: Languages = {
  de: new URL("https://example.com/de.vtt"),
  en: new URL("https://example.com/en.vtt"),
  pt: new URL("https://example.com/pt.vtt"),
  es: new URL("https://example.com/es.vtt"),
  fr: new URL("https://example.com/fr.vtt"),
  ja: new URL("https://example.com/ja.vtt"),
};

const selectedLanguage = loadLanguage(subtitles, "de");
console.log(selectedLanguage);

type AllowedElemnets = {
  video: HTMLVideoElement;
  audio: HTMLAudioElement;
  canvas: HTMLCanvasElement;
};

function isElementAllowd(
  collection: AllowedElemnets,
  elem: string
): elem is keyof AllowedElemnets {
  return elem in collection;
}

function selectElement(collection: AllowedElemnets, elem: string) {
  if (isElementAllowd(collection, elem)) {
    return collection[elem];
  }
}

// const selectElement2 = selectElement(
//   {
//     video: document.createElement("video"),
//     audio: document.createElement("audio"),
//     canvas: document.createElement("canvas"),
//   },
//   "video"
// );

function isAvailable<Obj>(
  obj: Obj,
  key: string | number | symbol
): key is keyof Obj {
  return key in obj;
}

const obj4 = {
  a: 1,
  b: 2,
  c: 3,
};
isAvailable(obj4, "a");
