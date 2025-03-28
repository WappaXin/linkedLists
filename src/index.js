import {LinkedList} from "./linkedList.js"
// first case
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(0);
list.head();
list.tail();
list.pop();
list.append(4);
list.insertAt(2.1 , 5);
list.removeAt(3);
list.removeNodeContainingThisValue(1);
list.at(8);

console.log("");
console.log("");
console.log("");
console.log(list.displayLinkedList());
console.log(`Number of nodes: ${list.size()}`);
console.log(`Head-node ${list.head()}`);
console.log(`Tail-node ${list.tail()}`);
console.log(list.head());
console.log(list.tail());
console.log(`node at index ${JSON.stringify(list.at(2))}`);
console.log(list.at(2));
console.log(`Does the list contain the value: ${list.contains(6)}`);
console.log(list.contains(6));
console.log(list.findIndexOf(2));
console.log(`Return the index of the value in the list if present: ${list.findIndexOf(2)}`);
console.log(list.toString());
console.log(Array.isArray(list));
console.log(list);
console.log(list.findIndexOf(list.tail().value));
console.log(list.tail().value);


// second case
const list1 = new LinkedList();
list1.append("dog");
list1.append("cat");
list1.append("parrot");
list1.append("hamster");
list1.append("snake");
list1.append("turtle");

console.log("");
console.log("");
console.log("");
console.log("");
console.log(list1.displayLinkedList())
console.log(list1.toString());