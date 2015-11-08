function TryAgain() {
	var TA = confirm("Would you like to try again?");
	if (TA) {
		final();
	}
}






function final() {

// User Choice Init
var uc = prompt("Choose rock, paper, or scissors").toUpperCase();
console.log(uc);
if (uc != "ROCK" && uc != "PAPER" && uc != "SCISSORS" ) {
	alert("Invalid choice, please try again");
	final();
}


// Computer Choice Init
	var cc = Math.floor((Math.random() * 3) + 1);
	if (cc == 1) {
		cc = "ROCK";
		console.log(cc);
	}
	else if (cc == 2) {
		cc = "PAPER";
		console.log(cc);
		
	}
	else {
		cc = "SCISSORS";
		console.log(cc);
		
	}

// User Wins
if ((uc === "ROCK" && cc === "SCISSORS")||(uc === "PAPER" && cc === "ROCK")||(uc === "SCISSORS" && cc==="PAPER")) {
alert("Computer chose "+cc.toLowerCase()+". You win!");
TryAgain();
}


// User Loses
if ((uc === "SCISSORS" && cc === "ROCK")||(uc === "ROCK" && cc === "PAPER")||(uc === "PAPER" && cc==="SCISSORS")) {
alert("Computer chose "+cc.toLowerCase()+". You lose!");
TryAgain();
}


// Tie

if ((uc === "SCISSORS" && cc === "SCISSORS")||(uc === "ROCK" && cc === "ROCK")||(uc === "PAPER" && cc==="PAPER")) {
alert("Computer chose "+cc.toLowerCase()+". It's a tie!");
TryAgain();
}



}






final ();