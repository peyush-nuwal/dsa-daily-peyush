const colors = [ 0,1, 1,1,1,0,1,0,2,1,2]
let i = 0,j=0, k = colors.length-1;

while(i < k){
    

    if (colors[k] < colors[i]) {
        let temp = colors[i]
        colors[i] = colors[k]
        colors[k] = temp
        k--

    }
    if (colors[i] < colors[j]) {
         let temp=colors[i]
        colors[i] =colors[j]
        colors[j] = temp
        j++
        i++
    }
    else {
        i++
    }
    
}

console.log(colors);