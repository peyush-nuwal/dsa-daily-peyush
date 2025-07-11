

const reverseString = (str) => {
      return str.split("").reverse().join("")
}

const reverseStringBrute = (str) => {
    let rev = ""
    for (let i = str.length-1; i >= 0; i--){
         rev +=str[i]
    }
    return rev
}
console.log("reverse", reverseString("developer"))
console.log("reverse", reverseStringBrute("developer"))