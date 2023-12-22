function solution(arr) {
    let answer;

    answer = arr.reduce((sum, v) => sum + v) / arr.length;

    return answer;
}

console.log(solution([1, 2, 3, 4]));
