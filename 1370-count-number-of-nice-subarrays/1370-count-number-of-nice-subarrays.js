/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let ans = 0, curr = 0
    let hashMap = new Map()
    hashMap.set(0, 1)

    for (const num of nums) {
        curr += num % 2
        ans += hashMap.get(curr - k) || 0   
        hashMap.set(curr, (hashMap.get(curr) || 0) + 1)
    }

    return ans
};