
let k = 2
const arr = [1, 2, 3, 4, 5]

for (let index = 0; index < k; index++) {
    for (let i = 0; i < arr.length - 1; i++) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

    }
    
}


console.log(arr);