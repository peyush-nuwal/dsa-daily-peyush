const arr=[0,1,2,0,0,0,1,2,1,2,]
var sortColors = function (nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++
            mid++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }

    }

};
sortColors(arr)
console.log("color before : ",arr)
console.log("color after : ",  arr)