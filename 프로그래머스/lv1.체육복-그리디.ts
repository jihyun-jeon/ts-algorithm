/**
 * 24.11.07
 * [Lv1]체육복 - 그리디
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */

// <나의 풀이>
function solution(n: number, lost: Array<number>, reserve: Array<number>) {
  let answer = n;
  const newLost: Array<number> = [];

  // 읽어버린 동시에 여분 있는 사람 제거
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      const removeIdx = reserve.findIndex((r) => r === lost[i]);
      reserve.splice(removeIdx, 1);
    } else {
      newLost.push(lost[i]);
    }
  }

  newLost.sort();

  const reserveSet = new Set(reserve);

  // 체육복 분배
  for (let l of newLost) {
    const left = l - 1;
    const right = l + 1;
    if (reserveSet.has(left)) {
      reserveSet.delete(left);
    } else if (reserveSet.has(right)) {
      reserveSet.delete(right);
    } else {
      answer--;
    }
  }

  return answer;
}

// <다른 사람 풀이>
function solution2(n: number, lost: Array<number>, reserve: Array<number>) {
  // 전체학생이 체육복 있는 상태로 시작
  const students: Record<number, number> = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.forEach((number) => (students[number] -= 1)); // 잃어 버린 사람 카운트
  reserve.forEach((number) => (students[number] += 1)); // 여분 있는 사람 카운트

  // 체육복 분배
  for (let i = 1; i <= n; i++) {
    if (students[i] > 0) {
      continue;
    }

    if (students[i - 1] > 1) {
      students[i - 1] -= 1;
      students[i] += 1;
      continue;
    }

    if (students[i + 1] > 1) {
      students[i + 1] -= 1;
      students[i] += 1;
    }
  }

  // 집계
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

// console.log(solution(5, [2, 4], [1, 3, 5])); //5
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
// console.log(solution(5, [5, 3], [4, 2])); // 5
// console.log(solution(5, [4, 2], [3, 5])); // 5
// console.log(solution(3, [1, 2, 3], [1, 2, 3])); // 3
// console.log(solution(7, [1, 3, 5, 7], [1, 3, 5, 7])); // 7
// console.log(solution(5, [2, 3], [3, 4])); // 4
// console.log(solution(5, [2, 3, 5], [2, 3, 4])); // 5
