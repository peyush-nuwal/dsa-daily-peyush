// [2, 7, 11, 15], 9



const findSum = (numbers, target) => {
      
   const map = new Map()
    
    for (let i = 0; i < numbers.length ; i++){
        const rem = target - numbers[i]

        if (map.has(rem)) {
             return[map.get(rem),i]
        }
        map.set(numbers[i],i)
         
    }
    return []
}
console.log(findSum([2, 7, 11, 15], 9));
console.log(findSum([1, 3, 5, 7], 8));