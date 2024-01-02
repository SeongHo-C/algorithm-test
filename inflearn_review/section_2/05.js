// 등수구하기
function solution(arr) {
    const answer = [];
    const copyArr = arr.slice();
    copyArr.sort((a, b) => b - a);

    for (const score of arr) {
        answer.push(copyArr.indexOf(score) + 1);
    }

    return answer.join(' ');
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
