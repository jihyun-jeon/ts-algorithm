/**
 * 24-12-08
 * [Lv2]올바른 괄호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s: string) {
  const stack: string[] = [];
  const signs: Record<string, string> = { ")": "(" };

  for (const str of s) {
    const top = stack.at(-1);

    if (stack.length > 0 && top === signs[str]) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.length === 0;
}

// console.log(solution("()()")); // true
// console.log(solution("(())()")); // true
// console.log(solution(")()(")); // false
// console.log(solution("(()(")); // false
// console.log(solution("))")); // false;

/*
<회고> 
배열의 끝 요소를 찾을때 lenght-1 하는 습관 없애자!, at 활용
*/
