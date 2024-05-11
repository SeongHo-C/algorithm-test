function solution(s, n) {
  let answer = '';

  for (const char of s) {
    const ascii = char.charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      let next = ascii + n;
      if (next > 90) next -= 26;
      answer += String.fromCharCode(next);
    } else if (ascii >= 97 && ascii <= 122) {
      let next = ascii + n;
      if (next > 122) next -= 26;
      answer += String.fromCharCode(next);
    } else {
      answer += ' ';
    }
  }

  return answer;
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
