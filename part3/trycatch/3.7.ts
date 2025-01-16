//Q. try-catch 블록으로 오류 형식을 명시적으로 지정할 수 없다.
//A. any나 unknown으로 애너테이션을 추가한 다음형식 찬반형을 사용한다.
try {
    myroutine();
} catch (e) {
    if (e instanceof TypeError) {
    } else if (e instanceof RangeError) {
    } else if (e instanceof EvalError) {
    } else if (typeof e === 'string') {
    } else if (axios.isAxiosError(e)) {
    } else {
        // logMyError(e)
    }
}

function isAxiosEror(payload: any): payload is AxiosError {
    return payload !== null && typeof payload === 'object';
}
