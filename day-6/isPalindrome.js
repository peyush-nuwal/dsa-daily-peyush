
const isPalindrome = (str) => {
    return str===str.split("").reverse().join("")
}

const isPalindromeBrute = (str) => {

     
    for (let i = 0; i < Math.floor(str.length / 2); i++){
        if (str[i] !== str[str.length - 1 - i])
        {
            return false
             }
    }
    return true
}
console.log("ispalindrome", isPalindrome("racecar"));
console.log("ispalindrome", isPalindromeBrute("racear"));