/**
 * 24.11.16
 * [Lv1] 과일장수
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 */

function solution(k: number, m: number, score: number[]) {
  let result = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const item = score.slice(i, i + m);
    if (item.length !== m) {
      break;
    }
    const s = Math.min(...item);
    result += s * m;
  }

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
