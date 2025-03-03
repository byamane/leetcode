/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // Time complexity: O(n)
    // Space complexity: O(1)

    let minimum = 0
    let total = 0

    for (let i=0; i < nums.length; i++){
        total += nums[i]
        minimum = Math.min(minimum, total) // Having minimum set at 0 ensures for non-negative sums we return 1  
    }

    return -minimum + 1
};