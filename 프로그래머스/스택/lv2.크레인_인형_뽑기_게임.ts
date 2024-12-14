/**
 * 24.12.13
 * [lv2] 크레인 인형 뽑기 게임 - 스택
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */

function solution(boards: number[][], moves: number[]) {
  let result = 0;
  const stack: number[] = [];
  const cols: number[][] = new Array(boards[0].length).fill(null).map(() => []);
  //  [[ 4, 3 ],  [ 2, 2, 5 ],  [ 1, 5, 4, 1 ], [ 4, 3 ],  [ 3, 1, 2, 1 ] ]

  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      const b = boards[i][j];
      if (b > 0) {
        cols[j].push(b);
      }
    }
  }

  for (let m of moves) {
    const target = cols[m - 1].shift();

    if (!target) {
      continue;
    }

    if (stack.at(-1) === target) {
      stack.pop();
      result += 2;
    } else {
      stack.push(target);
    }
  }

  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4

/*
[노트] 
특정 길이를 갖은 배열 만들기

<방법1. new Array 활용>
1) new Array(5).fill([]);
이렇게 하면 모든 요소가 동일한 배열 객체를 참조하게 됨. 모든 배열이 하나의 같은 참조값을 공유하게됨!!

2) new Array(5).fill(null).map(() => []);
때문에 각 요소를 새로운 배열로 초기화 해야함.

<방법2. Array.from>
Array.from() : 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 반환
 
1) String으로 배열 만들기 
-  Array.from('foo') // [f,o,o]

2) 화살표 함수와 Array.from() 사용하기
- Array.from([1, 2, 3], (x) => x + x) // [2,4,6]
- Array.from(arguments); // 유사배열을 배열로 만듦

3) length 속성을 가진 객체를 기반으로 새로운 배열을 생성
- Array.from({ length: 5 }); // 배열의 각 위치가 `undefined`로 초기화 
- Array.from({ length: 5 }, (v, i) => i); // [0,1,2,3,4]
- Array.from({ length: 5 }, () => []);  // [[],[],[],[],[]]
*/
