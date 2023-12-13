// 일곱 난쟁이
function solution(arr) {
    const answer = arr;
    const sum = arr.reduce((a, b) => a + b);
    let flag = false;

    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            // if (i === j) continue; ----> i와 j는 같을 수 없음!
            if (sum - (arr[i] + arr[j]) === 100) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                flag = true;
                break;
            }
        }
        if (flag) break;
    }

    return answer.join(' ');
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
