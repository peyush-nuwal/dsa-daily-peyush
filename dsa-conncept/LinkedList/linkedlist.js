// Node class: represents one element of the linked list
class Node {
    constructor(value) {
        this.value = value;  // the actual data
        this.next = null;    // pointer to the next node
    }
}

// LinkedList class: manages the entire linked list
class LinkedList {
    constructor(value) {
        this.head = new Node(value);  // first node in the list
        this.tail = this.head;        // tail starts as head
        this.length = 1;              // list initially has one node
    }

    // Insert element at the end (O(1))
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {             // case: list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;   // link old tail to new node
            this.tail = newNode;        // update tail pointer
        }
        this.length++;

        return this
    }

    // Remove element from the end (O(n))
    pop() {
        if (!this.head) return undefined; // case: empty list

        let temp = this.head;
        let prev = this.head;

        // Traverse to last node
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;       // update tail to 2nd last node
        this.tail.next = null;  // cut off last node
        this.length--;

        // If list became empty, reset head & tail
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp; // return removed node
    }

    // Remove element from the start (O(1))
    shift() {
        if (!this.head) return undefined;

        let temp = this.head;       // store old head
        this.head = this.head.next; // move head to next
        this.length--;

        // If list became empty, reset tail
        if (this.length === 0) {
            this.tail = null;
        }

        return temp; // return removed node
    }

    // Print all elements in the list
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    // Find all nodes that match a target value
    find(target) {
        let current = this.head;
        let res = [];
        while (current) {
            if (target === current.value) {
                res.push(current);
            }
            current = current.next;
        }
        return res; // array of nodes with matching value
    }

    // Remove the first node that matches a given value
    remove(value) {
        if (!this.head) return undefined; // empty list

        let current = this.head;
        let prev = null;

        while (current) {
            // Case 1: deleting head
            if (current.value === value && current === this.head) {
                return this.shift();
            }

            // Case 2: deleting tail
            if (current.value === value && current === this.tail) {
                return this.pop();
            }

            // Case 3: deleting middle node
            if (current.value === value) {
                prev.next = current.next; // unlink current
                this.length--;
                return current;
            }

            // Move forward
            prev = current;
            current = current.next;
        }

        return undefined; // value not found
    }

    // adding node in front of list
    unShift(value) {
        if(!this.head) return this.push(value)
        let currentHead = this.head
        const newNode = new Node(value)
        this.head = newNode 
        newNode.next = currentHead
        this.length++
        return this
    }
}

// --------------------
// Example usage
// --------------------
const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Initial list:");
myLinkedList.printList();

console.log("Removed from end:", myLinkedList.pop().value);
myLinkedList.printList();

console.log("Removed from start:", myLinkedList.shift().value);
myLinkedList.printList();

console.log("Removed specific (3):", myLinkedList.remove(3).value);
myLinkedList.printList();


console.log("adding element from start:", myLinkedList.unShift(8));
myLinkedList.printList();