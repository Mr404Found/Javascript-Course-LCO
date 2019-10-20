// Methods and this keyword in javascript
// Declaring functions in Objects
let todoObject = {
  day: "Monday",
  meetings: 0,
  meetingsDone: 0,

  addMeeting:function(meetsAdded){
      todoObject.meetings=this.meetings+meetsAdded
      return `${this.meetings}`
  }
};

console.log(todoObject.addMeeting(8));
