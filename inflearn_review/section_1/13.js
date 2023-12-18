// 대소문자 변환
function solution(s) {
    let answer = '';

    for (const alpha of s) {
        if (alpha.toUpperCase() === alpha) answer += alpha.toLowerCase();
        else answer += alpha.toUpperCase();
    }

    return answer;
}

console.log(solution('StuDY'));
