// 큰 수 출력하기
function solution(arr) {
    const answer = [];
    answer.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }

    return answer.join(' ');
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
