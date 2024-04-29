function solution(price, money, count) {
  let result;

  // 등차수열의 합: 첫쨰항이 a, 제n항이 l일 때, Sn = n(a + l) / 2
  const money_to_pay = (count * (price + price * count)) / 2;
  result = money_to_pay > money ? money_to_pay - money : 0;

  return result;
}

console.log(solution(3, 20, 4));
