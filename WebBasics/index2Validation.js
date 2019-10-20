function validateTemp() {
  const elementIncludingTAG = document.querySelector("#myForm");
  //   console.log(elementIncludingTAG.value);
  let elementValue = elementIncludingTAG.value;
  console.log(elementValue);
}
//
// other approach
function validate() {
  const elementValue = document.getElementById("myForm").value;
  if (isNaN(elementValue) || elementValue < 1 || elementValue > 20) {
    console.log("this is not a valid input");
  }else{
      console.log('given input is ok');
      const addPara=document.createElement('p')
        addPara.textContent="Passwords Didn't match"
        document.querySelector('input').appendChild(addPara)
      
  }
}



//form validation
function validateForm() {
    const pass1=document.getElementById('password').value
    const pass2=document.getElementById('password2').value
    if (pass1==pass2 && pass1!='') {
        alert('submitted succesfully')
    }else{
        const addPara=document.createElement('p')
        addPara.textContent="Passwords Didn't match"
        document.querySelector('form').appendChild(addPara)
    }
    
}




document.querySelector('.inputForm').addEventListener('submit',(event)=>{
    event.preventDefault();//to get ride of displaying entered username and fullname in the browser URL
    // console.log(event.target.username.value);//it prints the username value
    // console.log(event.target.mailID.value);
    event.target.mailID.value=''//to reset values to empty
    event.target.username.value=''
    event.target.password.value=''
    event.target.password2.value=''
    
})


