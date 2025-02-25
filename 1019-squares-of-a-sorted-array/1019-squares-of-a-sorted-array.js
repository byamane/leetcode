/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let returnArr = []
    let i=0
    
    while (i < nums.length) {
        returnArr.push(nums[i]**2)
        i++
    }
    
    returnArr.sort((a, b) => a-b)
    
    return returnArr
};