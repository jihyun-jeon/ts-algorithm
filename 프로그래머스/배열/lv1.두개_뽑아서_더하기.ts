/**
 * 24.12.02
 * [lv1]두개 뽑아서 더하기 - 배열
 * https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */

function solution(numbers: number[]) {
  const sums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(sums)].sort((a, b) => a - b);
}

// console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
// console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
