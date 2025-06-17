/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let ans = 0

    let slow = head
    let fast = head

    let spacing = null // N-index window between first & second twin nodes
    let prev = null

    // 1. Find midpoint of list (slow variable)
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // 2. Reverse linked list from midpoint to end
    while (slow) {
        let nextNode = slow.next // save next pointer
        slow.next = prev  
        prev = slow
        slow = nextNode // move to next node
    }

    spacing = prev // set spacing

    // 3. Calculate max sum for each n-spaced pair         
    while (spacing) {
        ans = Math.max(ans, head.val + spacing.val)
        spacing = spacing.next
        head = head.next
    }

    return ans
};