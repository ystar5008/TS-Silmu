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

function findLowestTiming(
  collection: MetricCollection,
  metric: keyof Metrics
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

type Metrics = {
  // 최초 바이트까지 걸린 시간
  ttfb: number;
  // 최초 만족스러운 페인트
  fcp: number;
  //속도 인덱스
  si: number;
  // 가장 큰 페인트
  lcp: number;
  // 상호 동작 시간
  tti: number;
  // 총 블록 시간
  tbt: number;
};

type MetricCollection = {
  [domain: string]?: Metrics ;
};

const emptySet: MetricCollection = {};
let timing = (emptySet["typescript-cookbook.com"]?.fcp * 2 ?? 0) * 2;

