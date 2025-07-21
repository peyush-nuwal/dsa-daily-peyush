 
const richestCustomer = (nums) => {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        let curr=0
        for (let j = 0; j < nums[i].length; j++) {
            curr +=nums[i][j]
        }
        if (curr >= max) {
            max=curr
        }
    }
    return max
}

console.log(richestCustomer([[3,6,2],[2,6,7],[8,1,5]]));