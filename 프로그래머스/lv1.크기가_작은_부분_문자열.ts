/**
 * 24.11.30
 * [Lv1] lv1.크기가 작은 부분 문자열 - 구현
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
function solution(t: string, p: string) {
  let count = 0;
  const targetNum = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const str = t.slice(i, i + p.length);
    if (Number(str) <= targetNum) {
      count++;
    }
  }

  return count;
}

// console.log(solution("3141592", "271")); // 2 (314, 141, 415, 159, 592) (141, 159)
// console.log(solution("500220839878", "7")); // 8
// console.log(solution("10203", "15")); // 3 ("10", "02", "20", "03") ("10", "02", "03")
