/**
 * 24.12.21
 * [lv2] 오픈채팅방 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 */

// <나의 풀이>
const ACTION_MESSAGE: Record<string, string> = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다.",
};

function solution(records: string[]) {
  const history: string[][] = [];

  const nameTable: Record<string, string> = {};

  records.forEach((record) => {
    const [action, uid, name] = record.split(" ");

    if (name !== undefined && nameTable[uid] !== name) {
      nameTable[uid] = name;
    }

    if (ACTION_MESSAGE[action]) {
      history.push([uid, ACTION_MESSAGE[action]]);
    }
  });

  return history.map(([uid, message]) => nameTable[uid] + message);
}

// console.log(
//   solution([
//     "Enter uid1234 Muzi",
//     "Enter uid4567 Prodo",
//     "Leave uid1234",
//     "Enter uid1234 Prodo",
//     "Change uid4567 Ryan",
//   ])
// );
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
