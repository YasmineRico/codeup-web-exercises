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


//
// function areaOrPerimeter(l, w) {
// 	var areaSquare = l ** 2
// 	var perimeterRectangle = (l + w) * 2
// 	if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))) {
// 		return false;
// 	}
// 	if (l == w) {
// 		return areaSquare
// 	}
// 	if (l !== w) {
// 		return perimeterRectangle;
// 	}
// }
//
// console.log(areaOrPerimeter(6, 10))
// console.log(areaOrPerimeter("my", "2"))
// console.log(areaOrPerimeter("2", 3))

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


// //this solution returns the output as a string and accepts numeric strings.
// function sumTheStrings(num1, num2) {
// 	num1 = parseInt(num1)
// 	num2 = parseInt(num2)
// 	var result = num1 + num2
// 	if(Number(num1) && Number(num2)){
// 		return String(result)
// 	}
// }


//create a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.

// parcelWeight ({
// 	parcelNumber:1
// 	weight: 20;
// })

//output 20 these are not suppose to equal 40 ... it was simple..

// var parcel = {
// 	parcelNumber:'1',
// 	weight: '20'
// };

// function totalWeight(parcel, parcelWeight){
// 	var result = '';
// 	for (var i in parcel){
// 		if(parcel.hasOwnProperty(i)){
// 			result =+ parcel.[i] = parcel[i]
// 		}
// 	}
// 	console.log(result)
// }
//
// var parcels = [{parcelNumber:1, weight: 20}, {number:2, weight: 25}]

//DOM Warmup: Create a heading that says Goodmorning!
//Create a button that says "press it afer 12pm"




//
//
// ================================= JS WARM UP
//
// Consider the following array of users:

// 	var users = [
// 		{
// 			username: 'fsmith',
// 			email: 'fsmith@email.com',
// 			numberOfLogins: 23
// 		},
// 		{
// 			username: 'ksmith',
// 			email: 'ksmith@email.com',
// 			numberOfLogins: 100
// 		},
// 		{
// 			username: 'lsmith',
// 			email: 'lsmith@email.com',
// 			numberOfLogins: 10
// 		}
// 	];
//
// //1
// function returnFirstUser(users){
// 	return users[0];
// }
// console.log(returnFirstUser(users));
//
//
// //2
// function returnTotalUserLogins(users){
// 	var total=0;
// 	for(var i =0; i<users.length; i+=1){
// 		total+= users[i].numberOfLogins;
// 	}
// return total;
// }
// console.log(returnTotalUserLogins(users))
/*1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

returnFirstUser(users) should return...

{
	username: 'fsmith',
		email: 'fsmith@email.com',
	numberOfLogins: 23
}

2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
for all users.

returnTotalUserLogins(users) should return... 133

3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
user object with the highest number of logins.


returnMostFrequentUser(users) should return...

{
	username: 'ksmith',
		email: 'ksmith@email.com',
	numberOfLogins: 100
}

 */

// ================================= WARM UP
//
// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:
//
// 	var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
//
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10


// function addTwos(array){
// 	var sumOfTwos= nums1.reduce(previousValue, currentValue) =>previousValue + currentValue, initialValue
// }
//
//
// console.log(addTwos(nums1))


//
//
// ================================= WARM UP

// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
// 	Examples...

// function returnStringObject(str){
// 	return {
// 		stringValue: str,
// 		stringArray: str.split('')
// 	}
// }
//
// console.log(returnStringObject('Hi')) // returns...

// {
// 	stringValue: 'hello',
// 		stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
// 	stringValue: 'codeup',
// 		stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }
//================================= JS WARM UP
// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
//
// //(JQUERY EXAMPLE)
// $('#changingColors .square').on('click',
// 	function (){$(this).toggleClass('yellow')});
//
// const changingColorSquares = document.querySelectorAll(
// 	'#changingColors .square');
// function toggle(e){
//	
// }
// changingColorSquares.forEach(square => square.addEventListener('click', toggleColor));

function encodeStr(str){
 if(str.toLowerCase() === 'a'){
	 return '@'
 }
 if(str.toLowerCase() === 's') {
	 return '$'
 }
 if (str.toLowerCase() === 'i'){
	 return '!'
 }
 	return str
}