// 중복단어제거
function solution(s) {
    let answer;

    // ⑴ Set 객체
    // answer = [...new Set(s)].join('\n');

    // ⑵ filter() 메서드
    answer = s.filter((str, idx) => s.indexOf(str) === idx).join('\n');

    return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
