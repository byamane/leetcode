/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr = []
    let newChunk

    for (let i=0; i < arr.length; i += size)
    {        
        newChunk = arr.slice(i, i + size)
        newArr.push(newChunk)
    }

    return newArr
};
