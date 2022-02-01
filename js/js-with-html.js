"use strict";

// alert("Hello, world!");
//
//  var userChoice = confirm("Are you sure you don't want to buy something?");
//  console.log(userChoice);
//
//  if (!userChoise){
//      alert("Wise Choice");
//  } else {
//      alert("Boooo! Good Bye!"); 
//      }


var currentSpeed = Number(prompt("How fast are you driving now?"));
 console.log(currentSpeed);
 var plannedSpeedIncrease = Number (prompt("How many more mph do you want to go"));
     // add the Number in front of propmt to ensure it changes the string to a number when being read by computer.


 var newSpeed= currentSpeed+ plannedSpeedIncrease;
 console.log ("Your planned speed is " + newSpeed);
 console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease));
// // add the double parentheses to the end of this solution for it to work properly.


 var distanceLeft = Number (prompt("How many miles are you from your destination?"));

 var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
 var timePlannedSpeed = (distanceLeft/newSpeed) * 60
 var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
 alert("If you drive at " + newSpeed + "mph, you will arrive" + timeGain + " minutes later");