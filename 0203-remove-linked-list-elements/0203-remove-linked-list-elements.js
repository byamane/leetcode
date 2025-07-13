/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode(0)
    sentinel.next = head
    let curr = sentinel

    while (curr.next) {
        // if next node's value equals value parameter, set curr's next pointer to the one after 
        if (curr.next.val === val) curr.next = curr.next.next
        // else proceed as normal
        else curr = curr.next
    }

    return sentinel.next
};