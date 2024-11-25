/**
 * 24.11.15
 * [Lv2] 피보나치 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */

// < Top-Down 방식 (재귀) >
// 중복 계산이 너무 많이 실행됨 → 시간초과 O(2ⁿ)
function solution(n: number): number {
  if (n < 2) {
    return n;
  }

  return solution(n - 2) + solution(n - 1);
}

// < Bottom-Up 방식 (반복문) > O(n)
function solution(n: number): number {
  let memo: number[] = [];

  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      memo[i] = i;
    } else {
      memo[i] = (memo[i - 2] + memo[i - 1]) % 1234567;
    }
  }

  return memo[n];
}

// < 재귀+메모이제이션 : 매모 객체 활용 >
function solution(n: number) {
  const memo: number[] = [];

  function fibo(i: number) {
    if (memo[i] !== undefined) {
      return memo[i];
    }

    if (i < 2) {
      memo[i] = i;
      return i;
    }

    memo[i] = (fibo(i - 1) + fibo(i - 2)) % 1234567;
    return memo[i];
  }

  return fibo(n);
}

// < 재귀+메모이제이션 : 메모이제이션 함수 활용 >
type Memoized = {
  (key: number): number;
  cache: { [key: number]: number };
};

function memoize(func: Function) {
  const memoized: Memoized = (key) => {
    if (memoized.cache[key] !== undefined) {
      return memoized.cache[key];
    }

    const result = func(key);
    memoized.cache[key] = result;
    return memoized.cache[key];
  };

  memoized.cache = {};

  return memoized;
}

function fibo(i: number): number {
  if (i == 0) return 0;
  if (i == 1) return 1;

  return (memoizedFibo(i - 1) + memoizedFibo(i - 2)) % 1234567;
}
const memoizedFibo = memoize(fibo);

function solution(n: number) {
  return memoizedFibo(n);
}

// console.log(solution(0)); // 0
// console.log(solution(1)); // 1
// console.log(solution(2)); // 1
// console.log(solution(3)); // 2
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...
