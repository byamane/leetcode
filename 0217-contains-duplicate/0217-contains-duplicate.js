/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Time complexity: O(n)
    // Space complexity: O(n)
    
    let hash = new Map()
    for (const num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1)
        if (hash.get(num) >= 2) return true
    }

    return false
};