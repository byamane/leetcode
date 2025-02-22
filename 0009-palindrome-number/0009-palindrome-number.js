/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = Array.from(String(x), Number)
    const length = arr.length

    for (let i=0; i < length; i++){
        let start = arr[i]
        let end = arr[length - 1 - i]

        if (start !== end) return false
    }
    return true
};