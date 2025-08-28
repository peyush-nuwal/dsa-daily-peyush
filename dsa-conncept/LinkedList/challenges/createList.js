function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


const node = new ListNode(1)


// your add function
const add = (value) => {
    node.next = value;
};

add(2);

console.log(node)