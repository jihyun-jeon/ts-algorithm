// 24.11.07
// [이코테] 1이 될 때 까지
// 첫째 줄에 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 횟수의 최솟값을 출력

// <1빼는 방법을 매번수행>
function solution0(n: number, k: number) {
  let count = 0;

  while (n > 1) {
    if (n % k) {
      n -= 1;
    } else {
      n /= k;
    }
    count += 1;
  }
  return count;
}

// <1빼는 방법을 최소화> - 시간복잡도 좀 더 줄일 수 있음
function solution1(n: number, k: number) {
  let result = 0;

  while (true) {
    // n을 k로 나눠 떨어지는 수가 될 때까지 빼기
    let target = Math.floor(n / k) * k;
    result += n - target;
    n = target;

    // n이 k보다 작을 때 (더 이상 나눌 수 없을 때) 반복문 탈출
    if (n < k) {
      break;
    }

    // k로 나누기
    result += 1;
    n = Math.floor(n / k);
  }

  // 마지막으로 남은 수에 대해 1씩 빼기
  result += n - 1;
  return result;
}

// console.log(solution1(25, 3)); // 6
// console.log(solution1(25, 5)); // 2

// ------------------------------------------------------------------------
/**
 * 그리디(탐욕법) : 현재 상황에서 지금 당장 좋은 것만 고르는 방법
 *
 * 1. 가장 좋은 것 고르는 방법
 * : 최대한 많이 나누기 (-1하는 횟수보다 나누는 횟수가 더 많도록)
 *
 * 2. 정당성 검사
 * :
 */
