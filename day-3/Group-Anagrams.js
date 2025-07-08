// we are given a array of word now we have group the word by there anagrams
function groupAnagrams(words) {
    const map = new Map()
    
    for (let word of words) {
        
        const key = word.split("").sort().join()
        
        if (!map.has(key)) {
             map.set(key,[])
        }
        map.get(key).push(word)
    }
    return Array.from(map.values())
}

console.log("output",groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));