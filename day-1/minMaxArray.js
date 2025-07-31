
// Maximum and minimum of an array using minimum number of comparisons
// Last Updated: 23 Jul, 2025

// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

//Examples:
// Input: arr[] = { 3, 5, 4, 1, 9}
// Output: Minimum element is: 1
// Maximum element is: 9

// Input: arr[] = { 22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
// Maximum element is: 35



const minMax = (nums) => {
    let min = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++){
        if (nums[i] < min) {
             min=nums[i]
        }
        if (nums[i] >max) {
            max = nums[i]
        }
    }
    return {min:min,max:max}
}


console.log(minMax([3, 5, 4, 1, 9]));



// getting minMax with minium comparisons




const minCop = (nums) => {
    let min, max;
    let i;
  
    if (nums.length % 2 === 0) {
        // even  number of elements
        
        if (nums[0] > nums[1]) {
            max = arr[0];
            min = arr[1];
        } else {
            max = arr[1];
            min = arr[0];
        }
        i = 2;

    } else {
        // Odd number of elements

        max = min = nums[0];
        i = 1;
    }
    
    while (i < nums.length - 1) {
        let localMin, localMax;

        if (nums[i] > nums[i + 1]) {
            localMax = nums[i];
            localMin = nums[i + 1];
        } else {
            localMax = nums[i + 1];
            localMin = nums[i];
        }

        if (localMax > max) max = localMax;
        if (localMin < min) min = localMin;

        i += 2;
    }
    return {min,max}
}


console.log(minCop([3, 5, 4, 1, 9]));