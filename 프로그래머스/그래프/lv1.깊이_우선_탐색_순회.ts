/**
 * 25.01.18
 * [lv1] dfs 탐색 - 그래프
 * 저자출제
 */
// 깊비 우선검색 -  스택 활용

type adjListType = { [key: string]: string[] };

function solution(graph: string[][], start: string) {
  // 1. 그래프를 인접 리스트로 변환
  const adjList: adjListType = {};
  // { A: [ 'B', 'C' ], B: [ 'D', 'E' ], C: [ 'F' ], E: [ 'F' ] }

  graph.forEach(([s, e]: string[]) => {
    if (!adjList[s]) {
      adjList[s] = [];
    }
    adjList[s].push(e);
  });

  // 2.  결과를 저장할 배열, 방문 상태를 저장할 Set
  const result: string[] = [];
  const visited: Set<string> = new Set();

  dfs(start, adjList, visited, result);

  return result;
}

// 3. DFS 함수
function dfs(
  start: string,
  adjList: adjListType,
  visited: Set<string>,
  result: string[]
) {
  if (visited.has(start)) return; // 이미 방문한거는 다시 탐색X

  visited.add(start); // 방문 안했으면 추가하면서 재귀로 순회
  result.push(start);

  adjList[start]?.forEach((node) => {
    if (adjList[start]) {
      dfs(node, adjList, visited, result);
    }
  });
}

// console.log(
//   solution(
//     [
//       ["A", "B"],
//       ["B", "C"],
//       ["C", "D"],
//       ["D", "E"],
//     ],
//     "A"
//   )
// ); // 반환값 : ['A', 'B', 'C', 'D', 'E']

// console.log(
//   solution(
//     [
//       ["A", "B"],
//       ["A", "C"],
//       ["B", "D"],
//       ["B", "E"],
//       ["C", "F"],
//       ["E", "F"],
//     ],
//     "A"
//   )
// ); // 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']

/*
     / D
  / B  
A     \ E - F
  \ C
  
*/
