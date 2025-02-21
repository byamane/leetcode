/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const binaryMap = new Map()
    const charCount = nums.length
    let valueFound = false
    let uniqueString = ''

    // Map setting logic
    for (let i=0; i < nums.length; i++) {
        let item = nums[i]
        binaryMap.set(item, item)
    }

    // Build out binary string to test against Map object
    const createTestValue = n => {
        let testValue = ''
        
        for (let i = 0; i < n; i++) {
            testValue += Math.floor(Math.random() * 2) // Generate 0 or 1 randomly each iteration
        }

        return testValue
    }

    // While no unique value is found, continue generating new binary strings to test against our hash map
    while (!valueFound) {
        let testString = createTestValue(charCount)

        if (!binaryMap.has(testString)) {
            valueFound = true
            uniqueString = testString
            return uniqueString
        }
    }
};