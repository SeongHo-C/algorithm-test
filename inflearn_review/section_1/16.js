// 중복문자제거
function solution(s) {
    let answer = '';

    // ⑴ Set 객체
    // answer = [...new Set(s)].join('');

    // ⑵ includes() 메서드
    for (const alpha of s) {
        if (!answer.includes(alpha)) answer += alpha;
    }

    return answer;
}

console.log(solution('ksekkset'));
