/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // Time complexity = O(n) --- nums
    // Space complexity = O(n) --- hash

    let minFrequency = nums.length / 3
    let hash = new Map()
    let majority = []

    // Pre-processing hash map
    for (const num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1)
    }

    // Evaluate frequency of hash map entries and push those meeting condition into returned array
    for (const [key, val] of hash.entries()) {
        if (val > minFrequency) majority.push(key)
    }

    return majority
};