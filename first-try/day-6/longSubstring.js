// Input: "abcabcbb" → Output: 3("abc")

const getlongestSubstring = (str) => {
    let temp = []
     let maxLen=0
    for (let i = 0; i <= str.length - 1; i++){
        
        if (temp.includes(str[i])) {
            
            temp = []
            return maxLen  
         }
        else {
            temp.push(str[i]) 
            maxLen = maxLen<=temp.length?temp.length:maxLen
        }
    }

    return maxLen
}

console.log("ans", getlongestSubstring("abcabcbbabcd"));