// 24.11.04
// [Lv1]약수의합 - 구현
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(num: number) {
  let result = 0;

  let sqrt = Math.floor(Math.sqrt(num));

  while (sqrt > 0) {
    const [div, rem] = divRem(num, sqrt);

    if (rem === 0) {
      result += div;
      if (div !== sqrt) {
        result += sqrt;
      }
    }
    sqrt -= 1;
  }

  return result;
}

function divRem(num: number, s: number): [number, number] {
  const div = num / s;
  const rem = num % s;
  return [div, rem];
}

// console.log(solution(12)); // 28
// console.log(solution(5)); // 6
