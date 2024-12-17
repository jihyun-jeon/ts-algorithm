/**
 * 24.12.14
 * [lv1] 요세푸스 - 큐
 * https://www.acmicpc.net/problem/1158 (프로그래머스 문제 없음)
 */

// <1. shift메서드 활용한 풀이>
function solution_(n: number, k: number) {
  const result = [];
  const queue: number[] = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length > 0) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift() as number);
    }
    result.push(queue.shift() as number);
  }

  return result;
}

// <2. 배열 활용한 풀이>
class Queue<T> {
  private items: T[];
  private front: number;

  constructor() {
    this.items = [];
    this.front = 0;
  }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.items.length - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

function solution(n: number, k: number) {
  const q = new Queue();
  const result = [];

  for (let i = 1; i <= n; i++) {
    q.push(i);
  }

  while (!q.isEmpty()) {
    for (let i = 0; i < k - 1; i++) {
      q.push(q.pop());
    }
    result.push(q.pop());
  }

  return result;
}

console.log(solution(7, 3)); // [3, 6, 2, 7, 5, 1, 4]
