////////////////////////////////////////////////////////////
// This is an implementation of a Stack using ECMAScript 6
////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

////////////////////////////////////////////////////////////
// Implement a Queue using Stacks using EcmaScript 6 Syntax
////////////////////////////////////////////////////////////

class Queue {

}
