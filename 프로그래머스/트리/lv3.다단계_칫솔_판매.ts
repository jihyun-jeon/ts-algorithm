/**
 * 25.01.02
 * [lv2]다단계 칫솔 판매 - 이진 탐색 트리
 * https://school.programmers.co.kr/learn/courses/30/lessons/77486
 */

function solution(
  enroll: string[],
  referral: string[],
  seller: string[],
  amount: number[]
) {
  const parent: Record<string, string> = {};
  enroll.forEach((e, i) => {
    parent[e] = referral[i];
  });

  const total: Record<string, number> = {};
  enroll.forEach((e) => {
    total[e] = 0;
  });

  for (let i = 0; i < seller.length; i++) {
    let cur = seller[i];
    let money = amount[i] * 100;

    while (cur !== "-" && money > 0) {
      total[cur] += money - Math.floor(money * 0.1);
      cur = parent[cur];
      money = Math.floor(money * 0.1);
    }
  }

  return enroll.map((name) => total[name]);
}

// console.log(
//   solution(
//     ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//     ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//     ["young", "john", "tod", "emily", "mary"],
//     [12, 4, 2, 5, 10]
//   )
// ); //  	[360, 958, 108, 0, 450, 18, 180, 1080]

// console.log(
//   solution(
//     ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//     ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//     ["sam", "emily", "jaimie", "edward"],
//     [2, 3, 5, 4]
//   )
// ); // [0, 110, 378, 180, 270, 450, 0, 0]
