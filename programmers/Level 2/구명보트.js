function solution(people, limit) {
  let boat_num = 0;
  const sorted_people = people.slice().sort((a, b) => a - b);

  while (sorted_people.length > 0) {
    boat_num++;

    const max_w = sorted_people.pop();
    const min_w = sorted_people[0];

    if (min_w + max_w <= limit) sorted_people.shift();
  }

  return boat_num;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
