function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


const head = new ListNode(1)


// your add function
const add = (value) => {
    let current = head;
    while (current.next !== null) {
        current = current.next;  // go to last node
    }
    current.next = new ListNode(value);  // attach new node
};

const printList=()=>{
    let current = head
    let res=[]
    while (current) {
        res.push(current.val)
        current=current.next
    }

    return res.join("->")
}

const pop=() => {
    let current = head
    let prev=null
    while (current.next) {
         prev=current
        current = prev.next
    }
    prev.next = null
    return current

}

add(2);
add(3);
add(4);
console.log("print list", printList())
console.log("delete last element",pop())
console.log("print list", printList())
