/**
 * 24.11.29
 * [Lv1]콜라츠추측-구현
 * https://school.programmers.co.kr/learn/courses/30/lessons/12943
 */

function solution(num: number) {
  let count = 0;

  while (num > 1) {
    if (count >= 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
}

// console.log(solution(6)); //8
// console.log(solution(16)); // 4
// console.log(solution(626331)); // -1
