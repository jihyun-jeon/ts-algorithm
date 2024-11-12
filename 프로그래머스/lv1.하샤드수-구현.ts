/**
 * 24.11.09
 * [Lv1]하샤드수 - 구현
 * https://school.programmers.co.kr/learn/courses/30/lessons/12947
 */

function solution(x: number): boolean {
  let sum = 0;
  const strArr = String(x).split("");

  strArr.forEach((s) => {
    sum += Number(s);
  });

  return Number.isInteger(x / sum);
}

// console.log(solution(10)); //true
// console.log(solution(12)); //true
// console.log(solution(11)); //false
// console.log(solution(13)); //false
