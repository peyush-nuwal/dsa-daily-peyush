function findDuplicates(nums) {
    const result = [];
    
    
    for (let i = 0; i < nums.length; i++){
        const value = nums[i]
   
        if (value === undefined) continue;

        let index = Math.abs(value);
        console.log("value of positve kiya",index)
        if (index === undefined) continue;
        
       
        console.log(nums[index] < 0)
        if (nums[index] < 0) {
           

            if (!result.includes(index)) {
                 result.push(index)
            }
            
        }
        else {
            console.log("passing negtive value to mark we been here")
            console.log("nums[index]= -nums[index]")
            console.log(nums[index] , -nums[index])
            nums[index] = -nums[index];
        }
        
    }
    return result
}
  
  
console.log(findDuplicates([3, 1, 3, 4,2]))