const numbers = ["one", "two", "three", "four"];

//Performing some operations on array using functions

//first part of array

// console.log(numbers.shift()); //Shift Removes first eelment from array
// console.log(numbers);
// numbers.unshift('new element')
// console.log(numbers);

//end partof array

console.log(`Deleted element is ${numbers.pop()}`)
console.log(numbers);

numbers.push('inserting element at last')
console.log(numbers);

//push and pop operations takesplace at end of array

//middle part

numbers.splice(1,2,"newly inserted")

console.log(numbers);


