// 문자열 압축
function solution(s) {
    let answer = '';
    let cnt = 1;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) cnt++;
        else {
            answer += s[i - 1] + cnt;
            cnt = 1;
        }
    }

    answer = answer.replace(/1/g, '');
    return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
