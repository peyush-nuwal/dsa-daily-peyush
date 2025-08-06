  
// calculating expression without the help of eval


function calculateExpression(expression) {
    const stack = [];
    let currentNumber = 0

    let operation = '+'
    const n = expression.length;
       
    for (let i = 0; i < n; i++) {
        const char = expression[i]
   
        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + Number(char)
        }

        if (/[+\-*/]/.test(char) ) {
            switch (operation) {
                case "+":
                    stack.push(currentNumber);
                    break;
                case "-":
                    stack.push(-currentNumber);
                    break;
                case "*":
                    stack.push(stack.pop() * currentNumber);
                    break;
                case "/":
                    stack.push(Math.trunc(stack.pop() / currentNumber));
                    break;
            }
            currentNumber = 0;
            operation = char;
        }
    }
      
    
    return stack.reduce((acc, num) => acc + num, 0);
}
  



console.log("Output:",calculateExpression("3+23*2"));// Output: 7
console.log("Output:",calculateExpression("3+23*2/4-2"));// Output: 7