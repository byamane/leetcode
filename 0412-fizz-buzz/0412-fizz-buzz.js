/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // Time complexity: O(n) --- n.length
    // Space complexity: O(n) --- answer is n.length

    let answer = []
    const arr = Array.from({ length: n }, (_, i) => i + 1) // Create array from 1 to n

    for (let i=0; i < arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) answer.push("FizzBuzz")
        else if (arr[i] % 3 === 0) answer.push("Fizz")
        else if (arr[i] % 5 === 0) answer.push("Buzz")
        else answer.push(arr[i].toString())
    }

    return answer
};