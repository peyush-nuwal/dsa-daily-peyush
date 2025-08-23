
class Node{

    constructor(value) {
        this.head = value
        this.next=null
    }
}

class linkedList{
    constructor(value){

        this.head = new Node(value);
        this.tail = this.head
        this.length=1
    }
}


const myLinkedList = new linkedList(1)

console.log(myLinkedList);