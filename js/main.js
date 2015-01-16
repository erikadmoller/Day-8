var guessGame = function() {

	x = Math.ceil(Math.random() * 100); //generates a random number stores in the x variable.

	console.log(x);

   	while(userChoice !== x) {
   		console.log(userChoice);
   		console.log(x);

	   	if(userChoice < x) {
			console.log("You are too cold!")
			userChoice = prompt("Guess again")
			parseInt(userChoice, 10);
			userChoice = parseInt(userChoice);
		}

		if(userChoice > x) {
			console.log("You are too hot!");
			userChoice = prompt("Guess again")
			parseInt(userChoice, 10);
			userChoice = parseInt(userChoice);
		}

   }

   	if(userChoice === x) {
	      console.log ("You guessed correctly!");
	   }

};

var userChoice = prompt("Do you want to guess?"); //first prompt box

if(userChoice === "yes") {
	userChoice = window.prompt("Guess a number between 1 and 100!") //second prompt box
	parseInt(userChoice, 10);
	userChoice = parseInt(userChoice); //parseInt converts the userChoice from a string into a number
}

guessGame();


// userChoice = 'number'
// if(typeof userChoice !== 'number') {
// 	throw prompt("That is not a number");
// }


// else if(userChoice !== "yes")


// (typeof userChoice !== 'number') { 		//typeof should evaluate if userChoice is a non-number and prompt again.
// 	throw prompt("That is not a number");
	// } 								
	
 //guessGame is the function of my game that runs above the prompt.




// if(isNaN())