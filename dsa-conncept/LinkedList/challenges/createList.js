function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


const node = new ListNode(1)


// your add function
const add = (value) => {
    let current = head;
    while (current.next !== null) {
        current = current.next;  // go to last node
    }
    current.next = new ListNode(value);  // attach new node
};

add(2);
add(3);

console.log(node)