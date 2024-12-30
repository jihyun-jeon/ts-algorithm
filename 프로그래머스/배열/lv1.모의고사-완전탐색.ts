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

  const scores = persons.map((person) => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === person[i % person.length]) {
        count++;
      }
    }
    return count;
  });

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

/*
<회고> 
- 원본을 수정하지 않는다 (불변성의 원칙)
: 개선 전) const scores = [0, 0, 0] 으로 초기화한 뒤, for문에서 직접 수정함.
: 기존 값을 수정하면 사이드 이펙트가 발생할 수 있고, 코드 추적이 어려워질 가능성이 있음.

: 개선 후) map메서드를 사용해 새로운 scores 값을 생성하여 반환.
: 기존 값을 수정하지 않고 새로운 값을 반환하여, 데이터가 다른 곳에서 수정될 가능성을 차단할 수 있음.
: 상태 변화에 대한 예측 가능성이 높아져 코드의 안정성과 가독성이 개선됨.
*/
