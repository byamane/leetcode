/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hash = new Set(jewels)
    let ans = 0

    for (const stone of stones) {
        if (hash.has(stone)) ans++
    }

    return ans
};