// forEach, map, filter, reduce

const a = [10, 11, 12, 13, 14, 15];

// for문 대신 사용
// 값, 인덱스
a.forEach((v, i) => {
  console.log(v, i);
});

// 새로운 배열 생성해서 리턴
// 원본 배열과 길이가 같음
let answer = a.map((v, i) => {
  if (v % 2 == 0) return v;
});
console.log(answer);

// 조건에 맞는 것만 추출하여 새로운 배열로 리턴
// 원본 배열과 길이가 다를 수 있음
answer = a.filter((v, i) => {
  if (v % 2 == 0) return v;
});
console.log(answer);

// acc는 누적 값
answer = a.reduce((acc, v) => {
  return acc + v;
}, 0);
console.log(answer);
