import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.prepend(2);
console.log(list, list.size(), list.head());
