// LeetCode 11: Container With Most Water
// Given heights of lines, find max area of water container.

const area = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(heights[left], heights[right]);
        let area = width * minHeight;
        max = Math.max(max, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

// 🔽 Test Cases
console.log(area([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(area([1, 1]));               // Output: 1
console.log(area([4, 3, 2, 1, 4]));         // Output: 16
