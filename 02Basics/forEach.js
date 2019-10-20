const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

// let hello =

days.forEach(function(day, index) {
  console.log(`Day ${index + 1} is: ${day}`);
  if (index == 5) {
    console.log("Yes you are lookin' for sunday but we are programmers");
  }
});
