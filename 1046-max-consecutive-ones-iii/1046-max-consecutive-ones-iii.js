/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, kCount = 0, ans = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            kCount++ // increase current count of 0s
        }

        while (kCount > k) {
            if (nums[left] === 0) {
                kCount-- // reduce current count of 0s
            }
            left++ // increase left bound by one index
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};