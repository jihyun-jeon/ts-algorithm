/**
 * 25.01.08
 * [Lv2] 영어 끝말잇기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n: number, words: string[]) {
  let result = [0, 0];

  const usedWords = new Set();
  let prevWord = words[0].at(0);

  for (let i = 0; i < words.length; i++) {
    if (words[i].at(0) === prevWord && !usedWords.has(words[i])) {
      prevWord = words[i].at(-1);
      usedWords.add(words[i]);
    } else {
      result = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    }
  }
  return result;
}

// console.log(
//   solution(3, [
//     "tank",
//     "kick",
//     "know",
//     "wheel",
//     "land",
//     "dream",
//     "mother",
//     "robot",
//     "tank",
//   ])
// ); // [3, 3];

// console.log(
//   solution(5, [
//     "hello",
//     "observe",
//     "effect",
//     "take",
//     "either",
//     "recognize",
//     "encourage",
//     "ensure",
//     "establish",
//     "hang",
//     "gather",
//     "refer",
//     "reference",
//     "estimate",
//     "executive",
//   ])
// ); // [0,0]
// console.log(
//   solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
// );

// //	[1,3]
