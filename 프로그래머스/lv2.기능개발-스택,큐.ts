// 24.11.05
// [Lv2] 기능개발 - 스택/큐
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses: Array<number>, speeds: Array<number>) {
  const result: Array<number> = [];

  const daysLeft = progresses.map((p, idx) => {
    return Math.ceil((100 - p) / speeds[idx]);
  });

  let max = 0;
  let count = 0;

  for (let i = 0; i < daysLeft.length; i += 1) {
    if (max < daysLeft[i]) {
      max = daysLeft[i];
      count = 1;
    } else {
      count += 1;
      result.pop();
    }
    result.push(count);
  }

  return result;
}

/*
<테스트 케이스>
progresses	              speeds	            return
[93, 30, 55]             	[1, 30, 5]	        [2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
[90, 90, 90]	            [1, 5, 4]	          [3]
*/
