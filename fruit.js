const fruit=["apple", "banana", "mango", "orange", "kiwi"];

fruit.splice(0,2, "pineapple"); // updates in original array
const newFruits=fruit.slice(1,3); // creates a shallow copy
console.log(fruit);
console.log(newFruits);