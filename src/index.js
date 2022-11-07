import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.append(13);
list.prepend(2);
list.insertAt(4, 1);

console.log(
  list,
  list.size(),
  list.head(),
  list.tail(),
  list.at(1),
  list.contains(1),
  list.find(1),
  list.toString()
);
