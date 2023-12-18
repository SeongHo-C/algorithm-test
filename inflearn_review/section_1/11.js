// 대문자 찾기
function solution(s) {
    let answer = 0;

    // ⑴ match() 메서드
    // answer = s.match(/[A-Z]/g).length;

    // ⑵ toUpperCase() 메서드
    for (const alpha of s) {
        if (alpha.toUpperCase() === alpha) answer++;
    }

    return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
