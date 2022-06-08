/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++){
    let temp = nums[i]
    if (temp === val){
      nums.splice(i, 1, '_')
    }
  }
  nums.sort()
    
  if (nums.indexOf('_') === -1){
    return nums.length
  } else{
    return nums.indexOf('_')
  }
}