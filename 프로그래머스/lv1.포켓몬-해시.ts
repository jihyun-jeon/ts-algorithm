// 24.11.04
// [Lv1]포켓몬 - 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums: Array<number>) {
  const countMax = Math.floor(nums.length / 2);

  const hash = new Map();
  nums.forEach((n) => {
    hash.set(n, 1);
  });

  return Math.min(countMax, hash.size);
}
