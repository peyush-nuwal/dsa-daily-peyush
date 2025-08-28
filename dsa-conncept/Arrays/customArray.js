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
    
    shift() {
        const firstItem = this.data[0]
        for (let i = 0; i < this.length; i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
        return firstItem
    }
    deleteByIndex(idx) {
        const itemToDelete = this.data[idx]
        for (let i = idx; i < this.length; i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
        return itemToDelete
    }
}


const myNewArr = new myArray()

console.log(myNewArr);

// adding element in array
myNewArr.add(1)
myNewArr.add(2)
myNewArr.add(3)
myNewArr.add(4)
myNewArr.add(5)
myNewArr.add(6)
myNewArr.add(7)

console.log(myNewArr);

// get element by index
// myNewArr.get(1)

//delete element from end
// console.log(myNewArr.pop());
// console.log(myNewArr);

//delete element from start
// console.log(myNewArr.shift());
// console.log(myNewArr);

//delete element by index 
console.log("delete element at index",myNewArr.deleteByIndex(1))
console.log(myNewArr)
console.log("delete element at index",myNewArr.deleteByIndex(4))
console.log(myNewArr)