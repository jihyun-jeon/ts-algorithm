/**
 * 24.12.20
 * [lv2] 할인행사 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */

// <나의 풀이>
type ProductCount = Record<string, number>;

function isEqual(obj1: ProductCount, obj2: ProductCount) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function solution(want: string[], number: number[], discount: string[]) {
  let count = 0;
  const wantObj: ProductCount = {};

  want.forEach((w, i) => {
    wantObj[w] = number[i];
  });

  const SALE_PERIOD = 10;

  for (let i = 0; i <= discount.length - SALE_PERIOD; i++) {
    const discountObj: ProductCount = {};

    for (let j = i; j < i + SALE_PERIOD; j++) {
      discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
    }

    if (isEqual(wantObj, discountObj)) {
      count++;
    }
  }

  return count;
}

// console.log(
//   solution(
//     ["banana", "apple", "rice", "pork", "pot"],
//     [3, 2, 2, 2, 1],
//     [
//       "chicken",
//       "apple",

//       "apple",
//       "banana",
//       "rice",
//       "apple",
//       "pork",
//       "banana",
//       "pork",
//       "rice",
//       "pot",
//       "banana",
//       "apple",

//       "banana",
//     ]
//   )
// ); // 	3
// console.log(
//   solution(
//     ["apple"],
//     [10],
//     [
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//     ]
//   )
// ); //	0

/*
function solution(want, number, discount) {
  let count = 0;
  const wantObj = {}; 

  want.forEach((w, i) => {
    wantObj[w] = number[i];
  });

  const loopCount = discount.length - number.reduce((acc, cur) => acc + cur);

  for (let i = 0; i <= loopCount; i++) {
    const wantObj2 = { ...wantObj };
    const discount10 = discount.slice(i, i + 10);

    for (let d of discount10) {
      if (wantObj2[d] === undefined || wantObj2[d] === 0) {
        break;
      } else {
        wantObj2[d] = wantObj2[d] - 1;
      }
    }

    const sum = Object.values(wantObj2).reduce(
      (acc, cur) => acc + cur,
      0
    );

    if (sum === 0) {
      count++;
    }
  }

  return count;
}
*/
