/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash1 = new Map()
    let hash2 = new Map()

    for (let i=0; i < ransomNote.length; i++) {
        hash1.set(ransomNote[i], (hash1.get(ransomNote[i]) || 0) + 1)
    }

    for (let i=0; i < magazine.length; i++){
        hash2.set(magazine[i], (hash2.get(magazine[i]) || 0) + 1)
    }

    // console.log(hash1)
    // console.log(hash2)

    for (const [key, value] of hash1) {
        console.log(hash2.get(key))
        if (value > hash2.get(key) || (value && hash2.get(key) === undefined)) return false
    }

    return true
};