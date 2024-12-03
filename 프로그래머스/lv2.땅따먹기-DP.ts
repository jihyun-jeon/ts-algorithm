/**
 * 24.11.15
 * [Lv2]땅따먹기 - DP
 * https://school.programmers.co.kr/learn/courses/30/lessons/12913
 */

function solution(land: number[][]) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      const prev = [...land[i - 1]]; // 비효율 개선 필요
      prev[j] = 0;
      const prevMax = Math.max(...prev);
      land[i][j] = land[i][j] + prevMax;
    }
  }

  return Math.max(...land[land.length - 1]);
}

// <Array.entries 활용>
function solution(land: number[][]) {
  for (const [r, row] of land.entries()) {
    if (r === 0) {
      continue;
    }

    for (const [c, col] of row.entries()) {
      const prev = [...land[r - 1]];
      prev[c] = 0;
      const prevMax = Math.max(...prev);
      land[r][c] = col + prevMax;
    }
  }

  return Math.max(...land.at(-1));
}

// console.log(
//   solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
//   ])
// ); //16

console.log(
  solution([
    [1, 2, 3, 4],
    [1, 1, 1, 10],
    [2, 3, 4, 4],
  ])
); // 17
