/**
 * 25.01.18
 * [lv1] dfs 탐색 - 그래프
 * 저자출제
 */
// 깊비 우선검색 -  1)재귀 활용 or 2)스택 활용

/* 
<1. 재귀 기반 DFS>
*/

type adjListType = { [key: string]: string[] };

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

  const result: string[] = [];
  const visited: Set<string> = new Set();

  dfs(start, adjList, visited, result);

  return result;
}

/*
<2. 스택 기반 DFS> 
*/

type adjListType2 = { [key: string]: string[] };

function solutionWithStack(graph: string[][], start: string) {
  // 1. 그래프를 인접 리스트로 변환
  const adjList: adjListType2 = {};
  // { A: [ 'B', 'C' ], B: [ 'D', 'E' ], C: [ 'F' ], E: [ 'F' ] }

  graph.forEach(([s, e]) => {
    if (!adjList[s]) adjList[s] = [];
    adjList[s].push(e);
  });

  const result: string[] = [];
  const visited: Set<string> = new Set();
  const stack: string[] = [start];

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // 인접 노드를 스택에 추가 (역순으로 추가하면 기존 재귀와 같은 순서)
      adjList[node]
        ?.slice()
        .reverse()
        .forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            console.log("neighbor", neighbor);
            stack.push(neighbor);
          }
        });
    }
  }

  return result;
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
    A
   / \
  B   C
 / \
D  E
   |    
   F
*/
