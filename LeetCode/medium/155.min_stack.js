/**
 * 25.01.24
 * [medium] 155. Min Stack
 * https://leetcode.com/problems/min-stack/description/
 * Topics : Stack Design
 */

// <나의 풀이>
// 161ms Beats-10.70%
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};

// <개선코드>
// 13ms  Beats 53.29%
class MinStack {
  constructor() {
    this.mainStack = []; // 스택 데이터 저장
    this.minStack = []; // 현재 최소값 저장
  }

  push(x) {
    this.mainStack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack.at(-1)) {
      this.minStack.push(x);
    }
  }

  pop() {
    // mainStack에서 값을 제거하고, minStack도 값이 같으면 제거
    if (this.mainStack.pop() === this.minStack.at(-1)) {
      this.minStack.pop();
    }
  }

  top() {
    return this.mainStack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}
