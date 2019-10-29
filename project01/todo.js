// // alert('connected')

// var val = 5;
// while (val > 0) {
//   console.log(val);
//   val--;
// }

// var h = document.createElement('h1') //this line almost creates a element like this//<h1></h1>
// var hValue=document.createTextNode('hey user')//just a string which can be used in any element that we want to use
// h.appendChild(hValue) //<h1>hey user</h1>

// document.querySelector('h1').appendChild(h)

var ul = document.getElementById("list");
var li;
var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);





function addItem() {
  // console.log('Add button clicked');
  var item = document.getElementById("input").value;
  ul = document.getElementById("list");
  var textnode = document.createTextNode(item);
  if (item == "") {
    var h = document.createElement('h1') //this line almost creates a element like this//<h1></h1>
    var hValue=document.createTextNode('hey user')//just a string which can be used in any element that we want to use
    h.appendChild(hValue) //<h1>hey user</h1>
    // document.querySelector('i').appendChild(h)
   return false
  }
  else{
      //create li
      li=document.createElement('li')
      var checkbox=document.createElement('input')
      checkbox.type='checkbox';
      checkbox.setAttribute('id','check')

      //create label
      var label=document.createElement('label')
      label.setAttribute('for','item')

      //adding elements to web page
    ul.appendChild(label)
    li.appendChild(checkbox)
    li.appendChild(textnode)
    li.appendChild(label)
    ul.insertBefore(li,ul.childNodes[0])
    setTimeout(()=>{
        li.className='visual'
    },2)
    input.value=''
  }
}












function removeItem() {
  console.log("Remove button was clicked");
  li = ul.children;
  // console.log(li[1]);
  for (let index = 0; index < li.length; index++) {
    // const element = li[index]; // to select each element inside th li array
    // console.log(element);  // and printing the values
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
  //to remove all todos irrespective of checked or unchecked
//   for (let index = 0; index < li.length; index++) {
//      while(li[index]&&li[index].children[0]){
//       ul.removeChild(li[index])
//      }
//   }
}

//document.documentElement.innerHTML =
 // "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";




//currency converter
function convert(){
var rupee= parseInt(document.getElementById("rupee").value);
var inDollar= (rupee/71)
const myPelements=document.querySelector('#dollar')
// console.log('look below');
// console.log(myPelements.textContent);
//changing content of first P tag element using script
myPelements.textContent=inDollar
}
