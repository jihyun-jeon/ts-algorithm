/**
 * 24.12.11
 * [lv1] 짝지어 제거하기 - 스택
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */

function solution(str: string) {
  const stack: string[] = [];

  for (let s of str) {
    const top = stack.at(-1);

    if (top === s) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// console.log(solution("baabaa")); //  1
// console.log(solution("cdcd")); //  0
