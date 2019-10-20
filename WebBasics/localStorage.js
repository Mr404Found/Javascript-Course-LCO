// alert('hi')
localStorage.setItem('hero','jonathan')
let myValue= localStorage.getItem('hero')
console.log(myValue);

localStorage.setItem('todo','buy chocolate')
localStorage.setItem('todo2','buy chocolate')
console.log(localStorage.getItem('todo'));

//removing a value from localstorage
localStorage.removeItem('todo')
// console.log()
console.log(localStorage.getItem('todo'));
//to clear everything from local storage
// localStorage.clear()