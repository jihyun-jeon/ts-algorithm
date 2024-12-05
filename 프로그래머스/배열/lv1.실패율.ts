/**
 * 24.12.05
 * [lv1]실패율 - 배열
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

// <나의 풀이>
function solution(N: number, stages: number[]) {
  const failCounts = new Array(N).fill(0);

  stages.forEach((stage) => {
    if (failCounts[stage - 1] !== undefined) {
      failCounts[stage - 1]++;
    }
  });

  let person = stages.length;

  const rateList = failCounts.map((fail, idx) => {
    const rate = fail / person;
    person -= fail;
    return { stage: idx + 1, rate };
  });

  rateList.sort((a, b) => b.rate - a.rate);

  return rateList.map((rate) => rate.stage);
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
// console.log(solution(4, [4, 4, 4, 4, 4])); //	[4,1,2,3]

/**
 * 1. failCounts는 배열로
 * 각 단계별 실패한 플레이어 수를 카운트하여 저장.
 * 이때 각 단계는 1~5로 나열된 숫자! -> 배열의 index 활용하면 되서 객체가 아닌 배열로함
 */

// <코테합 풀이>
function solution2(N: number, stages: number[]) {
  const challenger = new Array(N + 2).fill(0); // [설명1] // [0,1,3,2,1,0,1]
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails: Record<string, number> = {}; // { '1': 0.125, '2': 0.42857142857142855, '3': 0.5, '4': 0.5, '5': 0 }
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  return result.map((v) => Number(v[0]));
}

// [설명1]
// N+2 : 인덱스 0과 스테이지 모두 클리어 한 사람 저장하기 위해 2개 더 만듦
// 이렇게 하면 값 자체를 인덱스로 바로 활용 가능함
