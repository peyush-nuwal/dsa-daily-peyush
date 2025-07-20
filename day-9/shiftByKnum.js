 //brute force
// let k = 7
// const arr = [1, 2, 3, 4, 5]

// for (let index = 0; index < k%arr.length; index++) {
  
//     for (let i = 0; i < arr.length - 1; i++) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

//     }
    
// }


// console.log(arr);


let k=3
const arr = [1, 2, 3, 4, 5]
const temp = new Array(arr.length)

for (let i = 0; i < arr.length; i++){
    temp[i] = arr[(i + k) % arr.length]
}
console.log(temp)
