"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


//
// function analyzeColor (colorChoice){
//     if (colorChoice === "blue"){
//         return 'blue is the color of the sky';
//     }else if (colorChoice === "red"){
//         return 'Strawberries are red'
//     }else {
//         return 'I dont know anything about ' + colorChoice
//     }
// }
// console.log(analyzeColor('blue'))



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */



// function analyzeColor(colorChoice) {
//     switch (colorChoice.toLowerCase()) {
//         case 'blue':
//             return 'Blue is the color of the sky';
//         case 'red':
//             return 'Strawberries are red';
//         default:
//             return 'I dont know anything about ' + colorChoice;
//     }
// }
//
// console.log(analyzeColor('blue'))


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var colorChoice= prompt("What is your favorite color?")
// alert(analyzeColor(colorChoice))


/* ########################################################################## */



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//----My answer --- I did not understand the math for this one.. ---

// var luckyNumber= 0
//
// function calculateTotal(luckyNumber, totalAmount){
//     var totalDiscount= totalAmount * luckyNumber
//     var newPrice= totalAmount - totalDiscount
//     return newPrice
// }
//
// if (luckyNumber === 0){
//     return "Whomp, Whomp, better luck next time"
// }else if (luckyNumber === 1) {
//     return "Congratulations you won a 10% discount"
// }else if (luckyNumber === 2){
//     return "Congratulations you won a 25% discount"
// }else if (luckyNumber === 3){
//     return "Congratulations you won a 35% discount"
// }else if (luckyNumber === 4){
//     return "Congratulatoins you won a 50% discount"
// }else if (luckyNumber === 5)
//     return "Shop 'til you drop! You get everything for free!"
// }
//
// console.log(calculateTotal(4, 100))

///^^^^^^^^^ this is as far as I got in the exercise before walkthrough.


//Note: Below involved math and not all the variables I initially tried. In the return we have one variable

// function calculateTotal(luckyNumber, totalAmountDollars){
//     var newPrice;
//     if (luckyNumber === 0){
//         return totalAmountDollars;
//     }else if(luckyNumber === 1){
//         return newPrice = totalAmountDollars - (totalAmountDollars * .1);
//     }else if (luckyNumber === 2){
//         return newPrice= totalAmountDollars - (totalAmountDollars * .25);
//     }else if (luckyNumber === 3){
//         return newPrice = totalAmountDollars - (totalAmountDollars * .35);
//     }else if (luckyNumber === 4){
//         return newPrice = totalAmountDollars - (totalAmountDollars * .5);
//     }else if (luckyNumber === 5){
//         return 0
//     }
// }

//
// console.log(calculateTotal(0, 100)) // returns 100
// console.log(calculateTotal(4, 100)) // returns 50
// console.log(calculateTotal(5, 100)) // returns 0



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBillDollars = prompt('Please enter your total bill in dollars')
// var finalBillDollars = calculateTotal(luckyNumber, totalBillDollars)
// var billMessage ="Your lucky number is " + luckyNumber + ". Your original bill was " + totalBillDollars + ' and the final cost is '+ finalBillDollars;
// alert(billMessage)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


    // var willEnterNumber = confirm('Do you want to enter a number?');
    //
    // if (willEnterNumber)
    // var numInput = Number(prompt('Please enter a number'));
    //
    // if (typeof numInput === 'number'&& !isNaN(numInput)) {
    //     if (numInput % 2 === 0) {
    //         alert('Number is even');
    //     } else {
    //         alert('Number is odd');
    //     }
    //     alert(numInput + 100);
    //     if (numInput >= 0) {
    //         alert('Number is positive');
    //     } else {
    //         alert('Number is negative');
    //     }
    // else
    //     {
    //         alert('Incorrect data type!');
    //     }
    // }



