// checking if strign is palidrome or not

// racecar -> reverse -> racecar  is palidrome
// apple   -> reverse -> ellpa    not a palidrome



const isPalindrome = (str) => {
    return str=== str.split("").reverse().join("")
}

const checkingPalindrome = (str) => {
    
    for (let i = 0; i < Math.floor(str.length / 2); i++){
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }

    }

    return true
}

console.log(`chekins if the racecar is palidrome ${isPalindrome('racecar')}`);
console.log(`chekins if the racecar is palidrome ${isPalindrome('apple')}`);

console.log(`chekins if the racecar is palidrome ${checkingPalindrome('racecar')}`);
console.log(`chekins if the racecar is palidrome ${checkingPalindrome('apple')}`);