function solution(n, words) {
  const game = [];
  let befor_word = words[0][0];
  let result;

  for (const word of words) {
    if (!game.includes(word) && befor_word[befor_word.length - 1] === word[0]) game.push(word);
    else {
      result = [(game.length + 1) % n || n, Math.ceil((game.length + 1) / n)];
      break;
    }

    befor_word = word;
  }

  return result || [0, 0];
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
