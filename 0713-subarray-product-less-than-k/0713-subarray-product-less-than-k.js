/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0 // nums is array of positive integers
    }
    
    let left=0, curr=1, ans=0

    for (let right=0; right < nums.length; right++){
       
        curr *= nums[right]

        while (curr >= k) {
            curr /= nums[left]
            left++
        }

        ans += right - left + 1; 
        // Calculate the subarray, and consequently, number of valid individual subarrays within each subarray via length that fulfills constraint metric
    }

    return ans
};