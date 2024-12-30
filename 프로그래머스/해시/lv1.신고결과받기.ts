/**
 * 24.12.23
 * [lv1] 신고결과받기 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */

// <나의 풀이>
function solution(id_list: string[], report: string[], k: number) {
  const reportCount: Record<string, number> = {};
  const reportLog: Record<string, Set<string>> = {}; // {신고한 사람:[신고당한 사람]}

  id_list.forEach((id) => {
    reportCount[id] = 0;
    reportLog[id] = new Set();
  });

  report.forEach((r) => {
    const [reporter, reported] = r.split(" ");

    if (!reportLog[reporter].has(reported)) {
      reportLog[reporter].add(reported);
      reportCount[reported]++;
    }
  });

  const blockedUser: string[] = []; // [ 'frodo', 'neo' ]
  for (let user in reportCount) {
    if (reportCount[user] >= k) {
      blockedUser.push(user);
    }
  }

  return id_list.map((id) => {
    let count = 0;
    blockedUser.forEach((blocked) => {
      if (reportLog[id].has(blocked)) count++;
    });
    return count;
  });
}

// <개선 코드>
// 객체의 키값을 신고한 사람이 아닌, {신고 당한 사람 : [신고한 사람 리스트]} 으로 관리하여 신고당한 횟수 카운트
function solution2(id_list: string[], report: string[], k: number) {
  const reportedLog: Record<string, Set<string>> = {}; // {신고당한 사람 : [신고한 사람]}

  for (let r of report) {
    const [reporter, reported] = r.split(" ");
    if (!reportedLog[reported]) {
      reportedLog[reported] = new Set();
    }
    reportedLog[reported].add(reporter);
  }

  const count: Record<string, number> = {};
  for (let reported in reportedLog) {
    if (reportedLog[reported].size >= k) {
      for (let reporter of reportedLog[reported]) {
        count[reporter] = (count[reporter] || 0) + 1;
      }
    }
  }

  return id_list.map((id) => (count[id] ? count[id] : 0));
}

// console.log(
//   solution2(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//     2
//   )
// ); // 	[2,1,1,0]

// console.log(
//   solution2(
//     ["con", "ryan"],
//     ["ryan con", "ryan con", "ryan con", "ryan con"],
//     3
//   )
// ); //  	[0,0]
