
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
    upShift() {
        if (!this.head) return undefined;

        let temp = this.head;
        this.head = this.head.next
        this.length--

        if (this.length === 0) {
            this.tail=0
        }
        return temp
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
    
    remove(value) {
    // If list is empty, nothing to remove
    if (!this.head) return undefined;

    let current = this.head;
    let prev = null;

    while (current) {
        // Case 1: deleting head node
        // If the value matches and the node is head, just use shift()
        if (current.value === value && current === this.head) {
            return this.upShift();
        }

        // Case 2: deleting tail node
        // If the value matches and the node is tail, just use pop()
        if (current.value === value && current === this.tail) {
            return this.pop();
        }

        // Case 3: deleting a middle node
        // If the value matches somewhere in the middle, bypass it
        if (current.value === value) {
            prev.next = current.next;  // unlink current node
            this.length--;             // decrease list length
            return current;            // return removed node
        }

        // Move pointers forward
        prev = current;
        current = prev.next;
    }

    // Value not found in the list
    return undefined;
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
myLinkedList.printList()
console.log("deletion from start ", myLinkedList.upShift());
myLinkedList.printList()
console.log("deleting speific element ", myLinkedList.remove(3));
myLinkedList.printList()