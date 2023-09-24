/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
  }

  pop() {
    // const length = this.linkedList.length;
    return this.linkedList.remove((node, index) => index === 0);

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

module.exports = Stack;
