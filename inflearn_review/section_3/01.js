// 회문 문자열
function solution(s) {
    let answer = 'YES';
    s = s.toUpperCase();

    if (s.split('').reverse().join('') !== s) answer = 'NO';

    return answer;
}

let str = 'goooG';
console.log(solution(str));
