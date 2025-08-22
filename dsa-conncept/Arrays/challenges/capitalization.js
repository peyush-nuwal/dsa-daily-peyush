// convert the first character of each word to uppercase
//  "hello world " -> "Hello World"
 

const converter = (str) => {
  
    
    return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}


const capitalizer = (str) => {
    return str.replace(/\b\w/g,char=>char.toUpperCase())
}

console.log(converter("hello world"));
console.log(capitalizer("hello world"));