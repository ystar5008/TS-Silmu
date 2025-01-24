type Throws = {
  [x in 1 | 2 | 3 | 4 | 5 | 6]: number;
};
type ElementCollection = {
  [y: number]: HTMLElement | undefined | null;
  get(index: number): HTMLElement | undefined | null;
  length: number;
  filter(callback: (element: HTMLElement) => boolean): ElementCollection;
};

type StringDictionary = {
  [index: string]: string | number;
  count: number;
};

const throws: Throws = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
};

const elements: ElementCollection = {
  0: document.querySelector("div"),
  1: document.querySelector("p"),
  length: 2,
  get(index) {
    return this[index];
  },
  filter(callback) {
    // 간단한 필터 구현
    const result: ElementCollection = {
      length: 0,
      get(index) {
        return this[index];
      },
      filter: this.filter,
    };
    return result;
  },
};

const dict: StringDictionary = {
  hello: "world",
  count: 42,
  value: "string",
};
