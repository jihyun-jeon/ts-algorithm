/**
 * 24.12.03
 * [lv1]모의고사 - 완전탐색
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

// <기존 풀이>
function solution(answers: number[]) {
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < persons.length; j++) {
      if (answers[i] === persons[j][i % persons[j].length]) {
        scores[j]++;
      }
    }
  }

  const result: number[] = [];
  const maxScore = Math.max(...scores);
  scores.forEach((score, idx) => {
    if (score === maxScore) {
      result.push(idx + 1);
    }
  });
  return result;
}

// <개선>
// [개선1] entries로 개선 : index로 값에 접근하는 방법보단, 바로 값을 사용할 수 있게되어 가독성 증가됨
function solution(answers: number[]) {
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  // [개선1]
  for (let [i, answer] of answers.entries()) {
    for (let [j, person] of persons.entries()) {
      if (answer === person[i % person.length]) {
        scores[j]++;
      }
    }
  }

  const result: number[] = [];
  const maxScore = Math.max(...scores);

  scores.forEach((score, idx) => {
    if (score === maxScore) {
      result.push(idx + 1);
    }
  });

  return result;
}

// console.log("solution", solution([1, 3, 2, 4, 2])); // [1,2,3]
// console.log("solution", solution([5, 1, 1])); // [2,3]
// console.log("solution", solution([1, 3, 5, 4, 5, 2, 4, 5])); // [1,3]

/**
 * 노트
 *
 * [P1] entries() "배열"에서의 활용
 * 배열의 인덱스와 값을 [index, value] 형태의 이터레이터 객체로 반환함.
 *
 * 1) for...of와 함께 사용하면, entries()반환 객체 순회할 수 있음
 * const fruits = ['apple', 'banana', 'cherry'];
 * for (const [index, value] of fruits.entries()) {
 * console.log(`Index: ${index}, Value: ${value}`);
 * }
 *
 * 2) Array.from을 사용해 배열로 변환
 * const fruits = ['apple', 'banana', 'cherry'];
 * const entriesArray = Array.from(fruits.entries());
 * console.log(entriesArray); // [[0, 'apple'], [1, 'banana'], [2, 'cherry']]
 *
 * 3) 중첩 배열에서
 * const matrix = [[1, 2],[3, 4],[5, 6]];
 *
 * for (const [rowIndex, row] of matrix.entries()) {
 *  for (const [colIndex, value] of row.entries()) {
 *    console.log(`Row ${rowIndex}, Column ${colIndex}: ${value}`);
 *  }
 * }
 *
 * [P2] entries "객체"에서의 활용
 * const obj = { a: 1, b: 2 };
 * for (let [key, value] of Object.entries(obj)) {
 * console.log(key, value); // a 1 , b 2
 * }
 *
 * [P3] % 에 대해
 * %는 나머지 연산자, 두 숫자를 나누었을 때의 나머지를 반환
 *
 * 1 % 5 = 1  <- !!
 * 6 % 5 = 1
 */
