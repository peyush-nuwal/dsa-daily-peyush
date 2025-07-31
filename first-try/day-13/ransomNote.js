// 🧩 Ransom Note-leetcode 383
// Hashmap Hustle 🕵️‍♂️
// Build char freq from magazine → Match with ransom
// 📥 Input: ransomNote = "aab", magazine = "baa"
// 📤 Output: true


const canConstruct = (ransom, magzine) => {
    const count = new Array(26).fill(0)
    
    for (let ch of magzine) {

         count[ch.charCodeAt(0) - 97]++
    }

    for (let ch of ransom) {
       if(count[ch.charCodeAt(0) -  97]===0) return false
       count[ch.charCodeAt - 97]--
    }
    return true
}

console.log(canConstruct("aa","aab"))
console.log(canConstruct("a","b"))
console.log(canConstruct("ba","aab"))