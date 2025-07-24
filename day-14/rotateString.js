// – LeetCode #796
// 🔁 Rotate String
// Check if one string can become another through left rotations.
// 📥 Input: "abcde", "cdeab"
// ✅ Output: true

function RotateStr(str, goal) {
    if(str.length!==goal.length)return false
    
    for (let ch of str) {
        str = str.slice(1) + str[0]
        if (str==goal)return true 
    }
    
    return false
}

console.log(RotateStr("deabc", "cdeab"));