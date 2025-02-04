/**
 * 25.02.03
 * [lv2] 타겟 넘버 - DFS (너비우선탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

// <BFS - 너비우선탐색> - 1,2번 시간초과
type QueueType = {
  index: number;
  sum: number;
};

function solution(numbers: number[], target: number) {
  let queue: QueueType[] = [{ index: 0, sum: 0 }];
  let count = 0;

  while (queue.length > 0) {
    const { index, sum } = queue.shift()!; // 큐에서 하나 꺼냄 // ✅ Non-null assertion 사용

    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      continue;
    }

    // 다음 숫자를 + 또는 - 연산한 결과를 큐에 추가
    queue.push({ index: index + 1, sum: sum + numbers[index] });
    queue.push({ index: index + 1, sum: sum - numbers[index] });
  }

  return count;
}

// <DFS - 깊이우선탐색>
function solution(numbers: number[], target: number) {
  let count = 0;

  const dfs = (index: number, sum: number) => {
    // 1. 모든 숫자를 다 사용했을 때, target과 비교
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }

    // 2️. 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 3️. 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0); // 초기 상태: 인덱스 0, 합 0부터
  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2

/*
모든 경우의 수를 다 구해본다.
DFS는 - 위 아래로
BFS는 - 옆으로 탐색

Step 1: { index: 0, sum: 0 }
Step 2: { index: 1, sum: 1 }, { index: 1, sum: -1 }
Step 3: { index: 2, sum: 2 }, { index: 2, sum: 0 }, { index: 2, sum: 0 }, { index: 2, sum: -2 }
Step 4: { index: 3, sum: 3 }, { index: 3, sum: 1 }, { index: 3, sum: 1 }, { index: 3, sum: -1 }, ...
Step 5: { index: 4, sum: 4 }, { index: 4, sum: 2 }, { index: 4, sum: 2 }, { index: 4, sum: 0 }, ...
Step 6: { index: 5, sum: 3 }, { index: 5, sum: 3 }, { index: 5, sum: 3 }, { index: 5, sum: 3 }, { index: 5, sum: 3 }
*/

/*
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
*/

/*
+4+1-2+1 = 4
+4-1+2-1 = 4
*/
