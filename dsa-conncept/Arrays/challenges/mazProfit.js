//  [7,1,5,3,6,4]


const maxProfit = (prices) => {
    let maxProfit = 0
    let minPrice = prices[0]
   

    for (let i = 0; i < prices.length; i++) { 
        if (prices[i] < minPrice) {
            minPrice=prices[i]
        }
        else {
            let profit = prices[i] - minPrice 
            maxProfit=Math.max(profit,maxProfit)
        }
    }
    return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 1, 5, 3, 8, 4]));