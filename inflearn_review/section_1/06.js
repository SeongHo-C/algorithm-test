// 홀수
function solution(arr) {
    const answer = [];
    let sum,
        min = Number.MAX_SAFE_INTEGER;

    sum = arr.reduce((prev, cur) => {
        if (cur % 2 === 1) {
            if (cur < min) min = cur;
            return prev + cur;
        } else return prev;
    }, 0);

    answer.push(sum, min);
    return answer.join('\n');
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
