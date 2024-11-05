// 24.11.04
// [Lv1]약수의합 - 구현
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(num: number) {
  let result = 0;

  let geun = Math.floor(Math.sqrt(num));

  while (geun > 0) {
    const yaksu = num / geun;
    if (yaksu % 1 === 0) {
      result += yaksu;
      if (yaksu !== geun) {
        result += geun;
      }
    }
    geun -= 1;
  }

  return result;
}
