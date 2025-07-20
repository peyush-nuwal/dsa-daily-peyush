// your are given a arr of number and you have shift each number by on position in left direct 
// input [1,2,3,4,5]
// output [2,3,4,5,1]
const arr = [1, 2, 3, 4, 5]

for(let i=0;i<arr.length-1;i++){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      
}

console.log(arr);
