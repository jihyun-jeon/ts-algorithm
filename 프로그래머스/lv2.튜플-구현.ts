/**
 * 24.11.17
 * [Lv2] 튜플
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 */

function solution(s: any) {
  const str = s.replaceAll("{", "[").replaceAll("}", "]");
  const arr = JSON.parse(str).sort(
    (a: number[], b: number[]) => a.length - b.length
  );

  const flatArr = arr.flatMap((l: number[]) => l);

  return flatArr.filter((n: number, i: number) => flatArr.indexOf(n) === i);
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4];
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4];
// console.log(solution("{{20,111},{111}}")); // [111, 20];
// console.log(solution("{{123}}")); // [123];
// console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1];
