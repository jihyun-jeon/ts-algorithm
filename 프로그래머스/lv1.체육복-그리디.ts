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

/**
 * 24.11.13
 * <멘토링 후 개선>
 * 개선 포인트
 * 1.lost,reserve 학생을 하나의 "배열"로 가공 : 학생은 순서가 있기 때문에 인덱스 활용
 * 2. 0인 애들이 양옆에서 받아오는 식으로 수정 : 0인 애가 for문 돈 후, 0인 애들의 상태가 확정될 것이 보장됨.
 */
function solution3(n: number, lost: Array<number>, reserve: Array<number>) {
  let answer = 0;

  const students = new Array(n).fill(1);

  lost.forEach((l) => (students[l - 1] -= 1));
  reserve.forEach((r) => (students[r - 1] += 1));

  for (let i = 0; i < n; i++) {
    const left = i - 1;
    const right = i + 1;

    if (students[i] === 0 && students[left] > 1) {
      students[left]--;
      students[i]++;
    }
    if (students[i] === 0 && students[right] > 1) {
      students[right]--;
      students[i]++;
    }

    if (students[i] >= 1) {
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
