/**
 * 24.12.06
 * [Lv2] 방문길이 - 구현
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 */

// <나의 풀이>
type Direction = "L" | "R" | "U" | "D";
type MoveResult = {
  x2: number;
  y2: number;
  reverseD: Direction;
};

function move(d: Direction, x: number, y: number): MoveResult {
  switch (d) {
    case "L":
      return { x2: x - 1, y2: y, reverseD: "R" };

    case "R":
      return { x2: x + 1, y2: y, reverseD: "L" };

    case "U":
      return { x2: x, y2: y + 1, reverseD: "D" };

    case "D":
      return { x2: x, y2: y - 1, reverseD: "U" };
  }
}

function solution(dirs: string) {
  let x = 0;
  let y = 0;

  let visit = new Map();

  for (let d of dirs) {
    const { x2, y2, reverseD } = move(d as Direction, x, y);

    if (x2 > 5 || x2 < -5 || y2 > 5 || y2 < -5) {
      continue;
    }

    const path1 = `${x}${y}${x2}${y2}${d}`;
    const path2 = `${x2}${y2}${x}${y}${reverseD}`;

    if (!visit.has(path1) && !visit.has(path2)) {
      visit.set(path1, null);
    }

    x = x2;
    y = y2;
  }

  return visit.size;
}

// console.log(solution("ULURRDLLU")); // 7
// console.log(solution("LULLLLLLU")); // 7
// console.log(solution("UDDUU")); // 2

// <코테합 풀이> -----------------------------------------------
function isValidMove(nx: number, ny: number) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x: number, y: number, dir: string) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs: string) {
  let x = 0;
  let y = 0;

  const visited = new Set();

  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      continue; // ➎ 벗어난 좌표는 인정하지 않음
    }

    // ➏ A에서 B로 간 경우 B에서 A도 추가해야 함(총 경로의 개수는 방향성이 없음)
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny]; // ➐ 좌표를 이동했으므로 업데이트
  }

  return visited.size / 2;
}

// <회고> -----------------------------------------------
/*
  1. 중복 포함하지 않는다는 내용 나오면 Set 생각해보기!
  중복되지 않는 "값"만 만들면 되는데, 왜 Map으로 함?
  "키:값" 형식의 Map 보단 Set이 더 적절했음.

  2. 문제 잘 파악 하기
  역방향도 중복 경로인 것을 파악하지 못했음.
  방향을 바꾼 값도 처음부터 저장해놓는 방식하면 더 편했을듯
*/
