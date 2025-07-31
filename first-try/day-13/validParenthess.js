// leetcode 20 valid parenteses 
// each bracket should have closeing bracket if not return false 
// Input: "([{}])" ➤ Output: true
// Input: "()[]{}" ➤ Output: true
// Input: "([]{}" ➤ Output: false





const isValid = (s) => {
    const stack = []
    const map = {
         ")":"(",
         "]":"[",
         "}":"{",
    }
    for (let char of s) {
        // console.log(char)
        if (char ==="(" || char === "[" || char === "{") {
            stack.push(char)
        }
        else {
            
            if (stack.pop() !== map[char])return false
        }
    }
    return stack.length===0
}


console.log(isValid("([{}])"));