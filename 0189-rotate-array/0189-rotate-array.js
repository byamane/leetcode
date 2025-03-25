/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Two pointers method & three reversals
    // Time complexity: O(n)
    // Space complexity: O(1)

    k = k % nums.length // Rotating k % nums.length determines most efficient amount of rotations
    if (k === 0) return // if remainder is zero, array will have shifted back to its original order

    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]] // Swap first and last elementplaces 
            start++
            end--
        }
    }

    nums.reverse() // Reverse array
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};