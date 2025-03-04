/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function(arr1, arr2) {
    // Time complexity: O((n + m) log(n + m) 
        // n is length of arr1
        // m is length of arr2
        // log(n+m) for sort()
    // Space complexity: O(n+m)

    let mapCheck = new Map()

    for (const obj of arr1) mapCheck.set(obj.id, obj)

    for (const obj of arr2) {
        if (mapCheck.has(obj.id)) {
            let existing = mapCheck.get(obj.id)
            let newObj = { ...existing, ...obj }

            mapCheck.set(obj.id, newObj)
        }
        else mapCheck.set(obj.id, obj)
    }

    return Array.from(mapCheck.values()).sort((a,b) => a.id - b.id)
};