// Given an array of integers and a target value, find two numbers in the array that add up to the target.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Return the indices of the two numbers. Assume each input has exactly one solution.


const twoSum = (arr, target) => {
     let map=new Map()
    for (let i = 0; i < arr.length; i++){
            let rem= target-arr[i]
       
        if (map.has(rem)) {
            return [map.get(rem),i]
        }
        map.set(arr[i], i)

    }
}


console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3, 6, 1, 4],5));