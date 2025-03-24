/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    // Time complexity: O(n)
    // Space complexity: O(n)
    
    let right = 0, curr = [], dnaString = '', ans = []
    let hashMap = new Map()
    let arr = Array.from(s)

    // Constraint metric: substring must occur > 1
    
    // Determine first substring
    for (let i=0; i < 10; i++) {
        curr.push(arr[i])
        right++
    }
    hashMap.set(curr.join(""), 1)

    while (right < arr.length) {
        curr.shift() // Remove first element
        curr.push(arr[right]) // Add new element

        dnaString = curr.join("")

        hashMap.set(dnaString, (hashMap.get(dnaString) || 0) + 1)

        if (hashMap.get(dnaString) > 1) ans.push(dnaString)

        right++
    }

    return Array.from(new Set(ans)) // unique values only
};