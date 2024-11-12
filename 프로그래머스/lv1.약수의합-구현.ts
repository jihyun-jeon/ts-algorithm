// 24.11.04
// [Lv1]약수의합 - 구현
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(num: number) {
  let result = 0;

  let sqrtValue = Math.floor(Math.sqrt(num));

  while (sqrtValue > 0) {
    const dividedBySqrt = num / sqrtValue;
    if (Number.isInteger(dividedBySqrt)) {
      result += dividedBySqrt;
      if (dividedBySqrt !== sqrtValue) {
        result += sqrtValue;
      }
    }
    sqrtValue -= 1;
  }

  return result;
}

// console.log(solution(12)); // 28
// console.log(solution(5)); // 6
