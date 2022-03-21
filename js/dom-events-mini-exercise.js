// get access to the button in the DOM
// var button = document.querySelector("button");
// Write the event handler
// aka event listener, callback
// function doThisWhenTheButtonIsClicked(){
// 	alert("You clicked me!");
// }
// Finally we register the handler
// button.addEventListener('click', doThisWhenTheButtonIsClicked);

// var secondButton = document.getElementsByTagName("button")[1];
//
// secondButton.onclick = doThisWhenTheButtonIsClicked;

// var allTheButtons = document.getElementsByTagName("button");
// for (var i = 0; i < allTheButtons.length; i++) {
// 	allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked);
// }

var buttons = document.querySelector('button');
function imASquare(){
	alert("I'm a big pink square");
}

buttons.addEventListener('click', imASquare);

//an eventlistener returns an even object !! important to know for JQuery


