/**
 * 24.12.29
 * [lv0]이진 탐색 트리 구현 - 트리
 * 코테합 책 저자출제
 * 이진 탐색 트리를 생성하고, 이진 탐색 트리에서 찾을 수 있는 값이면 true, 아니면 false 반환
 */
class Node_ {
  val: any = null;
  left: any = null;
  right: any = null;

  constructor(num: number) {
    this.val = num;
  }
}

class BST {
  root: any = null; // {val : 5, left : null , right : null}

  insert(num: number) {
    if (!this.root) {
      this.root = new Node_(num);
    } else {
      let cur = this.root;
      //
      while (true) {
        if (num < cur.val) {
          if (cur.left) {
            cur = cur.left;
          } else {
            cur.left = new Node_(num);
            break;
          }
        } else {
          if (cur.right) {
            cur = cur.right;
          } else {
            cur.right = new Node_(num);
            break;
          }
        }
      }
      //
    }
  }

  search(num: number) {
    let cur = this.root;
    while (cur && cur.val !== num) {
      if (num < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return cur;
  }
}

function solution(list: number[], searchList: number[]) {
  const int = new BST();

  for (let n of list) {
    int.insert(n);
  }

  const result = [];
  for (let n of searchList) {
    if (int.search(n)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6])); // [true, true, true, false]

/* 이진탐색 트리
: 각 노드의 값은, 왼쪽 가지에 있는 노드들의 값 보다 크다.
: 각 노드의 값은, 오른쪽 가지에 있는 노드들의 값 보다 작다.
*/
