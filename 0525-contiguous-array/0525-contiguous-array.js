/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // Time complexity: O(n) --- nums.length and prefix.length (2n)
    // Space complexity: O(n) --- prefix

    let curr = 0, ans = 0
    let hash = new Map()

    let prefix = nums[0] === 0 ? [-1] : [1]

    // Prefix sum
    for (let i=1; i < nums.length; i++){
        if (nums[i] === 0) prefix.push(prefix[i-1] - 1)
        else prefix.push(prefix[i-1] + 1)
    }

    // If total sum is 0, nums.length is largest contiguous subarray 
    if (prefix[prefix.length - 1] === 0) return nums.length

    // If hash map contains current sum:
        // Means between previous index & current index, the subarray contains equal 1s and 0s
        // Calculate difference between indices for subarray length
    for (let i=0; i < prefix.length; i++){
        if (hash.has(prefix[i])) {     
            ans = Math.max(ans, i - hash.get(prefix[i]))
        }
        else if (prefix[i] === 0) ans = Math.max(ans, i + 1) // If prefix sum = 0, equal number 1s and 0s
        else hash.set(prefix[i], i)
    }

    return ans
};