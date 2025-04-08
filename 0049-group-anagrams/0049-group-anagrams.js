/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Time complexity: O(n)
    // Space complexity: O(n)

    let hash = new Map()

    for (let i=0; i < strs.length; i++){
        let sorted = Array.from(strs[i]).sort().join('')
        
        if (hash.has(sorted)) {
            let arr = hash.get(sorted)
            arr.push(strs[i])
            hash.set(sorted, arr)
        }
        else hash.set(sorted, [strs[i]])
    }

    return Array.from(hash.values())
};