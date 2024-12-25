// 19. Remove Nth Node From End of List
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let maxIdx = 0
    function goDeep(lasthead,idx){
      const index = idx || 0
      if(lasthead.next){
       const last = goDeep(lasthead.next,index+1)
       maxIdx = Math.max(maxIdx,index)
        if(index===(maxIdx+1-n)) return {val:last.val, next:last.next}
       return {val:lasthead.val,next:last}
      }else{
        maxIdx = Math.max(maxIdx,index)
        if(n!==1) return lasthead
        else return null
      }
    }
    const lastHead = goDeep(head)
    return lastHead
};

function NewNode(val,next){
  return {
    val,next
  }
}

function make(arr,i){
  let idx = i || 0
  if(arr[idx]) return NewNode(arr[idx],make(arr,idx+1))
  return null
}

console.log(removeNthFromEnd(make([1,2]),0))