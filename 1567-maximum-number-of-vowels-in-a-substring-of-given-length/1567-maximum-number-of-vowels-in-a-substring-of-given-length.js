/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    // Time complexity: O(n) --- s.length
    // Space complexity: O(1) --- ans

    let left = 0, curr = 0, ans = 0

    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let right = 0; right < s.length; right++) {
        if (vowels.includes(s[right])) curr++

        while (right - left + 1 > k) {
            if (vowels.includes(s[left])) curr--
            left++
        }

        ans = Math.max(ans, curr)
    }

    return ans
};