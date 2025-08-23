
class Node{

    constructor(value) {
        this.value = value
        this.next=null
    }
}

class linkedList{
    constructor(value){

        this.head =  new Node(value)
        this.tail = this.head
        this.length =  1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {  // if list empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        
    }

    pop() {
        if (!this.head) return undefined; // case: empty list

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = temp.next; // move temp forward
        }

        this.tail = prev;       // set tail to second last node
        this.tail.next = null;  // detach last node
        this.length--;

        if (this.length === 0) {
            // if list became empty, reset head & tail
            this.head = null;
            this.tail = null;
        }

        return temp; // return the removed node
    }
 

    printList() {
        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.value);
            current=current.next
        }
        console.log(result.join(" -> "));
    }
     
    find(target) {
        let current = this.head;
        let res = []
        
        while (current) {
           
            if (target === current.value) {
                res.push(current)
            }
            current = current.next
        }
        return res
    }
    
}


const myLinkedList = new linkedList(1)
// console.log("before insertaion", myLinkedList);
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
console.log("after insertaion", myLinkedList);
// myLinkedList.printList()
// console.log("fined",myLinkedList.find(2));
console.log(myLinkedList.pop());
console.log("after deletion ", myLinkedList);