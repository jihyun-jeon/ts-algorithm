/**
 * 24.11.09
 * [Lv1]
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12948
 */

function solution(phone_number: string): string {
  const starLength = phone_number.length - 4;

  const str1 = new Array(starLength).fill("*").join("");
  const str2 = phone_number.slice(-4);

  return str1 + str2;
}

// console.log(solution("01033334444")); // "*******4444"
// console.log(solution("027778888")); // "*****8888"
