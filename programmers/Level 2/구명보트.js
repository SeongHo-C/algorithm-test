function solution(people, limit) {
  let boat_num = 0;
  const sorted_people = people.slice().sort((a, b) => a - b);
  let i = 0;
  let j = sorted_people.length - 1;

  while (i <= j) {
    if (sorted_people[i] + sorted_people[j] <= limit) i++;
    j--;

    boat_num++;
  }

  return boat_num;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
