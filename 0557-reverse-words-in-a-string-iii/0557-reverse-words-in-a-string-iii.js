/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Time complexity: O(n)
    // Space complexity: O(n)
    
    let arr = [], i = 0
    const split = s.split(' ') // Split sentence into array of words

    while (i < split.length) 
    {
        // Reverse each word in sentence while still maintaining sentence-word order
        let reversed = Array.from(split[i]).reverse().join('') 
        arr.push(reversed)
        i++
    }

    return arr.join(' ')
};