class myArray{
     
    constructor() {
        this.length = 0;
        this.data={}
    }

    add(value) {
        this.data[this.length]=value
        this.length += 1
   }
}


const myNewArr = new myArray()
console.log(myNewArr);
myNewArr.add(2)
myNewArr.add(1)
myNewArr.add(3)
console.log(myNewArr);
