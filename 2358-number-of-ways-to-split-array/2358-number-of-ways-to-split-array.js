/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    // Time complexity: O(n^2) (two loops of nums.length --- look to refactor)
    // Space complexity: O(n) (prefix)

    let prefix = [nums[0]]
    let splits = 0

    for (let i=1; i < nums.length; i++) { 
        prefix.push(nums[i] + prefix[prefix.length- 1])
    }
    
    for (let i=0; i < nums.length - 1; i++) {
        let secondHalfSum = prefix[nums.length - 1] - prefix[i]

        if (prefix[i] >= secondHalfSum) splits++
    }

    return splits
};