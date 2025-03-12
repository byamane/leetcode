/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0
    
    let left=0, ans=0
    let map1 = new Map()

    for (let right = 0; right < s.length; right++) {
        // Increment character count in map
        map1.set(s[right], (map1.get(s[right]) || 0) + 1)

        while (map1.size > k) { // Only reduce when the distinct count exceeds k
            map1.set(s[left], map1.get(s[left]) - 1)
            if (map1.get(s[left]) === 0) {
                map1.delete(s[left]) // Remove from map when count is 0
            }
            left++
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};