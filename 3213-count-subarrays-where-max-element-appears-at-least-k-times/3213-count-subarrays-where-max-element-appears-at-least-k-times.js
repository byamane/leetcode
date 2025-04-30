/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    // Sliding window

    // Time complexity: O(n)
    // Space complexity: O(1)

    let left = 0, curr = 0, ans = 0

    const max = Math.max(...nums)

    for (let right=0; right < nums.length; right++){
        if (nums[right] === max) curr++

        while (curr === k) {
            if (nums[left] === max) curr--
            left++
        }
        
        ans += left
    }

    return ans
};