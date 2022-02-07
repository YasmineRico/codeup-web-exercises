// var counter = 1;
// var num = 2
// while (counter < 65536){
// 	counter = counter * num;
// 	console.log(counter);
//
// }
//or

// var counter =1;
// while(counter < 65536){
// 	counter = counter *2;
// 	console.log(counter);
// }

//Do While Loop Exercise

/*An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.*/
//
var allCones = Math.floor(Math.random() *50) +50;
var conesBought;
do{
	conesBought = Math.floor(Math.random() * 5) +1;
	console.log(conesBought + " cones sold..");
	allCones --;

	if(allCones < conesBought) {
		console.log("Cannot sell you " + conesBought + " I only have " + allCones + " left");
	}

}while(allCones > conesBought);

console.log("Yay! I sold them all");


// ----Other way of completing exercise------
// var allCones = Math.floor(Math.random() *50) +50;
//
// do {
// 	var conesBeingBought = Math.floor(Math.random()*5) +1;
// 	if (conesBeingBought > allCones){
// 		console.log("Cannot sell you " + conesBeingBought + "I only have " + allCones);
// 	}else {
// 		console.log(conesBeingBought + " cones sold...");
// 		allCones= allCones - conesBeingBought;
// 	}
// }while(allCones > 0);