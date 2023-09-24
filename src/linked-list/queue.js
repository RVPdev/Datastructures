const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
    // return this;
  }

  dequeue() {
    return this.linkedList.remove((node, index) => index === 0 );
  }

  peek() {
    return this.linkedList.head.value;
  }

  isEmpty() {
    const length = this.linkedList.length;
    if(length === 0) {
      return true
    }
    return false;
  }
}

module.exports = Queue;
