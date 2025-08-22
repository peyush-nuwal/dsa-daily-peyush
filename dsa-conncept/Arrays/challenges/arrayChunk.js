
// [1,2,3,4,5,6,7,8], chunk size=3 -> [[1,2,3],[4,5,6],[7,8]]


const chunkMaker = (elements, chunkSize) => {
    
    const res = []
    let start = 0
     

    while (start<elements.length) {
        res.push(elements.slice(start, start + chunkSize))
        start += chunkSize
     }
    return res
}


console.log(chunkMaker([1, 2, 3, 4, 5, 6, 7, 8],3));