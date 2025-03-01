/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    // Time complexity: O(n^2) (two loops of nums.length --- look to refactor)
    // Space complexity: O(1)

    let splits = 0, leftSection = 0, total = 0

    for (const num of nums) {
        total += num
    }

    for (let i=0; i < nums.length - 1; i++) {
        leftSection += nums[i]
        let rightSection = total - leftSection
        
        if (leftSection >= rightSection) splits++
    }

    return splits
}