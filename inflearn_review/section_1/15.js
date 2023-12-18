// 가운데 문자 출력
function solution(s) {
    let answer;
    const len = s.length;
    const mid = Math.floor(len / 2);

    // ⑴ slice() 메서드
    // answer = len % 2 ? s.slice(mid, mid + 1) : s.slice(mid - 1, mid + 1);

    if (len % 2) answer = s[mid];
    else answer = s[mid - 1] + s[mid];

    return answer;
}

console.log(solution('good'));
