let arr = [7, 10, 4, 3, 20, 15], k =2
 
function kthSmallest(arr, k) {
    if (k > 0 && k <= arr.length + 1) {
        arr.sort((a, b) => a - b)
        return arr[k - 1]
    }
    return -1
}


console.log(kthSmallest(arr, k)) // 7