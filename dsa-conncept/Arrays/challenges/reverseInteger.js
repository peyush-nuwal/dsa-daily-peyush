//  reverse a number
//   1234 -> 4321


const rev = (num) => {
    const isNegtive= num<0
    let re = 0;
    num =Math.abs(num)
    
    while (num > 0) {
        const last = Math.floor(num % 10) 
 
        re = (re * 10) + last 
     
        num = Math.floor(num / 10);
    }
    return isNegtive? - re:re
}


console.log(`reverse interger ${rev(1234)}`);
console.log(`reverse interger ${rev(-1234)}`);
console.log(`reverse interger ${rev(1002)}`);