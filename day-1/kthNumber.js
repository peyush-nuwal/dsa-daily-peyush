
// K’th Smallest / Largest Element in Unsorted Array | Expected Linear Time
// Last Updated: 23 Jul, 2025

// Given an array of distinct integers and an integer k, where k is smaller than the array's size, the task is to find the k'th smallest element in the array.
// Examples:
// Input: arr = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: The sorted array is[3, 4, 7, 10, 15, 20], so the 3rd smallest element is 7.

// Input: arr = [7, 10, 4, 3, 20, 15], k = 4
// Output: 10
// Explanation: The sorted array is[3, 4, 7, 10, 15, 20], so the 4th smallest element is 10.


const kth = (nums,k) => {
    const temp = nums.sort((a,b)=>a-b)
    return temp[k-1]
}


console.log(kth([7, 10, 4, 3, 20, 15], k = 3));
console.log(kth([7, 10, 4, 3, 20, 15], k = 4));