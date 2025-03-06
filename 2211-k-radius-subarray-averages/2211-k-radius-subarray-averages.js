/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let prefix = [nums[0]]
    let ans = []

    for (let i=1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }

    for (let i=0; i < prefix.length; i++){
        
        const avg = k !== 0 ? Math.floor((prefix[i+k] - prefix[i-k] + nums[i-k])/(2 * k +1)) : -1

        if (i-k < 0 || i+k > prefix.length - 1) ans.push(-1)
        else if (k === 0) ans = nums
        else ans.push(avg)
    }

    return ans
};