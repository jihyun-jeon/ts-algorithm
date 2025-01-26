/**
 * 25.01.26
 * [lv3] 네트워크 - 그래프 (DFS/BFS)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 */

/*
 <i = 0 , answer = 1>
 dfs() // [T,F,F]
(0,0) 1 && !true => dfs(x)
(0,1) 1 && !false => dfs(o)

 dfs() // [T,T,F]
(1,0)1 && !true => dfs(x)
(1,1)1 && !true => dfs(x)
(1,2)0 && !false => dfs(x)

(0,2) 0 && !false => dfs(x)

<i = 1 , answer = 1>
// [T,T,F]

<i = 2 , answer = 2>  
 dfs() // [T,T,T]
(2,0)0 && !true => dfs(x)
(2,1)0 && !true => dfs(x)
(2,2)1 && !true => dfs(x)

*/

function dfs(computers, visited, node) {
  visited[node] = true; // ➊ 현재 노드 방문 처리

  for (let idx = 0; idx < computers[node].length; idx++) {
    if (computers[node][idx] && !visited[idx]) {
      // ➋ 연결되어 있으며 방문하지 않은 노드라면
      dfs(computers, visited, idx); // ➌ 해당 노드를 방문하러 이동
    }
  }
  //
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false); // [t,f,f] ➍ 방문 여부를 저장하는 리스트

  for (let i = 0; i < n; i++) {
    // ➎ 아직 방문하지 않은 노드라면
    if (!visited[i]) {
      dfs(computers, visited, i); // ➏ DFS로 연결된 노드들을 모두 방문하면서 네트워크 개수 증가
      answer++; // 방문하지 않은 노드에서 탐색이 시작될 때마다 카운터를 증가
    }
  }
  return answer;
}

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// ); // 	2
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// ); //	1

/*
<노트>
- 모든 요소를 탐색하는 것이 목적임. => 깊이 우선 탐색! (너비우선탐색 보다 구현이 쉽고, 메모리도 더 적게 사용해서)

[1단계: 연결된 컴퓨터 찾기] "하나의 컴퓨터에서 시작해 연결된 모든 컴퓨터를 찾으려면 어떻게 해야 할까?"
그래프 탐색 기법을 활용!
ㄴ DFS: 연결된 컴퓨터를 재귀적으로 탐색.
ㄴ BFS: 큐를 사용해 점진적으로 탐색.

[2단계: 방문한 컴퓨터는 다시 탐색하지 않기] "이미 탐색한 컴퓨터를 중복으로 탐색하지 않으려면?"
visited 배열을 사용하여 이미 탐색한 노드를 기록하면 됨.
탐색 중이라면 visited[node] = true로 설정.

[3단계: 모든 컴퓨터를 확인하기] "탐색하지 못한 네트워크가 있을 수 있으니, 모든 컴퓨터를 어떻게 확인할까?"
전체 컴퓨터를 순회하며, 방문하지 않은 컴퓨터를 찾으면 새로운 네트워크로 간주하고 탐색을 시작.

[4단계: 네트워크 개수 세기] "새로운 네트워크를 찾을 때마다 어떻게 카운트를 증가할까?"
방문하지 않은 노드에서 탐색이 시작될 때마다 카운터를 증가시키면 됨.
*/
