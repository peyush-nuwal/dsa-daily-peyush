const getLength = (str) => {
    const arr = str.split(" ");
   let maxLen=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== "") {
             maxLen=arr[i].length
        }
        
    }

    return maxLen
}

console.log(getLength(" the flye me  to  the moon "));