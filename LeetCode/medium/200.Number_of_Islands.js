/**
 * 25.02.14
 * [medium] 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/description/
 * Topics :Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const h = grid.length;
  const w = grid[0].length;

  const dfs = (h_, w_) => {
    // 범위를 벗어나거나, 이미 방문한 곳이면 return
    if (h_ < 0 || w_ < 0 || h_ >= h || w_ >= w || grid[h_][w_] === "0") {
      return;
    }

    grid[h_][w_] = "0"; // 방문 처리 (육지를 물로 변경)

    // 상하좌우 탐색
    dfs(h_ + 1, w_); // 하
    dfs(h_ - 1, w_); // 상
    dfs(h_, w_ + 1); // 우
    dfs(h_, w_ - 1); // 좌
  };

  for (let h_ = 0; h_ < h; h_++) {
    for (let w_ = 0; w_ < w; w_++) {
      if (grid[h_][w_] === "1") {
        count++; // 새로운 섬 발견
        dfs(h_, w_);
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
// dfs (0 0) (1 0) (2 0) (2 1) (1 1) (0 1) (0 2) (0 3) (1 3)

console.log([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]); // 3

/*
1인 노드가 있으면 
0 으로 한 뒤,
상하좌우로 방문하면서 1인 것을 0으로 만들어줌
방문한 노드에서 상하좌우 방문을 계속 반복
*/
