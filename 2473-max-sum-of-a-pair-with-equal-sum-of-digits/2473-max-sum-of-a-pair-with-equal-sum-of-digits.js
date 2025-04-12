/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    // Time complexity: O(n + m)
    // Space complexity: O(n)

    let hash = new Map()
    let ans = -1

    for (const num of nums) {
        let str = num.toString() // Could use string or array to break up digits
        let sum = 0
        
        for (let i=0; i < str.length; i++){
            sum += parseInt(str[i]) // Sum up all digits per num
        }

        // If hash has sum, calculate the highest sum of two nums
        if (hash.has(sum)) {
            ans = Math.max(ans, num + hash.get(sum))
            // If current num with matching sum is larger than stored num, replace hash map entry 
            hash.set(sum, Math.max(num, hash.get(sum)))
        }
        // If hash doesn't have sum, set into hash map 
        else if (!hash.has(sum)) hash.set(sum, num)
    }

    return ans
};