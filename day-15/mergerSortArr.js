function merge(arr1, arr2) {
    let n = arr1.length + arr2.length
    const temp = new Array(n)

    let i = 0, j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            temp[k++] = arr1[i]
            i++
        }
        else {
            temp[k++] = arr2[j]
            j++

        }


    }
    while (j < arr2.length) {
        temp[k++] = arr2[j++]

    }
    while (i < arr1.length) {
        temp[k++] = arr2[i++]
    }
    return temp
}

console.log(merge([2, 4, 6], [1,2, 3, 5, 7]));


const sortMerge = (arr1, arr2) => {
    const temp = [...arr1, ...arr2]

    return temp.sort((a, b) => a - b)
}



console.log(sortMerge([2, 4, 6], [1,2, 3, 5, 7]));














