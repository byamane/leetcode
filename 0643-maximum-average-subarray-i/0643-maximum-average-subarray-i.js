/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let curr = 0

    for (let i=0; i < k; i++){
        curr += nums[i] // Find initial subarray sum
    }

    let ans = curr / k // Set initial average

    for (let i=k; i < nums.length; i++) {
        curr += nums[i] - nums[i-k] // New subarray sum equal to right bound (num[i]) minus left bound (nums[i-k])
        ans = Math.max((curr/k), ans) // Set new highest answer if the new average value is greater than previous set avg
    }

    return ans
};