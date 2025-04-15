/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Time complexity: O(n + m)
    // Space complexity: O(n + m)

    if (ransomNote.length > magazine.length) return false

    let ransomHash = new Map()
    let magazineHash = new Map()

    // Iterate through ransomNote string to set ransomHash
    for (let i=0; i < ransomNote.length; i++) {
        ransomHash.set(ransomNote[i], (ransomHash.get(ransomNote[i]) || 0) + 1)
    }

    // Iterate through magazine string to set magazineHash
    for (let i=0; i < magazine.length; i++){
        magazineHash.set(magazine[i], (magazineHash.get(magazine[i]) || 0) + 1)
    }

    // Return false:
        // If magazine hash map doesn't contain a value for the key --- "undefined"
        // Or if the value in ransom hash map for said key is greater than the value in magazine hash map
    for (const [key, value] of ransomHash) {
        if (magazineHash.get(key) === undefined || value > magazineHash.get(key)) return false
    }

    return true
};