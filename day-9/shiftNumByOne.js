// your are given a arr of number and you have shift each number by on position in left direct
// input [1,2,3,4,5]

// left side
// const arr = [1, 2, 3, 4, 5]

// for(let i=0;i<arr.length-1;i++){
//       [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      
// }

// console.log(arr);

const arr = [1, 2, 3, 4, 5]

for (let i = arr.length-1 ; i > 0; i--){
    [arr[i], arr[i - 1]] = [arr[i-1], arr[i ]]
}

console.log(arr);