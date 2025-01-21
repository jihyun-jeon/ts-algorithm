/**
 * 25.01.16
 * [medium] 274. H-Index
 * https://leetcode.com/problems/h-index/description/
 *
 * 문제 이해)
 * 논문 중 적어도 h번 이상 인용된 논문이 h편 이상 있는 최대의 h값을 구하는 문제
 * 최소 h번 이상 인용된 논문을 최소 h개 이상 출판한 h의 최대값을 구해야 함.
 * 논문 인용된 횟수(h)와 그 이상의 인용을 가진 논문 수(h 이상 논문 개수)를 비교해 판단
 */

// <나의 풀이>
// 88ms , Beats 5.16%
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let result = 0;

  for (let i = 0; i < citations.length; i++) {
    const h = i + 1;
    const count = citations.filter((n) => n >= h).length;
    if (h <= count && result < h) {
      result = h;
    }
  }
  return result;
};

// <개선 코드>
// 1ms Beats 77.38%
// - 시간 복잡도: 정렬O(n log n), for문 에서 O(n) → 총 O(n log n)
// - 공간 복잡도: 추가 메모리를 사용하지 않으므로 O(1) (제자리 정렬 활용)

var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬 // [6,5,3,1,0]

  let h = 0; // 초기값
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1; // 조건을 만족하면 h-index 갱신
    } else {
      break; // 조건을 만족하지 않으면 종료
    }
  }

  return h;
};

console.log(hIndex([3, 0, 6, 1, 5])); // 3
// h = 1: 최소 1번 이상 인용된 논문이 5개 → 만족.
// h = 2: 최소 2번 이상 인용된 논문이 4개 → 만족.
// h = 3: 최소 3번 이상 인용된 논문이 3개 → 만족.
// h = 4: 최소 4번 이상 인용된 논문이 2개 → 조건 불만족!
// h = 5: 최소 5번 이상 인용된 논문이 1개 → 조건 불만족!

console.log(hIndex([1, 3, 1])); // 1
// h = 1: 최소 1번 이상 인용된 논문이 3개 → 만족.
// h = 2: 최소 2번 이상 인용된 논문이 1개 → 조건 불만족!
// h = 3: 최소 3번 이상 인용된 논문이 1개 → 조건 불만족!

console.log(hIndex([0, 0, 0])); // 0 (엣지 케이스)
// h = 1: 최소 1번 이상 인용된 논문이 0개 → 조건 불만족!
// h = 2: 최소 2번 이상 인용된 논문이 0개 → 조건 불만족!
// h = 3: 최소 3번 이상 인용된 논문이 0개 → 조건 불만족!
// → h-index는 0.

console.log(hIndex([100])); // 1 (단일 논문) - 논문이 하나있고 그 논문 인용횟수가 100회
// h = 1: 최소 1번 이상 인용된 논문이 1개 → 만족!
// → h-index는 1.

console.log(hIndex([0, 1, 2, 3, 4])); // 2
// h = 1: 최소 1번 이상 인용된 논문이 5개 → 만족.
// h = 2: 최소 2번 이상 인용된 논문이 4개 → 만족.
// h = 3: 최소 3번 이상 인용된 논문이 2개 → 조건 불만족!
// h = 4: 최소 4번 이상 인용된 논문이 1개 → 조건 불만족!
// → h-index는 2.
