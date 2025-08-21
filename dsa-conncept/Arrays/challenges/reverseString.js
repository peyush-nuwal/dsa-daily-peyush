// reverse a string
//  Hello -> olleH
//   Apple -> ellpA


const reverseStr = (str) => {
      return str.split("").reverse().join("")
}

const rev = (str) => {
    let temp=""

    for (let i = str.length - 1; i >= 0; i--){
        temp+=str[i]
    }
    return temp
}


console.log(`reverse string of Hello is ${reverseStr('Hello')}`);
console.log(`reverse string of Apple is ${reverseStr('Apple')}`);
console.log(`reverse string of Apple is ${rev('Apple')}`);
