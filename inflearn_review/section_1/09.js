// A를 #으로
function solution(s) {
    let answer = '';

    // for...of 명령문
    // for (const alpha of s) {
    //     if (alpha === 'A') answer += '#';
    //     else answer += alpha;
    // }

    // replace() 메서드
    answer = s.replace(/A/g, '#');

    return answer;
}

let str = 'BANANA';
console.log(solution(str));
