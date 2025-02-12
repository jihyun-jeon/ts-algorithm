/**
 * 25.02.05
 * [lv2] 게임 맵 최단거리 - DFS (너비우선탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */

function solution(maps: number[][]): number {
  const h = maps.length; // 세로 길이
  const w = maps[0].length; // 가로 길이

  const directions = [
    [1, 0], // 아래
    [-1, 0], // 위
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
  ];

  // queue : [ [0,0,1], [1,0,2], [2,0,3], [3,0,4], [3,1,5], [3,2,6], [2,2,7], [1,2,8], [2,3,8], [0,2,9], [2,4,9], [0,3,10], [1,4,10], [3,4,10], [0,4,11], [4,4,11] ]
  const queue: [number, number, number][] = [[0, 0, 1]]; // (y, y, 이동 거리)
  maps[0][0] = 0; // 방문한 곳은 0으로 표시 (중복 방문 방지)

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift()!; // 0,0,1

    if (x === h - 1 && y === w - 1) {
      return distance; // 목표 지점 도착 시 최단 거리 반환
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      // 2차원 배열이기 때문에, x는 세로축이고 , y는 가로축이 되는 것임

      if (nx >= 0 && nx < h && ny >= 0 && ny < w && maps[nx][ny] === 1) {
        queue.push([nx, ny, distance + 1]);
        maps[nx][ny] = 0; // 방문 처리
      }
    }
  }

  return -1; // 도착 불가능한 경우
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
