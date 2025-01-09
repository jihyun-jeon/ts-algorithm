/**
 * 25.01.09
 * [Lv1] 전화번호 목록 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */

// <나의 풀이> - 호율성 테스트 3,4 실패
function solution_(phone_book: string[]) {
  let store: Set<string> = new Set();

  for (let p of phone_book) {
    for (let s of store) {
      const minLength = Math.min(s.length, p.length);
      const pStart = p.slice(0, minLength);
      const sStart = s.slice(0, minLength);
      if (pStart === sStart) {
        return false;
      }
    }
    store.add(p);
  }

  return true;
}
// <개선 코드 1: 정렬 후 비교>
// 정렬: O(N log N) , 비교: O(N)
// 정렬을 통해 접두사가 될 수 있는 문자열을 앞에 두게 됨 -> 비교 횟수 줄일 수 있음.
function solution2(phone_book: string[]) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    if (phone_book[i + 1]?.startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

// <개선 코드 2 : 해시 활용>
// 접두어 검사 : O(N * M)
// 총 시간 복잡도 : 전화번호 길이에 비례하여 O(N * M)
function solution(phone_book: string[]) {
  const store = new Set(phone_book);

  for (let i = 0; i < phone_book.length; i++) {
    const target = phone_book[i];

    for (let j = 1; j < target.length; j++) {
      if (store.has(target.slice(0, j))) {
        return false;
      }
    }
  }
  return true;
}

// console.log(solution(["119", "97674223", "1195524421"])); //false
// console.log(solution(["12", "123", "1235", "567", "88"])); //false
// console.log(solution(["123", "456", "789"])); // true
// console.log(solution(["123", "3123"])); // true
// console.log(solution(["1192456", "119"])); // false
