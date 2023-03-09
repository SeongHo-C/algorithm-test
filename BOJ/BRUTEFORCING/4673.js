// 셀프 넘버

function solution(num) {
  let answer = '';
  const arr = Array.from({ length: num + 1 }, () => 0);

  for (let i = 1; i <= num; i++) {
    const splitNum = String(i).split('').map(Number);
    const num = splitNum.reduce((sum, v) => sum + v, i);
    if (num <= 10000) arr[num] = 1;
  }

  for (let i = 1; i <= num; i++) {
    if (arr[i] === 0) answer += i + '\n';
  }

  return answer.trimEnd();
}

console.log(solution(10000));
