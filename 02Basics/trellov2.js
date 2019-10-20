let todoObject = {
  day: "Monday",
  meetings: 0,
  meetingsDone: 0
};

let addMeet = function(MyTodo, meetings = 0) {
  MyTodo.meetings = MyTodo.meetings + meetings;
  return `Added ${meetings} Meetings Today`;
};

let DoneMeet = function(MyTodo, meetsDone = 0) {
  MyTodo.meetingsDone=MyTodo.meetingsDone-meetsDone
  return `Completed ${meetsDone} meetings`;
};

let resetDay = function(MyTodo) {
  (MyTodo.meetingsLeft = 0), (MyTodo.meetingsDone = 0);
};

let GetSummary = function(MyTodo) {
  let TotalMeets = MyTodo.meetings + MyTodo.meetingsDone;
  return `You have ${TotalMeets} meetings left this day`;
}

console.log(todoObject);
console.log(addMeet(todoObject, 5));
console.log(DoneMeet(todoObject, 3));
console.log(todoObject);
console.log(GetSummary(todoObject))

