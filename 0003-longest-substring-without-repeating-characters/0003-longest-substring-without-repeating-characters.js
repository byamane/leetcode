/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Time complexity: O(n) --- for loop of s length
    // Space complexity: O(n) --- one Map

    const map1 = new Map()

    let left = 0, ans = 0

    for (let right = 0; right < s.length; right++) {
        if (map1.has(s[right])) {
            left = Math.max(left, map1.get(s[right]) + 1) // Move left bound to the right + 1 index           
        }
        map1.set(s[right], right)

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};