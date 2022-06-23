/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let lcp = ''
  
  if (strs === null || strs.length === 0) return lcp

  // Finding minimum length across the entire array of strings
  let minLength = strs[0].length
  for (let i=1; i < strs.length; i++){
    minLength = Math.min(minLength, strs[i].length)
    // Each time a new minimum length is found, minLength set to that string's length
  }

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i]

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) return lcp
    }
    lcp += current
  }
  return lcp
}