/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    
  for (let i = 0; i < nums.length; i++){
    let temp = nums[i]
    if (temp === nums[i+1]){
      let idx = nums.indexOf(temp)
      nums.splice(idx, 1, 101)
    }
  }
    
  if (nums.indexOf(101) === -1){
    return nums.length
  } else{
    return nums.sort((a,b) => a-b).indexOf(101)
  }
};