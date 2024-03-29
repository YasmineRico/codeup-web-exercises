"use strict";
/*

		Write a function, mirror, that takes in a string and returns the string with its characters in reverse order.
		If the input is not a string, the function should return false. The case of each character should
		remain unchanged.

		mirror('cat') // returns 'tac'
		mirror('asdf') // returns 'fdsa'
		mirror('Codeup') // returns 'puedoC'
		mirror('123') // returns '321'
		mirror('At') // returns 'tA'
		mirror(null) // returns false
		mirror([1,3,4]) // returns false
		mirror(123) // returns false

	 */

//console.log the results to ensure this works.


 // not correct my solution --- incorrect becuase i used "input" for the return statement below.
function mirror(str){
	if(typeof str !== "string"){
		return false
	}
		return input.split("").reverse().join(""); //<---- ERROR due to using wrong parameter..
	}


//Solution by Mr. Reich
// function mirror(input) {
// 	if (typeof input !== 'string') {
// 		return false;
// 	}
// 	return input.split('').reverse().join('');
// }
console.log(mirror('cat')) // returns 'tac'
console.log(mirror('asdf')) // returns 'fdsa'
console.log(mirror('Codeup')) // returns 'puedoC'
console.log(mirror('123')) // returns '321'
console.log(mirror('At')) // returns 'tA'
console.log(mirror(null)) // returns false
console.log(mirror([1,3,4])) // returns false
console.log(mirror(123)) // returns false
