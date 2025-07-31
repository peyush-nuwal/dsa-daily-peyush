// this function change the expression "((3+5)*5)" to output 35
// for this there is a prebulit function which is eval 


const expressionToAns = (exp) => {
    try {
        const ans = eval(exp)
        console.log(ans)
    }
    catch (err) {
        console.log(error)
    }
}

expressionToAns("((3+5)*5)")
expressionToAns("((3+5)/2-3*8)")
