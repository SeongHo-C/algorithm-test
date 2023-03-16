// 막대기

// 입력 타입이 정수인 경우 반드시 정수로 변환해줘야 한다!
const [N, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);

function solution(arr) {
    let answer = 1;
    const len = arr.length;
    let maxHeight = arr[len - 1];

    for(let i = len - 2; i >= 0; i--) {
        if(arr[i] > maxHeight) {
            maxHeight = arr[i];
            answer++;
        }
    }

    return answer;
}

console.log(solution(arr));