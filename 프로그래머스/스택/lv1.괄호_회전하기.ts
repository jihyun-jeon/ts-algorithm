/**
 * 24.12.10
 * [lv1] 괄호 회전하기 - 스택
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

// <기존 풀이>
const signs: Record<string, string> = {
  "}": "{",
  ")": "(",
  "]": "[",
};

function solution(str: string) {
  let count = 0;
  let rotate = 0;

  while (rotate < str.length) {
    let stack: string[] | null = [];

    for (let i = 0; i < str.length; i++) {
      const target = signs[str[i]];
      const top = stack.at(-1);

      if (target && stack.length === 0) {
        stack = null;
        break;
      }

      if (target && top === target) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }

    if (stack?.length === 0) {
      count++;
    }

    str = str.slice(1) + str.slice(0, 1);
    rotate++;
  }

  return count;
}

// <개선> - 코테합 책 참조
// 문자를 직접 회전시키지 않고, 인덱스값을 달리하는 방법
const signs_: Record<string, string> = {
  "}": "{",
  ")": "(",
  "]": "[",
};

function solution2(str: string) {
  let count = 0;
  const size = str.length;

  for (let i = 0; i < size; i++) {
    let stack: string[] | null = [];

    for (let j = i; j < i + size; j++) {
      const index = j % size;
      const target = signs_[str[index]];
      const top = stack.at(-1);

      if (target && stack.length === 0) {
        stack = null;
        break;
      }

      if (target && top === target) {
        stack.pop();
      } else {
        stack.push(str[index]);
      }
    }

    if (stack?.length === 0) {
      count++;
    }
  }

  return count;
}

// console.log(solution2("[](){}")); // 3
// console.log(solution2("}]()[{")); // 2
// console.log(solution2("[)(]")); // 0
// console.log(solution2("}}}")); // 0
