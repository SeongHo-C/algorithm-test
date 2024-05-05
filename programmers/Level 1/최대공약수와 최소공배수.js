// 유클리드 호제법: 2개의 자연수 또는 정식의 최대공약수를 구하는 알고리즘

// "2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때,
// a와 b의 최대 공약수는 b와 r의 최대공약수와 같다."
function gcd(a, b) {
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return a;
}

// "두 수 a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수로 나눈 것과 같다."
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
