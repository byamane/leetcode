/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    // Time complexity: O(n)
    // Space complexity: O(1)

    let hash = new Map()
    let ans = Infinity

    for (let i=0; i < cards.length; i++) {
        // If hash map contains matching card, compare minimum amount of cards needed for pair 
        if (hash.has(cards[i])){
            ans = Math.min(ans, i - hash.get(cards[i]) + 1 ) 
        }

        hash.set(cards[i], i)
    }

    return ans === Infinity ? -1 : ans
};