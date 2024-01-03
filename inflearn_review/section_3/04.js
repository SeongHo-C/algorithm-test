// 가장 짧은 문자거리
function solution(s, t) {
    const answer = [];
    const len = s.length;
    let p = 1000;

    for (let i = 0; i < len; i++) {
        if (s[i] === t) p = 0;
        else p++;

        answer.push(p);
    }

    p = 1000;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else p++;

        answer[i] = Math.min(answer[i], p);
    }

    return answer.join(' ');
}

let str = 'teachermode';
console.log(solution(str, 'e'));
