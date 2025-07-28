// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explan


var strStr = function (haystack, needle) {
    if (needle === 0) return 0
    
    for (let i = 0; i <= haystack.length - needle.length; i++){
        let match = true
        
        for (let j = 0; j < needle.length; j++){
            if (haystack[i + j] !== needle[j]) {
                match = false;
                 break
            }
            if(match) return i
        }
    }

    return -1
};

console.log(strStr("leetcode",'eet'));