// 유효한 팰린드롬
function solution(s) {
    let answer = 'YES';

    s = s.toUpperCase().replace(/[^A-Z]/g, '');
    if (s.split('').reverse().join('') !== s) answer = 'NO';

    return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
