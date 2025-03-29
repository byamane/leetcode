/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // Time complexity: O(n) --- nums.length
    // Space complexity: O(n) --- map

    let count = 0
    let prefixSum = 0
    let map1 = new Map()
    map1.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]

        if (map1.has(prefixSum - k)) {
            count += map1.get(prefixSum - k)
        }

        map1.set(prefixSum, (map1.get(prefixSum) || 0) + 1)
    }

    return count
};
