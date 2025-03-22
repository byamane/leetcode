/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let flattened = []
    
    const flatten = (nums, level) => {

        for (const num of nums) {
            if (Array.isArray(num) && level > 0) {
                flatten(num, level - 1)
            }
            else {
                flattened.push(num)
            }
        }
        
    }
    
    flatten(arr, n)
    return flattened
};