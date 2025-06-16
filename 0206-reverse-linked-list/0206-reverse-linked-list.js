/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head

    while (curr) {
        let nextNode = curr.next // Maintain pointer to next node
        curr.next = prev // Reverse pointer direction
        prev = curr // Set next iteration's prev node
        curr = nextNode // Move onto next node
    }

    return prev
};