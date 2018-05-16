
function promptMe() {
	let secretNumber = Math.floor((Math.random() * 200) + 1); //variable that chooses a random number between 1 - 200
	let guess = Number(prompt("Choose a number from 1 - 200")); // prompt appears 
	let guesses = 1; 
	let tries = 10;
	let img = document.getElementById("winLose"); 
	while(guess != secretNumber) {
		console.log(guesses)
		if(guesses >= tries) { // if player uses all 10 guesses display this
			img.innerHTML = '<img class="loseImage" src=\'img/draculaLose.jpg\'>' + "<h3 class='loseMessage'> YOU LOSE!</h3>" + "The Count is Dissapointed with your guesses."  + "<br>" + "<button  id='playAgain' onclick='promptMe()'>Play Again</button>";
			break
		} else if (guess > secretNumber) { //if guess is is to high
			guesses++
			guess = prompt("That is incorrect, Guess Lower")
		} else if (guess < secretNumber) { //if guess is to low
			guesses++
			guess = prompt("That is incorrect, Guess Higher")
		}
	}
	if(guesses < tries) { //if random number is guessed under 10 tries, this will display
		img.innerHTML = '<img class="winImage" src=\'img/draculaWin.jpg\'>' + "<h3 class='winMessage'> YOU WIN!</h3>" + "<p>You got it! it only took you <span class='guesses'>" + guesses + "</span>" + " guesses!</p>";	 
	}
};

var startBtn = document.getElementById('startGame'); 
startBtn.addEventListener("click", promptMe, false);
