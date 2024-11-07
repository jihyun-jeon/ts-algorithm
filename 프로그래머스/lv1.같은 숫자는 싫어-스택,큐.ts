/**
 * 24.11.05
 * [Lv1]같은 숫자는 싫어 - 스택/큐
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */
function solution(arr: Array<number>) {
  const result: Array<number> = [];

  arr.forEach((n) => {
    if (result[result.length - 1] !== n) {
      result.push(n);
    }
  });

  return result;
}
