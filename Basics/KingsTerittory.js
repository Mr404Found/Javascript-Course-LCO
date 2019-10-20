// Observing scope of variable in different cases

// let king = "John Wick";

if (true) {
  //   let king = "jon snow";

  if (true) {
    var king = "peter dinklage";
    console.log(king);
  }
}

if (6) {
  console.log("I am second king called : " + king);
}
