/**
 * 25.01.13
 * [medium] 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 */

/**
 * @param {string} s
 * @return {string}
 */

// <나의 풀이> - 공백 기준으로 split
// 6ms , Beats 16.55%
var reverseWords = function (s) {
  const splitStr = s.split(" ").reverse(); //  [ 'example', '', '', 'good', 'a' ]

  const sumStr = splitStr.reduce((acc, cur) => {
    return acc.at(-1) === " " ? acc + `${cur}` : acc + ` ${cur}`;
  }, "");
  return sumStr.trim();
};

// <개선 코드> - 정규식으로 활용하여 문자만 분할
// 1ms , Beats 87.53%
function reverseWords(s) {
  const splitStr = s.trim().split(/\s+/).reverse(); //  [ 'example', 'good', 'a' ]
  return splitStr.join(" ");
}

// console.log(reverseWords("the sky is blue")); // "blue is sky the"
// console.log(reverseWords("  hello world  ")); //  "world hello"
// console.log(reverseWords("a good   example")); // "example good a"

/*
<시간 복잡도>
1. s.split() – 문자열을 공백을 기준으로 나누는 작업. 문자열의 길이 `n`에 대해 O(n) 의 시간 복잡도 
2. reverse() – 리스트의 요소(단어)를 뒤집는 작업도 O(n) 
3. join() – 리스트의 단어들을 단일 공백으로 연결하는 작업 역시 O(n)  

- 총 시간 복잡도 : 각 단계가 O(n) 이므로 전체 알고리즘의 시간 복잡도는 O(n) 
*/

/*
[노트]
1. split(separator, limit);
- separator : 문자열이나 정규표현식
- limit : 끊어진 문자열의 최대 개수

2. 정규식
1) \s: 공백 문자  
2) + : 바로 앞의 패턴(\s)이 하나 이상 연속으로 등장하는 것을 의미 
     : " " → 연속된 공백 전체를 매칭
*/
