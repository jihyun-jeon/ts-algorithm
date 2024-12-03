/**
 * 24.11.22
 * [Lv1] 달리기 경주
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871
 */

// 시도1. <배열 인덱스 swap 하기> 시간초과
function solution(players: string[], callings: string[]) {
  callings.forEach((c) => {
    const calledIdx = players.findIndex((p) => p === c);
    const prevIdx = calledIdx - 1;

    [players[calledIdx]] = [players[prevIdx]];
    [players[prevIdx]] = [c];
  });

  return players;
}

// 시도2. <해시맵>
type ObjType = { [key: string]: number };

function solution(players: string[], callings: string[]) {
  const playersObj: ObjType = {};
  players.forEach((p, idx) => {
    playersObj[p] = idx;
  });

  callings.forEach((c) => {
    let calledIdx = playersObj[c];
    let prevIdx = playersObj[c] - 1;
    const prevName = players[prevIdx];

    [players[prevIdx], players[calledIdx]] = [c, players[prevIdx]];

    playersObj[c] = calledIdx - 1;
    playersObj[prevName] = prevIdx + 1;
  });

  return players;
}

// console.log(
//   solution(
//     ["mumu", "soe", "poe", "kai", "mine"],
//     ["kai", "kai", "mine", "mine"]
//   )
// );
// ["mumu", "kai", "mine", "soe", "poe"]
