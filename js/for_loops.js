//Complete

//Exercise 5

//
// for (var i= 20; i >= 1; i--){
// 	console.log(i * 5);
// }
// // or
// for (var i = 100; i >= 5; i -= 5){
// 	console.log(i)
// }
//Exercise 2

// function showMultiplicationTable(num) {
// 	for (var i = 1; i <= 10; i++) {
// 		console.log(num + " x " + i + " = " + num * i)
// 	}
// }
// (showMultiplicationTable(7))

//Exercise 3
// var randomNumber = Math.floor(Math.random() * 181)+ 20
//
// for(var i = 0; i < 10; i++){
// 	if (randomNumber <20 || randomNumber > 200){
// 		console.log("Yoooooo");
// 	}else if(randomNumber === 20|| randomNumber=== 200){
// 		console.log("Heyyyyyy");
// 	}
// 	console.log(randomNumber)
// }

// for(var i = 0; i < 10; i++){
// 	var randomNumber = Math.floor(Math.random() * 181)+ 20
// 	if (randomNumber %2 == 0){
// 		console.log(randomNumber+ " is even");
// 	}else {
// 		console.log(randomNumber + " is odd")
// 	}
// }
//exercise 4

	var totalNumberofRows = 9;
	for(var i =1; i <= totalNumberofRows; i++){
		console.log(i.toString().repeat(i));
}



//Class Walk through solution
// for (var number = 1; number <10; number++){
// 	var count = 0;
// 	var outputString = " ";
// 	while (count < number){
// 		outputString = outputString + number.toString();
// 		count = count + 1;
// 	}
// 	console.log(outputString)
// }
//
// //or this one
// for (var i = 1; i < 10; i++){
// 	console.log(i.toString().repeat(i));
// }