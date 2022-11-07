import Node from '../Node.js';

export default class LinkedList {
  constructor() {
    this.HEAD = null;
  }

  append(value) {
    if (this.HEAD === null) {
      this.HEAD = new Node(value, null);
    } else {
      let temp = this.HEAD;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    const temp = this.HEAD;
    this.HEAD = new Node(value, temp);
  }

  size() {
    let count = 0;
    if (this.HEAD === null) return 0;
    let temp = this.HEAD;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
      count += 1;
    }
    return count + 1;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    if (this.HEAD === null) return null;
    let temp = this.HEAD;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    let temp = this.HEAD;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let temp = this.HEAD;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains(value) {
    let temp = this.HEAD;
    while (temp.data !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp.data === value;
  }

  find(value) {
    let count = 0;
    let temp = this.HEAD;
    while (temp.data !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
      count += 1;
    }
    if (this.contains(value)) return count;
    return null;
  }

  toString() {
    let str = '';
    let temp = this.HEAD;
    while (temp !== null) {
      str += `(${temp.data}) -> `;
      temp = temp.nextNode;
    }
    str += `null`;
    return str;
  }

  insertAt(value, index) {
    const temp = this.at(index - 1);
    const after = temp.nextNode;
    temp.nextNode = new Node(value, after);
  }

  removeAt(index) {
    if (index === 0) this.HEAD = this.HEAD.nextNode;
    else if (index > 0) {
      const temp = this.at(index - 1);
      temp.nextNode = temp.nextNode.nextNode;
    }
  }
}
