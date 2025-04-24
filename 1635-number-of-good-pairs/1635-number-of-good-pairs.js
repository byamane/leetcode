/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const counts = new Map()
    let ans = 0

    for (const num of nums) {
        const count = counts.get(num) || 0
        ans += count
        counts.set(num, count + 1)
    }

    return ans
};