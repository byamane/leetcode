/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // Change previous solution from Map() to Set() since values is not needed

    const alphabetSet = new Set();
    const arr = Array.from(sentence)

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        alphabetSet.add(letter);
    }
    
    for (let i=0; i < arr.length; i++){
        if (alphabetSet.has(arr[i])){
            alphabetSet.delete(arr[i]);
        }    
    }
    
    if (alphabetSet.size) return false
    return true
};