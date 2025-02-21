/**
 * 25.02.21
 * [medium] 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/description/
 * Topics : Array , Backtracking
 */
// 정답코드 보며 이해

var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (index, target, path) => {
    if (target === 0) {
      // 종료 조건: target이 0이면 정답 추가
      result.push([...path]);
      return;
    }
    if (target < 0) return; // target이 음수가 되면 종료 (불필요한 탐색 방지)

    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i]); // 숫자 추가
      backtrack(i, target - candidates[i], path); // target 감소 후 재귀 호출
      path.pop(); // 백트래킹 (되돌리기)
    }
  };

  backtrack(0, target, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [ [ 2, 2, 3 ], [ 7 ] ]
console.log(combinationSum([2, 3, 5], 8)); //[ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]
console.log(combinationSum([2], 1)); // []

/*
backtrack(i, target - candidates[i], path);
          0    5                     [ 2 ]
          0    3                     [ 2, 2 ]
          0    1                     [ 2, 2, 2 ]
          0    -1                    [ 2, 2, 2, 2 ]
          1    -2                    [ 2, 2, 2, 3 ]
          2    -5                    [ 2, 2, 2, 6 ]
          3    -6                    [ 2, 2, 2, 7 ]
          1    0                     [ 2, 2, 3 ]
          2    -3                    [ 2, 2, 6 ]
          3    -4                    [ 2, 2, 7 ]
          1    2                     [ 2, 3 ]
          1    -1                    [ 2, 3, 3 ]
          2    -4                    [ 2, 3, 6 ]
          3    -5                    [ 2, 3, 7 ]
          2    -1                    [ 2, 6 ]
          3    -2                    [ 2, 7 ]
          1    4                     [ 3 ]
          1    1                     [ 3, 3 ]
          1    -2                    [ 3, 3, 3 ]
          2    -5                    [ 3, 3, 6 ]
          3    -6                    [ 3, 3, 7 ]
          2    -2                    [ 3, 6 ]
          3    -3                    [ 3, 7 ]
          2    1                     [ 6 ]
          2    -5                    [ 6, 6 ]
          3    -6                    [ 6, 7 ]
          3    0                     [ 7 ]
      */
