/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    // Time complexity: O(n) --- nums
    // Space complexity: O(n)

    let largest =-1
    let hashMap = new Map()

    for (let i=0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
    }

    for (const [key, value] of hashMap.entries()){
        if (value === 1) largest = Math.max(largest, key)
    }

    return largest
};