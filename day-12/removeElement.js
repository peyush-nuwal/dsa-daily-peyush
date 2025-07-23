
let nums = [3, 4,6,7,2,3,2,2,2]
var removeElement = function (nums, val) {
  let i = 0
  let n = nums.length - 1
  while (i < n) {
    
      if (nums[i] === val) {

        [nums[i], nums[n - 1]] = [nums[n - 1], nums[i]]
        n--
      } else {
        i++
      }
    
  }
  return n
};
console.log("input",nums)
console.log(removeElement(nums, 3));

console.log(nums)
