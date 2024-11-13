// 24.11.04
// [Lv1]약수의합 - 구현
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(num: number) {
  let result = 0;

  let sqrt = Math.floor(Math.sqrt(num));

  while (sqrt > 0) {
    const [isInt, div] = divRem(num, sqrt); // 호이스팅

    if (isInt) {
      result += div;
      if (div !== sqrt) {
        result += sqrt;
      }
    }
    sqrt -= 1;
  }

  return result;
}

function divRem(num: number, s: number): [boolean, number] {
  const div = num / s;
  const isInt = Number.isInteger(div);
  return [isInt, div];
}

// console.log(solution(12)); // 28
// console.log(solution(5)); // 6
