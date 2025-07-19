// in this we are give a string pattern like this "3[a]2[bc]" and we want output like this "aaabcbc".

function decodeString(s) {
    let stack = []
    let currentNumb = 0
    let currentString = ""
   
    for (let i = 0; i < s.length; i++){
        if(/\d/.test(s[i])) {
            currentNumb = currentNumb * 10 + Number(s[i]);
        }
        else if (s[i] === '[') {
            
            stack.push(currentString);
            stack.push(currentNumb);
            currentString = "";
            currentNumb = 0;
            
        }
        else if (s[i] === ']') {
            const repeatCount = stack.pop();
            const prevStr = stack.pop(); 
            currentString = prevStr+currentString.repeat(repeatCount);
        } else {
            currentString += s[i];
        }
    }
   return currentString
}
 

console.log("output",decodeString("3[a]2[bc]"));
console.log("output",decodeString("2[abc]3[cd]ef"));