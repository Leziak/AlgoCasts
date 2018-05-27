// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor(data){
        if(Array.isArray(data)) this.data = data;
        else this.data = [];
    }

    add(record){
        this.data.unshift(record);
    }

    remove(){
        return this.data.pop();
    }
}

let queue = new Queue([1,2,3,4,5])


module.exports = Queue;
