// 제네릭 형식의 값은 명시적 또는 암묵적으로 다양한 하위 형식으로 치환될 수 있음
// "and" | "or" 등의 콤비네이터를 이용해 다양한 필터규칙 조합 가능

type FilterRule = {
  field: string;
  operator: string;
  value: any;
};

type CombinatorialFiler = {
  combination: "and " | "or";
  rules: FilterRule[];
};

type ChainedFilter = {
  rules: (CombinatorialFiler | FilterRule)[];
};

type Filter = CombinatorialFiler | ChainedFilter;

function reset<F extends Filter>(filter: F): F {
  if ("combination" in filter) {
    // filter는 CombinatorialFiler
    return { combinator: "and", rules: [] };
  }
  // filter는 ChainedFilter
  return { rules: [] };
}

const filter: CombinatorialFiler = { rules: [], combination: "or" };
const resetFilter: Filter = reset(filter); // resetFilter는 Filter

const;
