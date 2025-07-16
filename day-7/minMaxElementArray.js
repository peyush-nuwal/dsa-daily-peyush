const arr = [3, 2, 1, 56, 10000, 167]
let max = arr[0];
let min = arr[0];

for (let i = 1;i<arr.length;i++) {
    if (arr[i] > max) {
    max= arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }

}


console.log("Maximum Element:", max);
console.log("Minimum Element:", min);