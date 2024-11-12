// 24.11.04
// [Lv1]포켓몬 - 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums: Array<number>) {
  const countMax = Math.floor(nums.length / 2);

  const uniqueNums = nums.filter((n, idx, self) => {
    return self.indexOf(n) === idx;
  });
  const hash = new Map(uniqueNums.map((n) => [n, 1]));

  return Math.min(countMax, hash.size);
}

// console.log(solution([3, 1, 2, 3])); // 2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
