//Q. 유니온에서 서로 겹치지 않도록 모델을 만들어야 하는데 이들을 구별할 kind 프로퍼티를 API에 사용할 수 없는 상황이다
//A. 선택형 never 기법으로 특정 프로퍼티를 제외한다.
type SelectBase = {
    optins: string[];
};

type SingleSelect = SelectBase & {
    value: string;
    valuse?: never;
};

type MultiSelect = SelectBase & {
    value?: never;
    values: string[];
};

type SelectProperties = SingleSelect | MultiSelect;

function selectCallack(params: SelectProperties) {
    console.log(params);
    if ('value' in params) {
        console.log(params.value);
    } else if ('values' in params) {
        console.log(params.values);
    }
}

selectCallack({
    optins: ['dracula', 'monokai', 'vscode'],
    value: 'dracula',
});

selectCallack({
    optins: ['dracula', 'monokai', 'vscode'],
    values: ['dracula', 'monokai'],
});
