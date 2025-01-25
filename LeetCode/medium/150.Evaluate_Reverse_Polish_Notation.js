/**
 * 25.01.25
 * [medium] 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * Topics : Array Math Stack
 */

// 6ms Beats 57.77%
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "/": (x, y) => Math.trunc(x / y),
    "*": (x, y) => x * y,
  };

  for (let t of tokens) {
    if (operators[t]) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      const res = operators[t](num1, num2);
      stack.push(res);
    } else {
      stack.push(+t);
    }
  }

  return stack[0];
};

// console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9 // ((2 + 1) * 3) = 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6 // (4 + (13 / 5)) = 6
// console.log(
//   evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// );
// 22 // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

/* 노트
< Math.trunc vs Math.floor 차이점 >

1. Math.floor() :  가장 가까운 작은 정수로 이동한다. / !! 음수의 경우 더 작은 정수로 내림된다!!
 ex) Math.floor(4.9);  // 4
 ex) Math.floor(-4.9); // -5
 ex) Math.floor(-1.1) // -2
 ex) Math.floor(1.1) // 1


2. Math.trunc() : 음수와 양수 모두 절대값의 정수 부분만 남긴다.
  ex) Math.trunc(4.9);  // 4
  ex) Math.trunc(-4.9); // -4
  ex) Math.trunc(-1.1) // -1
  ex) Math.trunc(1.1) // 1
*/
