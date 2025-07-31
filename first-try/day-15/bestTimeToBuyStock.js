const prices = [7,2,9,1,6]

let maxProfit=0
let minPrice=prices[0]
for (let i = 1; i < prices.length; i++){
    if (prices[i] < minPrice) {
          minPrice=prices[i]
        
    }
    else {
        
        
        let profit = prices[i] - minPrice
        maxProfit = Math.max(profit,maxProfit)
    }
    
}

console.log(maxProfit)