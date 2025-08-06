// your given a expression give answer

// input: "2+3*4/3"


const expressionSolver = (expression) => {
    const stack = [];
    let currentNumber = 0;
    let operator = "+";

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        // Build multi-digit number
        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        }

        // If char is operator or it's the last char → apply previous operator
        if (/[+\-*/]/.test(char) || i === expression.length - 1) {
            switch (operator) {
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

            operator = char; // Update operator AFTER processing
            currentNumber = 0;
        }
    }

    return stack.reduce((acc, num) => acc + num, 0);
};


console.log("Output:", expressionSolver("3+23*2"));// Output: 49
console.log("Output:", expressionSolver("3+23*2/4-2"));// Output: 7