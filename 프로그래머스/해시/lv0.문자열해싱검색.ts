/**
 * 24.12.25
 * [lv0] 문자열 검색- 코테합 책 문제
 */

// hash 함수
function polynomialHash(str: string) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
    // (0 * 31 + unicode) % 1,000,000,007
  }

  return hashValue;
}

function solution(stringList: string[], queryList: string[]) {
  const hashList = stringList.map((str) => polynomialHash(str)); // [ 93029210, 898612055, 933454219 ]

  // queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
// [true, false,false,true]

/*
[노트]
1. string.charCodeAt(index)
주어진 인덱스에 해당하는 문자의 유니코드 값(10진수)을 반환합니다.

2. 문자열 해시 함수
문자열을 유니코드를 활용해 숫자로 변환하고, 가중치를 더한 후 테이블 크기로 나눔.
*/
