/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefix = [nums[0]]
    
    for (let i=1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[i-1])
    }

    for (let i=0; i < prefix.length; i++){
        if (prefix[prefix.length-1] - prefix[i] + nums[i] === prefix[i]) return i    
    }

    return -1
};