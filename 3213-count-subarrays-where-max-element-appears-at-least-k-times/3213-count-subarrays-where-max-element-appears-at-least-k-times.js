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

        // Move left bound until curr is less than k
        while (curr === k) {
            if (nums[left] === max) curr--
            left++
        }

        // Since we moved left until the constraint metric was no longer met:
            // All subarrays left to right prior were valid, thus can add left to get current amount of valid subarrays to answer 
        ans += left
    }

    return ans
};