/**
 * 24.11.05
 * [Lv1]같은 숫자는 싫어 - 스택/큐
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */
function solution(arr: number[]) {
  const result: number[] = [];

  arr.forEach((n) => {
    if (result.at(-1) !== n) {
      result.push(n);
    }
  });

  return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
