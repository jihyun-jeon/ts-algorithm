/**
 * 24.12.28
 * [lv0] 트리순회 - 트리
 * 코테합 책 저자출제
 * - 배열로 표현한 이진 트리 순회하는 코드 구현하기
 * - 이진 트리를 "전위 순회", "중위 순회", "후위 순회" 한 결과를 반환
 */

/* <전위 순회> 
: "현재 노드를 부모 노드로 생각했을 때" 부모 노드 -> 왼쪽 자식 -> 오른쪽 자식 노드
: 루트 노드를 출력한 다음, 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
order(0) 1 - order(1) 2 - order(3) 4 
                        - order(4) 5
           - order(2) 3 - order(5) 6
                        - order(6) 7
*/
function preorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = "";
    ret += nodes[idx]; // [부모]
    ret += preorder(nodes, idx * 2 + 1); // [왼쪽]
    ret += preorder(nodes, idx * 2 + 2); // [오른쪽]
    return ret;
  }

  return "";
}

/*
<중위 순회> 
: "현재 노드를 부모 노드로 생각했을 때" 왼쪽 노드 -> 부모 자식 -> 오른쪽 자식 노드
: 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임.
: 이후 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
❷ orer(0) 1 - ❶ ②order(1) 2 - ①order(3) 4
                             - ③order(4) 5
            - ❸ ②order(2) 3 - ①order(5) 6
                             - ③order(6) 7
*/
function inorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = "";
    ret += inorder(nodes, idx * 2 + 1); // [왼쪽]
    ret += `${nodes[idx]} `; // [부모]
    ret += inorder(nodes, idx * 2 + 2); // [오른쪽]
    return ret;
  }

  return "";
}

/* <후위 순회> 
: "현재 노드를 부모 노드로 생각했을 때" 왼쪽 자식 -> 오른쪽 자식 -> 부모 노드
: 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
: 이후 루트 노드 출력함
❸ orer(0) 1 - ❶ ③order(1) 2 - ①order(3) 4
                              - ②order(4) 5
             - ❷ ③order(2) 3 - ①order(5) 6
                              - ②order(6) 7
*/
function postorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = "";
    ret += postorder(nodes, idx * 2 + 1); // [왼쪽]
    ret += postorder(nodes, idx * 2 + 2); // [오른쪽]
    ret += `${nodes[idx]} `; // [부모]
    return ret;
  }

  return "";
}

function solution(nodes: number[]) {
  return [
    preorder(nodes, 0).slice(0, -1), // 전위 순회
    inorder(nodes, 0).slice(0, -1), // 중위 순회
    postorder(nodes, 0).slice(0, -1), // 후위 순회
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7])); // ['1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1']
