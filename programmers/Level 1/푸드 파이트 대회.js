function solution(food) {
  let left = (right = '');

  for (let i = 1; i < food.length; i++) {
    // String(i) === `${i}`
    const halved_food = `${i}`.repeat(Math.floor(food[i] / 2));
    left = left + halved_food;
    right = halved_food + right;
  }

  return `${left}0${right}`;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
