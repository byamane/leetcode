/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let result = ''
  if (a.length > b.length) {
    b = b.padStart(a.length, '0')
  } else if (a.length < b.length) {
    a = a.padStart(b.length, '0')
  }
  let addOne = 0
  
  for (let i = a.length-1; i >= 0 ; i--) {
    if (a[i] === '0' && b[i] === '0'){
      if (addOne) {
        result = '1' + result
        addOne = 0
      } else {
        result = '0' + result
        addOne = 0
      }
    } else if (a[i] === '1' && b[i] === '0' || a[i] === '0' && b[i] === '1'){
      if (addOne){
        result = '0' + result
        addOne = 1
      } else {
        result = '1' + result
        addOne = 0
      }
    } else if (a[i] === '1' && b[i] === '1'){
      if (addOne) {
        result = '1' + result
        addOne = 1
      } else {
        result = '0' + result
        addOne = 1
      }
    }
  }

  if (addOne) {
    result = '1' + result
  }

  return result

}