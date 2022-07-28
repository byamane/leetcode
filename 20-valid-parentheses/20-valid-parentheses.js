/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const hashMap = { "(" : ")", "{" : "}", "[" : "]" }
  const stack = []
  for (let i of s) {
    if (hashMap[i]) {
      // i is an opening bracket
      stack.push(hashMap[i])
    } else if (stack.length > 0 && stack[stack.length - 1] === i) {
      // i is a closing bracket and top of stack matches
      stack.pop()
    } else {
      // i is a closing bracket and top of the stack doesnt match
      return false
    }
  }
  return stack.length === 0
}