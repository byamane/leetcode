/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if (word1.length !== word2.length) return false

    let hash1 = new Map()
    let hash2 = new Map()

    // Build out hash/frequency maps for word1 and word2 
    for (const char of word1) {
        hash1.set(char, (hash1.get(char) || 0) + 1)
    }

    for (const char of word2) {
        hash2.set(char, (hash2.get(char) || 0) + 1)
    }

    /* ------ Evaluation ------ */
    // Step 1: compare unique character sets
    const keys1 = Array.from(hash1.keys()).sort().join('')
    const keys2 = Array.from(hash2.keys()).sort().join('')
    if (keys1 !== keys2) return false

    // Step 2: compare sorted frequency values
    const values1 = Array.from(hash1.values()).sort((a, b) => a - b)
    const values2 = Array.from(hash2.values()).sort((a, b) => a - b)

    return values1.every((val, i) => val === values2[i])
};
