/**
 * 24.12.24
 * [lv0] 두 개의 수로 특정 값 만들기 - 코테합 책 문제
 */

function countSort(arr: number[], target: number) {
  const hashtable = new Array(target + 1).fill(0);

  arr.forEach((n) => {
    if (n <= target) {
      hashtable[n] = 1;
    }
  });
  return hashtable;
  // {0:0,1:1 , 2:1, 3:1, 4:1, 5:0,6:0,7:0, 8:1}
}

function solution(arr: number[], target: number) {
  const hashtable = countSort(arr, target);

  for (let n of arr) {
    const n2 = target - n;

    if (n2 !== n && n2 <= target && hashtable[n2] === 1) {
      return true; // target에서 현재 원소 뺸 값이 해시테이블에 있으면 true
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
