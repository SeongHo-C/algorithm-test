// Least Recently Used(카카오 캐시 문제 변형)
function solution(size, arr) {
  const cache = Array.from({ length: size }, () => 0);

  for (const work of arr) {
    if (!cache.includes(work)) {
      // Cache Miss
      for (let i = size - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      // Cache Hit
      const index = arr.indexOf(work);
      for (let i = index; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }

    cache[0] = work;
  }

  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
