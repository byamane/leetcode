/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // Time complexity: O(n + m) --> paths.length + ends.length
    // Space complexity: O(2n) --> O(n)

    let starts = new Map()
    let ends = new Map()

    for (const path of paths) {
        starts.set(path[0], (starts.get(path[0]) || 0) + 1)
        ends.set(path[1], (ends.get(path[1]) || 0) + 1)          
    }

    for (const [key, value] of ends.entries()) {
        if (value === 1 && !starts.has(key)) return key
    }
};