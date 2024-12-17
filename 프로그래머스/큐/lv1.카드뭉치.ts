/**
 * 24.12.17
 * [Lv1]카드뭉치 - 큐
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */

// <나의 풀이>
function solution(cards1:string[], cards2 : string[], goal:string []) {
    for(let g of goal){
      if (cards1[0] === g) {
        cards1.shift();
      } else if (cards2[0] === g) {
        cards2.shift();
      } else {
        return "No";
      }
    }
    return 'Yes'
}

// <큐 활용해서 풀기>
class Queue_ {
  items: string[] = []
  front: number = 0
  rear: number = 0

  constructor(arr: string[]) {
    this.items = arr; 
    this.rear = arr.length;
  }

  enqueue(item: string) {
    this.items.push(item);
    this.rear++;
  }

  dequeue() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

function solution(cards1: string[], cards2: string[], goal: string[]) {
  const q1 = new Queue_(cards1);
  const q2 = new Queue_(cards2);
  const g = new Queue_(goal)

  while(!g.isEmpty()){
    if (q1.first() === g.first()) {
      q1.dequeue();
      g.dequeue();
    } else if (q2.first() ===  g.first()) {
      q2.dequeue();
      g.dequeue();
    } else {
      break
    }
  }

  return g.isEmpty() ?  "Yes" : 'No' ;
}

// console.log(
//   solution(
//     ["a", "b", "c", "d", "e", "f"],
//     ["string", "or", "integer"],
//     ["string", "a", "b", "c", "d", "e", "f"]
//   )
// ); // 'Yes'
// console.log(solution(["i", "drink", "water"],	["want", "to"],	["i", "want", "to", "drink", "water"]	)) // "Yes"
// console.log(solution(["i", "water", "drink"],	["want", "to"]	,["i", "want", "to", "drink", "water"]	)) // 	"No"

