// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = list.head;
        let count = 0;

        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head.data;
    }

    getLast() {
        if(!this.head) return null;

        let node = list.head;
        while(node) {
            if(!node.next) return node.data
            node = node.next;
        }
        return node.data;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) return;
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let previous = list.head;
        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        console.log(list.head.next)
    }

    insertLast(data) {
        if(!this.head) {
            this.head = new Node(data,null);
            return;
        }
        let previous = list.head
        let node = this.head.next;
        while(node) {
            previous = node;
            node = node.next
        }
        previous.next = new Node(data,null);
    }

    getAt(num) {
        if(num>this.size()-1) return;
        let count = 0;
        let node = this.head;
        while(count!==num) {
            node = node.next
            count++;
        }
        return node;
    }

    removeAt(index) {
        if(!this.head) return;
        if(index>=this.size()) return;
        if(index===0) {
            this.head=this.head.next;
            return;
        }
        let previous = this.getAt(index-1);
        previous.next = this.getAt(index+1) ? this.getAt(index+1) : null;
    }

    insertAt(data, index) {
        if(!this.head) {
            this.head = new Node(data, this.head);
            return;
        }
        if(index>=this.size()) return;
        if(index===0) {
            this.insertFirst(data);
            return;
        }
        if(index===this.size()-1) {
            this.insertLast(data);
            return;
        }
        let previous = this.getAt(index-1);
        previous.next = new Node(data, previous.next);
    }
}

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

list.insertAt('hello!',3);


console.log(list.getAt(3))

module.exports = {
    Node,
    LinkedList
};