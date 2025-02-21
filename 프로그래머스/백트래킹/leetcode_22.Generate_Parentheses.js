/**
 * 25.02.20
 * [medium] 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/description/
 * Topics : String, Dynamic Programming, Backtracking
 */
// 정답코드 보며 이해

var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (open, close, str) => {
    if (str.length === n * 2) {
      result.push(str);
    }

    if (open < 3) backtrack(open + 1, close, str + "(");
    if (close < open) backtrack(open, close + 1, str + ")");
  };

  backtrack(0, 0, "");

  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
