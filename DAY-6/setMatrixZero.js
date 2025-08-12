// input = [[1, 1, 1],
//          [1, 0, 1],
//          [1, 1, 1]]
         
// ouput = [[1, 0, 1],
//          [0, 0, 0],
//          [1, 0, 1]]

const nums = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

const setZero = (nums) => {
    const pos = []
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums[0].length; j++){
            if (nums[i][j] == 0) {
                 pos.push({x:i,y:j})
             }
        }   
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            for (let p of pos) { 

                if (i == p.x || j==p.y) {
                    nums[i][j]=0
                }
            }
           
        }
    }
}


console.log("before", nums);
setZero(nums)
console.log("after",nums);