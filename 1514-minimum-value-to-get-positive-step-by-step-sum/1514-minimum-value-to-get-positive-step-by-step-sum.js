/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // Time complexity: O(n)
    // Space complexity: O(n)

    let prefix = [nums[0]]

    for (let i=1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[i-1])
    }

    if (Math.min(...prefix) < 1) return Math.abs(Math.min(...prefix)) + 1
    else return 1

    // console.log(Math.min(...prefix))
    // return (Math.abs(Math.min(...prefix)) + 1)
    // // return Math.abs(Math.min(...prefix)) + 1
};