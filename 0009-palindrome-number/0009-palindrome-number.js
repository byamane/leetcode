/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    let reversed = 0
    let original = x

    while (original > reversed) {
        reversed = reversed * 10 + original % 10
        original = Math.floor(original / 10)
    }

    // A palindrome must be either exactly equal (odd length) or equal when ignoring the middle digit (even length)
    return original === reversed || original === Math.floor(reversed / 10)
};
