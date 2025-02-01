/**
 * 25.01.19
 * [lv1] bfs 탐색 - 그래프
 * 저자출제
 */

// 너비 우선검색 - 큐 활용
class Queue2 {
  itmes: number[] = [];
  front = 0;
  rear = 0;

  push(item: number) {
    this.itmes.push(item);
    this.rear++;
  }

  pop() {
    return this.itmes[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph: number[][], start: number) {
  const adjList: { [key: number]: number[] } = {};
  // {1:[2,3] , 2:[4,5], 3:[6,7], 4:[8], 5:[8], 6:[9], 7:[9]}

  for (let [k, v] of graph) {
    if (!adjList[k]) {
      adjList[k] = [];
    }
    adjList[k].push(v);
  }

  // 2. 맨처음 방문하는 노드 처리
  const q = new Queue2();
  q.push(start);

  const vistied = new Set();
  vistied.add(start);

  const result: number[] = [start];

  // 3. 그래프 순환
  while (!q.isEmpty()) {
    const node = q.pop();

    adjList[node]?.forEach((neighbor) => {
      if (!vistied.has(neighbor)) {
        q.push(neighbor);
        vistied.add(neighbor);
        result.push(neighbor);
      }
    });
  }

  return result;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
); // 반환값 : [1,2,3,4,5,6,7,8,9 ]

// console.log(
//   solution(
//     [
//       [0, 1],
//       [1, 2],
//       [2, 3],
//       [3, 4],
//       [4, 5],
//       [5, 0],
//     ],
//     1
//   )
// ); // 반환값 : [1,2,3,4,5,0]
