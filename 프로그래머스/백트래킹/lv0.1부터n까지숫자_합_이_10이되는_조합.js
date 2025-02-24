/**
 * 25.02.24
 * [lv0]1부터 n까지 숫자 중 합이 10이되는 조합 구하기
 * 저자출제
 */

function solution(N) {
  const results = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  backtrack(0, [], 1);
  return results;
}

console.log(solution(5)); // [[1,2,3,4],[1,4,5],[2,3,5]]
console.log(solution(2)); // []
console.log(solution(7)); // [[1,2,3,4] , [1,2,7], [1,3,6], [1,4,5], [2,3,5],[3,7], [4,6]]

/*
✔ backtrack(0, [], 1) 
✔ backtrack(1, [1], 2) 
✔ backtrack(3, [1,2], 3) 
✔ backtrack(6, [1,2,3], 4) 
✔ backtrack(10, [1,2,3,4], 5) ✅ (정답) 
✔ backtrack(11, [1,2,3,5], 6) ❌ (초과) → 백트래킹 
✔ 백트래킹 → [1,2] 상태로 복귀 
✔ backtrack(7, [1,4], 5) 
✔ backtrack(10, [1,4,5], 6) ✅ (정답) 
✔ 백트래킹 → [1,4] → [1] 상태로 복귀 
✔ backtrack(5, [2,3], 4) 
✔ backtrack(10, [2,3,5], 6) ✅ (정답) ✔ 백트래킹 → 모든 경우 탐색 완료!
*/
