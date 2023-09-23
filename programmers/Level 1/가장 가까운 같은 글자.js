function solution(s) {
    const answer = [];
    const map = new Map();

    [...s].forEach((v, i) => {
        const nearIdx = map.get(v);
        map.set(v, i);

        nearIdx >= 0 ? answer.push(i - nearIdx) : answer.push(-1);
    });

    return answer;
}

console.log(solution('aaaaaa'));
