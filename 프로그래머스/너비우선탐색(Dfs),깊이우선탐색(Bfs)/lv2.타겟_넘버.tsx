/**
 * 25.02.03
 * [lv2] 타겟 넘버 - DFS (너비우선탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

function solution(numbers: number[], target: number) {
  let count = 0;

  const dfs = (index: number, sum: number) => {
    // 1. 모든 숫자를 다 사용했을 때, target과 비교
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }

    // 2️. 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 3️. 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0); // 초기 상태: 인덱스 0, 합 0부터
  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
