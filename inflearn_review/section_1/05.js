// 최솟값 구하기
function solution(arr) {
    let answer;
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach((num) => {
        if (num < min) min = num;
    });

    answer = min;
    return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
