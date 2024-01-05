// 뒤집은 소수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  const answer = [];

  for (const num of arr) {
    const reversedNum = +String(num).split('').reverse().join('');
    const result = isPrime(reversedNum);

    if (result) answer.push(reversedNum);
  }

  return answer.join(' ');
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
