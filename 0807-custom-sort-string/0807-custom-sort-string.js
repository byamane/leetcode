/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    // Time complexity: O(n + m) --- order.length & s.length
    // Space complexity: O(n) --- s.length for input hash map

    let input = new Map()
    let stringBuilderArray = []

    // Create hash map with characters in input
        // Count occurences of each character
    for (let i=0; i < s.length; i++){
        input.set(s[i], (input.get(s[i]) || 0) + 1)
    }

    // Iterate through order & check against input hash map to build ordered string
    for (let i=0; i < order.length; i++) {
        if (input.has(order[i])) {
            stringBuilderArray.push(order[i].repeat(input.get(order[i])))
            input.delete(order[i]) // Clear character from hash map after to determine remaining characters
        }
    }

    // Add in remaining characters
    for (const [key, value] of input.entries()) {
        stringBuilderArray.push(key.repeat(value))
    }

    return stringBuilderArray.join("") // Return string from converted array
};