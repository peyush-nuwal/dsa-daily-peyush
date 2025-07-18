var removeDuplicates = function (nums) {
    
    let k=1
    for (let i = 1; i < nums.length; i++) {
        if (nums[k]!==nums[i-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};


console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]