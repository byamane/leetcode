/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // Prefix sum
    let prefix = gain[0]
    let highest = Math.max(0, prefix) // Biker always starts trip at point 0 & altitude = 0

    for (let i=1; i < gain.length; i++) {
        prefix = prefix + gain[i]
        highest = Math.max(highest, prefix) // Assess highest every iteration
    }

    return highest
};