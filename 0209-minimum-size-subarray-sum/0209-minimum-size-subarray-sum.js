/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // Time complexity: O(n) --- nums.length
    // Space complexity: O(1)

    let left = 0, curr = 0, ans = Infinity

    for (let right=0; right < nums.length; right++){
        curr += nums[right]

        while (curr >= target) {
            ans = Math.min(ans, right - left + 1) // Check in the beginning to ensure minimum left value is used
            curr -= nums[left]
            left++
        }        
    }

    return ans === Infinity ? 0 : ans
};