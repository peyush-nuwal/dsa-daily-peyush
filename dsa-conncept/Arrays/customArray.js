class myArray{
     
    constructor() {
        this.length = 0;
        this.data={}
    }

    add(value) {
        this.data[this.length]=value
        this.length += 1
    }
    get(idx) {

      console.log(idx,"at index",this.data[idx])
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--
       return this.data
    }
    
}


const myNewArr = new myArray()
console.log(myNewArr);
myNewArr.add(2)
myNewArr.add(1)
myNewArr.add(3)
myNewArr.get(1)
console.log(myNewArr);
console.log(myNewArr.pop());
console.log(myNewArr);
