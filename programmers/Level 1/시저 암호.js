function solution(s, n) {
  let answer = '';

  for (const char of s) {
    const ascii = char.charCodeAt();
    let next_ascii = ascii + n;

    if (ascii >= 65 && ascii <= 90) {
      if (next_ascii > 90) next_ascii -= 26;
      answer += String.fromCharCode(next_ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      if (next_ascii > 122) next_ascii -= 26;
      answer += String.fromCharCode(next_ascii);
    } else {
      answer += ' ';
    }
  }

  return answer;
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
