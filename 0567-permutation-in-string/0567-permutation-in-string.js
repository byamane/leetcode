/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // Time complexity: O(n)
    // Space complexity: O(1) --- bound by 26 possible English letters for hash maps

    if (s1.length > s2.length) return false

    const s1Map = new Map()
    const windowMap = new Map()

    // Build character count for s1
    for (const char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1)
    }

    let left = 0
    for (let right = 0; right < s2.length; right++) {
        const char = s2[right]
        windowMap.set(char, (windowMap.get(char) || 0) + 1)

        // If window size is bigger than s1, remove leftmost char
        if (right - left + 1 > s1.length) {
            const leftChar = s2[left]
            windowMap.set(leftChar, windowMap.get(leftChar) - 1)

            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar)
            }

            left++
        }

        // Compare maps when window size matches s1
        if (right - left + 1 === s1.length) {
            if (mapsAreEqual(s1Map, windowMap)) return true
        }
    }

    return false
};

function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false

    for (const [key, val] of map1) {
        if (map2.get(key) !== val) return false
    }

    return true
}