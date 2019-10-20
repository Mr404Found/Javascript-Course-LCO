const element =document.getElementById('withID');//selecting particular elements of a document using JS functions
console.log(element);
console.log('okay');

const element1=document.querySelectorAll('p')//Another approach to selecting elements
console.log(element1);
console.log(element1[1]);
console.log('okay');


const myPelements=document.querySelector('#withID')
// console.log('look below');
console.log(myPelements.textContent);
//changing content of first P tag element using script
myPelements.textContent='I am being changed using script'
// myPelements.remove()  // it removes all p elements having id #withID

const myPelements2=document.querySelectorAll('p') //it returns an array
// myPelements2.forEach((p)=>p.textContent='All P tag elements are changed')

//Adding new elements using script without editing html file
const addPara=document.createElement('p')
addPara.textContent='I came up here via Javascript having tag p'
document.querySelector('body').appendChild(addPara)




//lets perform operations on button
document.querySelector('button').addEventListener('click',()=>{
    console.log('Button was pressed');
})

//lets change button text
document.querySelector('button').addEventListener('click',(sumanth)=>{
sumanth.target.textContent="I was changed after clicking me"

})

//tracking input form box text
document.querySelector('#myInputBox').addEventListener('input',(sumanth)=>{
    console.log(sumanth.target.value);
    
})