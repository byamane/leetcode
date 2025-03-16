/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let ans = []
    let j = s.length - 1

    const isLetter = char => {
        return /^[a-zA-Z]$/.test(char)
    }

    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            while (!isLetter(s[j])) j--

            ans.push(s[j])
            j--
        } else {
            ans.push(s[i])
        }
    }

    return ans.join('')
};