function solution(s) {
    let answer = '';

    // ⑴ toUpperCase() 메서드
    // answer = s.toUpperCase();

    // ⑵ charCodeAt(), String.fromCharCode() 메서드
    for (const alpha of s) {
        const ascii = alpha.charCodeAt();

        if (ascii >= 97 && ascii <= 122) answer += String.fromCharCode(ascii - 32);
        else answer += alpha;
    }

    return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
