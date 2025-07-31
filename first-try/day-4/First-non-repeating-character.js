

// Problem 1: First Non - Repeating Character

// Type: String, Hashing
// Level: Easy - Medium

// Problem Statement:
// Given a string s, find the first non - repeating character and return its index.If it doesn't exist, return -1.

// Example:

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 10 ^ 5

//     s consists of only lowercase English letters.


const s = "leetcode"
const map=new Map()


for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1)
    
}

for (let i = 0; i < s.length; i++){
    if (map.get(s[i]) === 1) {
        console.log(s[i]);
     return
    }
}

if (![...map.values()].includes(1)) {
    console.log("-1");


}