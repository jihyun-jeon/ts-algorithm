/**
 * 24.12.20
 * [lv1] 완주하지 못한 선수 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */

// <나의 풀이>
function solution(participant: string[], completion: string[]) {
  const table: Record<string, number> = {};

  participant.forEach((p) => {
    table[p] = table[p] ? table[p] + 1 : 1;
  });

  completion.forEach((c) => {
    if (table[c] && --table[c] === 0) {
      delete table[c];
    }
  });

  return Object.keys(table)[0];
}

// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
// console.log(
//   solution(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
//   )
// ); //"vinko"
// console.log(
//   solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
// ); // "mislav"
