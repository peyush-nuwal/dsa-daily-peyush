// 🔢 Problem: Number of Steps to Reduce a Number to Zero (LeetCode #1342)
// 📝 Description:
// Given an integer `num`, return the number of steps to reduce it to zero.
// If the current number is even, divide it by 2. If it's odd, subtract 1.
// Repeat until the number becomes 0.
//
// ✅ Input: 14
// 🎯 Output: 6
// 💡 Approach: Simulate each step using a loop and count operations.

const numberOfSteps = (num) => {
    let steps = 0
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num - 1
        }
        steps++
    }
    return steps
}

console.log(numberOfSteps(14)); // Output: 6
