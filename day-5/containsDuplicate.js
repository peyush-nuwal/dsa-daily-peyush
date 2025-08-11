const checkDuplicate = (nums) => {
    const res = new Set(nums)
    return res.size != nums.length
}

console.log(checkDuplicate([1,2,4,1]));
console.log(checkDuplicate([1,2,4,5]));