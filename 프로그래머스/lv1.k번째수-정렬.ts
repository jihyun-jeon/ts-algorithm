/**
 * 24.11.07
 * [Lv1]K번째수 - 정렬
 * https:school.programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array: Array<number>, commands: Array<Array<number>>) {
  const result: Array<number> = [];

  commands.forEach((command) => {
    const [first, second, target] = command;
    const pick = array.slice(first - 1, second).sort((a, b) => a - b);
    result.push(pick[target - 1]);
  });

  return result;
}

// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// ); // [5, 6, 3]
