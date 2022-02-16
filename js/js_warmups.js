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
	if (typeof l === "string" || typeof w === "string") {
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
console.log(areaOrPerimeter("my", "hello"))

//return false if input is not a number or numeric string