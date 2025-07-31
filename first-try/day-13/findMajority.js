
//need to find the number with height majoringt

const findMajority = (arr) => {
    const count = new Map();
    let maxNum = arr[0]
    let maxFreq = 0
    
    for (let num of arr) {
        count.set(num, (count.get(num) || 0) + 1)
        
        if (count.get(num) > maxFreq) {
            maxNum = num
            maxFreq=count.get(num)
        }
    }
    return { "num ": maxNum,"frequnecy":maxFreq}
}

console.log(findMajority([6, 4, 4, 6, 4]));
// console.log(findMajority([4, 5, 2, 5, 5, 5, 1]));
// console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) );
// console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) );
// console.log(findMajority([5, 5, 5]) );