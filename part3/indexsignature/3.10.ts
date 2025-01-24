// 값의 형식을 아는 객체를 사용하고 싶으넫 모든 프로퍼티의 이름을 아직 알지 못한다.
const timings = {
  "fettblog.eu": {
    ttfb: 300,
    fcp: 1000,
    si: 1200,
    lcp: 1500,
    tti: 1100,
    tbt: 10,
  },
  "typescript-book.com": {
    ttfb: 400,
    fcp: 1100,
    si: 1100,
    lcp: 2200,
    tti: 1100,
    tbt: 0,
  },
};

interface Timing {
  ttfb: number;
  fcp: number;
  si: number;
  lcp: number;
  tti: number;
  tbt: number;
}

function findLowestTiming(
  collection: { [domain: string]: Timing },
  metric: keyof Timing
): string {
  let result = {
    domain: "",
    value: Number.MAX_VALUE,
  };
  for (const domain in collection) {
    const timing = collection[domain];
    if (timing[metric] < result.value) {
      result.domain = domain;
      result.value = timing[metric];
    }
  }
  return result.domain;
}
