/**
 * 25.01.22
 * [medium] 946. Validate Stack Sequences
 * https://leetcode.com/problems/validate-stack-sequences/submissions/1517912189/
 * Topics : Array , Stack , Simulation
 */

// 나의 풀이1
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let idx = 0;

  for (let pn of popped) {
    if (stack.at(-1) !== pn) {
      const pnIdx = pushed.indexOf(pn);

      if (idx > pnIdx) {
        return false;
      }

      const sliced = pushed.slice(idx, pnIdx + 1);
      stack.push(...sliced);
      idx = pnIdx + 1;
    }

    if (stack.at(-1) === pn) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true;
};

// <개선코드>
// 2ms Beats62.09%
// var validateStackSequences = function (pushed, popped) {
//   const stack = []; // 1
//   let popIdx = 0; // 1 2 3 4 5

//   for (let n of pushed) {
//     stack.push(n);

//     while (stack.at(-1) === popped[popIdx]) {
//       if (stack.at(-1) === undefined || popped[popIdx] === undefined) {
//         break;
//       }
//       stack.pop();
//       popIdx++;
//     }
//   }

//   return stack.length === 0;
// };

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // t
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // f
