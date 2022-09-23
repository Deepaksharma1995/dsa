class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let node = new Node(value);
    if (!this.bottom) {
      this.bottom = node;
      this.top = node;
      this.length++;
    } else {
      this.top.next = node;
      this.top = node;
      this.length++;
    }
    return this.bottom;
  }
  pop() {
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();

class arrayStack {
  constructor() {
    this.stack = new Array();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.last;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.length++;
      return;
    }
    let holdingPointer = this.first;
    this.first = node;
    this.first.next = holdingPointer;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      return;
    }
    let holdingPointer = this.first.next;
    this.first = holdingPointer;
    return holdingPointer;
  }
}
