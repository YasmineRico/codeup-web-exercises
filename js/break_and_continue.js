//Still working on solution below.

/*Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
	Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 */

//WORK THROUGH THIS!
var number = prompt("Please enter an odd number between 1 and 50");
for (var i = 0; i < 50; i++){
	if (number %2 !== 0){
		console.log("Here is an odd number: " + number)
		console.log("number to skip is: " + number)
		break;
	}else if (number %2 === 0) {
		console.log("Please choose an odd number between 1 and 50");
		continue;
	}
console.log(i)
}

//Walkthrough solution -----
// while(true){
// 	var userNumber = prompt("Please enter an odd number between 1 and 50");
// 	if (userNumber %2 !==0 && userNumber <= 50 && userNumber >=1){
// 		console.log("Here is an odd number: " + userNumber)
// 		break;
// 	}
// }
// for (var i =1; i < 50; i++){
// 	if(i % 2 === 0){
// 		continue;
// 	}
// 	console.log(i)
// }

//
// //or
// console.log("Number to skip is: " + userNumber);
// for (var i= 1; i < 50; i+=2){
// 	if (i == userNumber){
// 		console.log("Yikes! Skipping number: " + userNumber);
// 		continue;
// 	}
// 	console.log(i);
// }