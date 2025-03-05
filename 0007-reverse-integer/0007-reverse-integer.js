/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false
    let answer = 0
    let stringify = x.toString()

    if (x < 0) {
        isNegative = true
        stringify = stringify.replace('-', '')
    }

    const converted = parseInt(Array.from(x.toString()).reverse().join(''))

    answer = isNegative 
        ? -converted
        : +converted

    if (answer < -(2**31) || answer > (2**31 - 1)) return 0
    else return answer
};