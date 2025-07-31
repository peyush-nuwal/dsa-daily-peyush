const sep = (nums) => {
    let i = 0
    for (let j = 0; j < nums.length; j++){
        if (nums[j] < 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
    }
    }
    return nums
}
 
console.log(sep([12,43,-4,3,-2,-8,8]))