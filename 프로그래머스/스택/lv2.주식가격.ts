/**
 * 24.12.12 (목)
 * [lv2] 주식가격 - 스택
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * https://school.programmers.co.kr/questions/20326?question=20326
 */

// [나의 풀이]
function solution(prices: number[]) {
  let result: number[] = [];
  let stack: number[][] = [];

  prices.forEach((p, i) => {
    for (let t = stack.length - 1; t >= 0; t--) {
      const [top, topIndex] = stack[t];

      if (top === undefined) {
        break;
      }

      if (top > p) {
        result[topIndex] = i - topIndex;
        stack.pop();
      }
    }

    stack.push([p, i]);
  });

  stack.forEach(([_, elIndex]) => {
    result[elIndex] = prices.length - 1 - elIndex;
  });
  return result;
}

// console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
// console.log(solution([4, 5, 1, 2, 6, 1, 1])); // [2,1,4,2,1,1,0]

// ------------------------------------------------------------

// [개선 코드] - 코테합 책 참조
// 1. stack 구조 개선 : [가격, 인덱스] ->	[인덱스]만 저장하여 일차원 배열로
// 2. stack 순회 방법 : for문 -> while문으로, 순회 대상의 길이가 계속 변하기 때문에 for문 적합X
function solution2(prices: number[]) {
  const size = prices.length;
  const result: number[] = new Array(size).fill(null);
  const stack: number[] = [];

  for (let i = 0; i < size; i++) {
    while (stack.length > 0 && prices[i] < prices[stack.at(-1)]) {
      const top = stack.pop();

      if (top === undefined) {
        break;
      }

      result[top] = i - top;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();

    if (top === undefined) {
      break;
    }

    result[top] = size - 1 - top;
  }

  return result;
}
