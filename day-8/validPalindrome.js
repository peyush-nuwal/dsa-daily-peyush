const validPalindrome = (str) => {
    let left=0
    let right=str.length-1
    while (left < right) {
        if (!/[a-z0-9]/i.test(left)) {
            left++
            continue
        }  
        if (!/[a-z0-9]/i.test(right)) {
            right--
            continue
        }   
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true

}

console.log(validPalindrome("amanaplanacanalpanama"));
console.log(validPalindrome("nice one"));