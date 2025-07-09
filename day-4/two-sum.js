// Problem 2: Two Sum
// Type: Array, Hash Map
// Level: Easy - Medium
// Asked in: Amazon, Microsoft, Google
// Problem Statement:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
// You may assume that each input has exactly one solution, and you may not use the same element twice.

// Return the answer as an array[i, j](either order is fine).
//     Example:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:
// 2 <= nums.length <= 10 ^ 4

//     - 10 ^ 9 <= nums[i] <= 10 ^ 9

//     Only one valid answer exists.



function twoSum(n, arr) {
     
   let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let complement = n - arr[i]
         console.log(complement);
        if (map.has(complement)) {
            //  check if the complement number exist or not in map
            //  if it  exist the return the map  
            return [map.get(complement), i]
         
        }
        map.set(arr[i], i)
        
    }
    
    return []
  
}


console.log("output", twoSum(9, [2, 7, 11, 15]));