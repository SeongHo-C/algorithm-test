// 문자 찾기
function solution(s, t) {
    let answer = 0;

    // ⑴ match() 메서드
    // const regExp = new RegExp(`${t}`, 'g');
    // answer = s.match(regExp).length;

    // ⑵ split() 메서드
    answer = s.split(t).length - 1;

    return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
