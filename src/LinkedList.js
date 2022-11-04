import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      let temp = this.head;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    const temp = this.head;
    this.head = new Node(value, temp);
  }

  size() {
    let count = 0;
    if (this.head === null) return 0;
    let temp = this.head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
      count += 1;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;
    let temp = this.head;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let temp = this.head;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp.data !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp.data === value;
  }

  find(value) {
    let count = 0;
    let temp = this.head;
    while (temp.data !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
      count += 1;
    }
    if (this.contains(value)) return count;
    return null;
  }

  toString() {
    let str = '';
    let temp = this.head;
    while (temp.nextNode !== null) {
      str += `(${temp.data}) -> `;
      temp = temp.nextNode;
    }
    str += `null`;
    console.log(str);
    return str;
  }

  insertAt(value, index) {
    const temp = this.at(index);
    const after = temp.nextNode;
    temp.nextNode = new Node(value, after);
  }

  removeAt(index) {
    const temp = this.at(index - 1);
    temp.nextNode = temp.nextNode.nextNode;
  }
}
