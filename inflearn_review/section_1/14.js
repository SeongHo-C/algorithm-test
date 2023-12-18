// 가장 긴 문자열
function solution(s) {
    let answer = '';
    let max = Number.MIN_SAFE_INTEGER;

    for (const x of s) {
        const len = x.length;

        if (max < len) {
            max = len;
            answer = x;
        }
    }

    return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
