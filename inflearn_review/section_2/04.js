// 점수 계산
function solution(arr) {
    let answer = 0;
    let cnt = 0;

    for (const result of arr) {
        if (result === 1) answer += ++cnt;
        else cnt = 0;
    }

    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
