function solution(price, money, count) {
  // 등차수열의 합: 첫째항이 a, 제n항이 l일 때, Sn = n(a + l) / 2
  const money_to_pay = (count * (price + price * count)) / 2;

  return money_to_pay > money ? money_to_pay - money : 0;
}

console.log(solution(3, 20, 4));
