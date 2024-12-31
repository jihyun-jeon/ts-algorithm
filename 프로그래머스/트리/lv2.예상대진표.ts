/**
 * 24.12.31
 * [lv2]예상대진표 - 이진 탐색 트리
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 */

// 코테합 책 참조한 풀이
// o(logN)
function solution(n: number, a: number, b: number) {
  let count = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count += 1;
  }

  return count;
}

console.log(solution(8, 4, 7)); // 	3
console.log(solution(16, 9, 12)); // 	2

/*
    1        2           '3'               4  
   /\        /\           /\               /\
 1    2    3    4     '5'     '6'       7      8
 /\   /\   /\   /\     /\      /\      /\      /\
1 2  3 4  5 6  7 8  '9' 10   11 '12'  13 14  15 16
*/
