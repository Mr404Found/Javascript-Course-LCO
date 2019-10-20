const convertToRupees = dollar => {
  if (typeof dollar === "number") {
    return dollar * 70;
  } else {
    throw Error("Enter amount in terms of a number value");
  }
};
console.log(convertToRupees(5)); //Program terminates here if you pass string as a parameter
try {
  console.log(convertToRupees("k"));
} catch (e) {
  console.log(e);
}
console.log("hey i am at last"); //this line of code excecutes even the error occours cuz we used try catch block

function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    alert(c)
    }