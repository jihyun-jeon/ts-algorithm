// 못품!
/**
 * 25.02.16
 * [medium] 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 * Topics : Tree, Depth-First Search, Binary Search Tree, Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var isValidBST = function (root) {
  const validate = (node, low = -Infinity, high = Infinity) => {
    console.log("here", node, low, high);
    if (!node) return true;

    // 현재 노드가 유효한 범위를 벗어나면 False 반환
    if (node.val <= low || node.val >= high) {
      return false;
    }

    // 왼쪽 서브트리 검사 (최대값 갱신)
    if (!validate(node.left, low, node.val)) {
      return false;
    }

    // 오른쪽 서브트리 검사 (최소값 갱신)
    if (!validate(node.right, node.val, high)) {
      return false;
    }

    return true;
  };

  return validate(root);
};

// 트리 생성
const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root)); // true

// const invalidRoot = new TreeNode(
//   5,
//   new TreeNode(1),
//   new TreeNode(4, new TreeNode(3), new TreeNode(6))
// );
// console.log(isValidBST(invalidRoot)); // false

// console.log(isValidBST([2, 1, 3])); // true
// console.log(isValidBST([5, 1, 4, null, null, 3, 6])); // false
/*
    2
   / \
  1   3     */

/*
   5
   / \
  1   4(x)
     / \
(x) 3   6    */
