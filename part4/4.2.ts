type Languagess = {
  de: URL;
  en: URL;
  pt: URL;
  es: URL;
  fr: URL;
  ja: URL;
};

const languagess: Languagess = {
  de: new URL("https://example.com/de.vtt"),
  en: new URL("https://example.com/en.vtt"),
  pt: new URL("https://example.com/pt.vtt"),
  es: new URL("https://example.com/es.vtt"),
  fr: new URL("https://example.com/fr.vtt"),
  ja: new URL("https://example.com/ja.vtt"),
};

//URLList는 Languages의 상위형식
//Languages의 모든 값은 URLList이지만 URLList의 모든 값은 Languages가 아니다
type URLList = {
  [x: string]: URL;
};

// type URLList: URLList라는 새로운 타입을 정의합니다.
// { [x: string]: URL; }: 이 부분은 인덱스 시그니처를 사용하여 객체의 키와 값을 정의합니다.
// [x: string]: 객체의 키는 문자열 타입입니다.
// URL: 객체의 값은 URL 타입입니다.

function fetchFile<List extends URLList, Keys extends keyof List>(
  urls: List,
  keys: Keys[]
): {
 const els = keys.map((el) => 
    fetch(urls[el])
 .then((res) => res.text()).then((text) => text)
  );
  return els;
};

//매개 변수를 배열로 전달
const de = fetchFile(langua); //Promise<any[]>[]
