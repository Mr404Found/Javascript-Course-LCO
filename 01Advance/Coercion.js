console.log("5" + 5) //here 5 acts as a string no problem at all
console.log("5" - 5) //things drastically changes here
console.log(true + 8) //true = 1
console.log(false + 6) //false = 0


const loginDetails=[]
//logic for getting data from DB
const loginID=loginDetails[0]

if(' '){
    //Values that interprets as false:
    // false,'',null,undefined,0 rest of all are true values
    // '' != ' ' empty string and string having space
    console.log('yaay login succesful');
}else{
    console.log('Auth Failed');   
}
