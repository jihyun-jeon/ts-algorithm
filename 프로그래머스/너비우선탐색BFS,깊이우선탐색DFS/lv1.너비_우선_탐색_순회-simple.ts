/**
 * 25.02.01
 * [lv1] bfs 탐색 - 그래프
 */
function bfs(graph: { [key: string]: string[] }, start: string) {
  const visited = new Set();
  visited.add(start);
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift() as string;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}

//  인접 리스트로 그래프 표현
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(bfs(graph, "A")); // 결과: A B C D E F

//     A
//    / \
//   B   C
//  / \   \
// D   E - F
