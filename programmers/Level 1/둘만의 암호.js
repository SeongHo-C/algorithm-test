function solution(s, skip, index) {
    let answer = '';
    const alpha = [];

    for (let i = 97; i <= 122; i++) {
        alpha.push(String.fromCharCode(i));
    }

    skippedAlpha = alpha.filter((c) => !skip.includes(c));

    [...s].forEach((c) => {
        answer += skippedAlpha[(skippedAlpha.indexOf(c) + index) % skippedAlpha.length];
    });

    return answer;
}

console.log(solution('aukks', 'wbqd', 5));
