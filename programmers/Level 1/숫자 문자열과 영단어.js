function solution(s) {
  let answer = s;
  const alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < alpha.length; i++) {
    if (answer.includes(alpha[i])) {
      const regExp = new RegExp(alpha[i], 'g');
      answer = answer.replace(regExp, i);
    }
  }

  return +answer;
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
