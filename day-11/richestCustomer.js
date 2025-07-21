// LeetCode #1672 - Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i-th customer has in the j-th bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the sum of money they have in all their bank accounts.
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