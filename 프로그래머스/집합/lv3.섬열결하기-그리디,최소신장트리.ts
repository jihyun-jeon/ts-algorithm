/**
 * 25.01.10
 * [Lv3] 섬 열결하기 - 그리디, 최소신장트리
 * https://school.programmers.co.kr/learn/courses/30/lessons/42861
 */

/*
       [처음]                 [결과]
노드 번호 : 1 2 3 4      노드 번호 : 1 2 3 4
부모 노드 : 1 1 2 3      부모 노드 : 1 1 1 1

   ①                          ①
   ↑                        ↑  ↑  ↑
   ②                       ②  ③  ④
   ↑
   ③
   ↑
   ④
*/

/*
 <코테합 책 참조>
1. 최소 신장 트리(MST) : 주어진 n개의 섬을 가장 적은 비용으로 연결.
2. 최소 신장 트리를 구하기 위해 크루스칼 알고리즘 사용:
- 모든 간선을 비용 순으로 정렬.
- 비용이 낮은 간선부터 선택하되, 사이클을 만들지 않는 경우에만 간선을 선택.

 1. 비용을 오름차순 순으로 정렬
 2. 비용이 작은 다리부터 섬 연결
 3. n개의 섬 연결하려면 다리 n-1개 필요하므로, n-1번 반봇
 4. 비용 최소화를 위해, 사이클 형성하지 않도록 함 
- 배열의 인덱스틑 자기자신, 값은 부모 노드를 의미
- 인덱스와 값이 같은 경우 : 루트 노드가 됨
*/

// 파인드 연산 :  특정 노드의 루트 노드가 무엇인지 탐색
// 'i'가 속한 집합의 루트 노드 찾기
function find(parent: number[], i: number) {
  if (parent[i] == i) {
    return i;
  }

  parent[i] = find(parent, parent[i]); // 경로 압축: 부모를 루트로 바로 연결
  return parent[i];
}

// 유니온 연산 : 두 집합의 루트 노드를 갖게 하는 것
// 랭크가 큰 루트 노드로, 랭크 작은 루트 노드를 편입시킴.
// (랭크 : 간선의 수, 가장 깊은 노드까지의 경로 길이)
function union(parent: number[], rank: number[], x: number, y: number) {
  const xroot = find(parent, x);
  const yroot = find(parent, y);

  const xrank = rank[xroot];
  const yrank = rank[yroot];

  if (xrank < yrank) {
    parent[xroot] = yroot;
  } else if (xrank > yrank) {
    parent[yroot] = xroot;
  } else {
    parent[yroot] = xroot;
    rank[xroot] += 1;
  }
}

function solution(n: number, costs: number[][]) {
  costs.sort((a, b) => a[2] - b[2]); // 비용을 기준으로 간선을 오름차순 정렬

  // 초기 부모는 자기 자신
  const parent = Array.from({ length: n }, (_, i) => i); // 각 노드의 부모를 추적하는 parent 배열
  const rank = Array(n).fill(0); // 각 노드의 트리의 랭크를 추적하는 rank 배열

  let minCost = 0; // 최소 비용 합
  let edges = 0; // 최소 신장 트리에 포함된 간선의 개수

  for (const edge of costs) {
    if (edges === n - 1) {
      break; // n - 1개의 간선이 포함된 경우 중단(최소 신장 트리의 속성)
    }

    const x = find(parent, edge[0]); // 첫 번째 섬의 집합 루트 찾기
    const y = find(parent, edge[1]); // 두 번째 섬의 집합 루트 찾기

    if (x !== y) {
      union(parent, rank, x, y); // 두 노드가 서로 다른 집합에 속하는 경우, 집합 합치기
      minCost += edge[2];
      edges += 1; // 간선의 개수 증가
    }
  }

  return minCost;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
); // 	4
