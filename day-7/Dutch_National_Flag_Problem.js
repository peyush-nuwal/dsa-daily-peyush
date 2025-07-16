
const sorter = (arr) => {
    let c0 = 0, c1 = 0, c2 = 0
    
    for (let i = 0; i < arr.length; i++) { 
        if(arr[i] === 0) {
            c0++
        } else if(arr[i] === 1) {
            c1++
        } else if(arr[i] === 2) {
            c2++
        }
    }

    let idx= 0
    for (let i = 0; i < c0; i++) {
        arr[idx++] = 0
    }
    for (let i = 0; i < c1; i++) {
        arr[idx++] = 1
     console.log(idx);
    }

    for (let i = 0; i < c2; i++) {
        arr[idx++] = 2
    }
    return arr
}


const arr = [0, 1, 2, 0, 1, 2, 0, 1, 2]
console.log(sorter(arr)) // [0, 0, 0, 1,