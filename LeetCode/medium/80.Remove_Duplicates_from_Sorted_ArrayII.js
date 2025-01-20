/**
 * 25.01.20
 * [medium] 80. Remove_Duplicates_from_Sorted_ArrayII
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 * Topics : Array , Two Pointers
 */

var removeDuplicates = function (nums) {
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3])); // 5, nums = [ 1, 1, 2, 2, 3, 2, 3 ]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7, nums = [0,0,1,1,2,3,3,_,_]

/*
i = 2   [ 1, 1, (1), 2, 2, 3] <- nums
K = 2-2 [ (1), 1, _, _, _, _] <- 처음 2개는 중복이든 아니든 무조건 카운팅됨. 때문에 k=2 부터 시작

i = 3   [ 1, 1, 1, (2), 2, 3]
K = 2-2 [ (1), 1, _, _, _, _] // k++ // [ (1), 1, 2, _, _, _]

i = 4   [ 1, 1, 1, 2, (2), 3]
K = 3-2 [ 1, (1), 2, _, _, _] // k++ // [ 1, 1, 2, 2, _, _]

i = 5   [ 1, 1, 1, 2, 2, (3)]
K = 4-2 [ 1, 1, (2), 2, _, _] // k++ // [1, 1, 2, 2, 3, _, _]

k = 5가됨.

*/
