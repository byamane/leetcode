/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabetMap = new Map();
    const arr = Array.from(sentence)

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        alphabetMap.set(letter, `Value for ${letter}`);
    }
    
    for (let i=0; i < arr.length; i++){
        if (alphabetMap.has(arr[i])){
            alphabetMap.delete(arr[i]);
        }    
    }
    
    if (alphabetMap.size) return false
    return true
};