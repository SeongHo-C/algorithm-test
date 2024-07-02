function solution(n, words) {
  const usedWords = [];
  let beforeWord = '';

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    // i > 0, 첫 번째 단어에 대한 특별한 처리
    if (i > 0 && (beforeWord[beforeWord.length - 1] !== currentWord[0] || usedWords.includes(currentWord))) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    usedWords.push(currentWord);
    beforeWord = currentWord;
  }

  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
);
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
console.log(solution(3, ['abc', 'cbd', 'ddd', 'ddd', 'dbc', 'cbd']));
