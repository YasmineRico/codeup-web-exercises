//Write a function, createUserMsg, that takes in a user object like the following...
// {
//   username: ‘jbomb’,
//   email: ‘john@email.com’,
//   isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

// var createUserMsg= [
// 	{username: 'Yasmine', email: "ricolyasmine@gmail.com", isAdmin: false},
// 	{username: 'jbomb', email: 'john@email', isAdmin: true}
//
// ]
//
// createUserMsg.forEach(function(users){
// 	console.log("User " + users.username  + ((users.isAdmin == true) ? " is an admin" : " is not an admin" ) + " and can be reached at " +users.email)
// })



function areaOrPerimeter(l, w) {
	var areaSquare = l ** 2
	var perimeterRectangle = (l + w) * 2
	if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))) {
		return false;
	}
	if (l == w) {
		return areaSquare
	}
	if (l !== w) {
		return perimeterRectangle;
	}
}

console.log(areaOrPerimeter(6, 10))
console.log(areaOrPerimeter("my", "2"))
console.log(areaOrPerimeter("2", 3))

//return false if input is not a number or numeric string

//on the right path here just needed more time. Working on the bonus question

// function sumTheStrings(num1, num2){
// 	num1 = parseInt(num1)
// 	num2 = parseInt(num2)
// 	var result = num1 + num2
// 	if(num1 !== "string"|| num1 == !isNaN && num2 !== "string" || num2 == !isNaN){
// 		return false
// 	}
// 	 if(num1 === "string" && num2 === "string") {
// 		 return String(result)
// 	 }
//
// }


//this solution returns the output as a string and accepts numeric strings.
function sumTheStrings(num1, num2) {
	num1 = parseInt(num1)
	num2 = parseInt(num2)
	var result = num1 + num2
	if(Number(num1) && Number(num2)){
		return String(result)
	}
}

