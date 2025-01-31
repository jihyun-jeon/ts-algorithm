/**
 * 25.01.31
 * [medium] 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * Topic : Tree , Breadth-First Search ,Binary Tree
 */

// 풀이1- <직접 트리 선언해서 푸는법>
// 2ms Beats 62.62%

// ✅ 1. TreeNode 정의 (이진 트리 노드)
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// ✅ 2. 배열을 트리(TreeNode)로 변환하는 함수 (내부적으로 자동 변환)
function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null; // 빈 배열이면 null 반환

  let root = new TreeNode(arr[0]); // 첫 번째 요소를 루트 노드로 설정
  let queue = [root]; // BFS 탐색을 위한 큐
  let i = 1; // 배열 인덱스

  while (queue.length > 0 && i < arr.length) {
    let node = queue.shift(); // 부모 노드 가져오기

    // 왼쪽 자식 추가
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    // 오른쪽 자식 추가
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
  // TreeNode {
  //   val: 3,
  //   left: TreeNode { val: 9, left: null, right: null },
  //   right: TreeNode {
  //     val: 20,
  //     left: TreeNode { val: 15, left: null, right: null },
  //     right: TreeNode { val: 7, left: null, right: null }
  //   }
  // }
}

// ✅ 3. BFS(너비 우선 탐색)로 Level Order Traversal 수행
var levelOrder = function (input) {
  let root = Array.isArray(input) ? arrayToTree(input) : input; //  자동 변환 추가

  if (!root) return []; // 루트가 null이면 빈 배열 반환

  let result = []; // 최종 결과 저장
  let queue = [root]; // BFS 탐색을 위한 큐

  while (queue.length > 0) {
    let level = []; // 현재 레벨의 값을 저장할 배열
    let size = queue.length; // 현재 레벨의 노드 개수

    for (let i = 0; i < size; i++) {
      let node = queue.shift(); // 큐에서 노드 꺼내기
      level.push(node.val); // 현재 노드 값을 저장

      // 왼쪽, 오른쪽 자식이 있으면 큐에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level); // 현재 레벨을 결과에 추가
  }

  return result;
};

// <풀이2> - leetcode 내장으로 구현되있는 트리노드 활용
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function (root) {
//   if (!root) return []; // ✅ 루트가 null이면 빈 배열 반환

//   let result = [];
//   let queue = [root]; // ✅ 큐를 배열로 초기화 (BFS)

//   while (queue.length > 0) {
//     let level = [];
//     let size = queue.length; // ✅ 현재 레벨의 노드 개수 저장

//     for (let i = 0; i < size; i++) {
//       let node = queue.shift(); // ✅ 큐에서 첫 번째 노드 제거
//       level.push(node.val); // ✅ 현재 노드 값을 레벨 배열에 추가

//       // ✅ 왼쪽, 오른쪽 자식 노드를 큐에 추가
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     result.push(level); // ✅ 현재 레벨을 결과 배열에 추가
//   }

//   return result;
// };

// ✅ 4. 실행
console.log(levelOrder2([3, 9, 20, null, null, 15, 7])); //  [[3],[9,20],[15,7]]
console.log(levelOrder2([1])); // [[1]]
console.log(levelOrder2([])); // []
