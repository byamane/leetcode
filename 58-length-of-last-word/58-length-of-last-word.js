/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  let trimmed = s.trim()
  let arr = trimmed.split(' ')
  let length = arr[arr.length - 1].length
  return length
}