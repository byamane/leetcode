/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    // so we know we need:
    // 1 b
    // 1 a
    // 2 l
    // 2 o
    // 1 n

    let validLetters = ['b','a','l','o','n']
    let hashMap = new Map()

    for (let i = 0; i < text.length; i++){
        if (validLetters.includes(text[i])) {
            hashMap.set(text[i], (hashMap.get(text[i]) || 0) + 1)
        }
    }

    let required = {
        b: 1,
        a: 1,
        l: 2,
        o: 2,
        n: 1
    }

    // Calculate how many full "balloon" words can be made
    let minCount = Infinity

    for (let letter in required) {
        let countInText = hashMap.get(letter) || 0
        let possibleWords = Math.floor(countInText / required[letter])
        minCount = Math.min(minCount, possibleWords)
    }

    return minCount
};