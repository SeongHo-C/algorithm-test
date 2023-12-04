// 삼각형 판별하기
function solution(a, b, c) {
    let answer = 'YES';
    let max, sum;

    max = Math.max(a, b, c);
    sum = a + b + c;

    if (sum - max <= max) return 'NO';

    return answer;
}

console.log(solution(13, 33, 17));
