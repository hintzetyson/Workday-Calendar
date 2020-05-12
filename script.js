//Variable to hold the current date 
var day = new Date()
//Variable to get the current time between 0-23
var time = day.getHours()

//Loads the current date into the header when the page loads
$(document).ready(function() {
  var currentDayElement = $('#currentDay');
  currentDayElement.html(day.toDateString());
  console.log(time);

  // var time = 10; --- using to change the time to test if statements for css changes
  //if statements to change the css based on time 
  if (9 <= time&& 10 > time) {
    $("#hourNine").addClass("present")
  } else if (9 > time) {
    $("#hourNine").addClass("future")
  }
  else {
    $("#hourNine").addClass("past")
  }

  if (10 <= time&& 11 > time) {
    $("#hourTen").addClass("present")
  } else if (10 > time) {
    $("#hourTen").addClass("future")
  }
  else {
    $("#hourTen").addClass("past")
  }

  if (11 <= time&& 12 > time) {
    $("#hourEleven").addClass("present")
  } else if (11 > time) {
    $("#hourEleven").addClass("future")
  }
  else {
    $("#hourEleven").addClass("past")
  }
  
  if (12 <= time&& 13 > time) {
    $("#hourTwelve").addClass("present")
  } else if (12 > time) {
    $("#hourTwelve").addClass("future")
  }
  else {
    $("#hourTwelve").addClass("past")
  }

  if (13 <= time&& 14 > time) {
    $("#hourOne").addClass("present")
  } else if (13 > time) {
    $("#hourOne").addClass("future")
  }
  else {
    $("#hourOne").addClass("past")
  }

  if (14 <= time&& 15 > time) {
    $("#hourTwo").addClass("present")
  } else if (14 > time) {
    $("#hourTwo").addClass("future")
  }
  else {
    $("#hourTwo").addClass("past")
  }

  if (15 <= time&& 16 > time) {
    $("#hourThree").addClass("present")
  } else if (15 > time) {
    $("#hourThree").addClass("future")
  }
  else {
    $("#hourThree").addClass("past")
  }

  if (16 <= time&& 17 > time) {
    $("#hourFour").addClass("present")
  } else if (16 > time) {
    $("#hourFour").addClass("future")
  }
  else {
    $("#hourFour").addClass("past")
  }

  if (17 <= time&& 18 > time) {
    $("#hourFive").addClass("present")
  } else if (17 > time) {
    $("#hourFive").addClass("future")
  }
  else {
    $("#hourFive").addClass("past")
  }


  });
  

function addHighlight() {
 
  //function that will be used to highlight the Divs with past presant and future 
};


  //WHAT NEEDS TO HAPPED 
  // We need to create a variable for time only  DONE 

  // we need to creat a function on load to change the CSS of each hour block to add the correct color 

  // we need to creat an event listener for each save button 

  // that event listener needs a function that will save what is in the textarea to local storage and then add that back to the textarea on load 



  //adds a class to a targeted ID 
// $("#hourNine").addClass("future")