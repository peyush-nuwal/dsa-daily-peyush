
const reverserArray = (arr) => { 
    return arr.reverse();

}

const bruteForceReverser = (arr) => { 
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverserArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(bruteForceReverser([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]