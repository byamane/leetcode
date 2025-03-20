/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let ans = 0
    let set = new Set(arr)
    
    for (let i=0; i < arr.length; i++) {
        if (set.has(arr[i]+1)) ans++
    }
    
    return ans
};