// 교육과정 설계
function solution(need, plan) {
  const answer = 'YES';
  const requiredSubjects = need.split('');

  for (const subject of plan) {
    if (requiredSubjects.includes(subject)) {
      if (requiredSubjects.shift() !== subject) return 'NO';
    }
  }

  if (requiredSubjects.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
