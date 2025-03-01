/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Time complexity: O(n) (one loop of nums.length)
    // Space complexity: O(n) (map size)

    const map1 = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map1.has(nums[i])) {
            const firstIndex = map1.get(nums[i])

            if (Math.abs(firstIndex - i) <= k) return true
            map1.set(nums[i], i) // move index to new highest point for future sum evals
        }
        else map1.set(nums[i], i)
    }

    return false
};