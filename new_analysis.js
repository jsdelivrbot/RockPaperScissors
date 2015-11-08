// // Non-Percentage Variables
var Simulations;

function getsimulations() {
	Simulations = prompt("Enter amount of games to be simulated");
	if (isNaN(Simulations) == true) {
		alert(Simulations+" is not a number. Please enter a valid value");
		getsimulations();
	}
}

getsimulations();

var UserChoseRock = 0,
	UserChosePaper = 0,
	UserChoseScissors = 0,
	Wins = 0,
	Losses = 0,
	Ties = 0,
	RockWins = 0,
	RockLosses = 0,
	RockTies = 0,
	PaperWins = 0,
	PaperLosses =0 ,
	PaperTies = 0,
	ScissorsWins = 0,
	ScissorsLosses = 0,
	ScissorsTies = 0;

// Percantage Variables
var WinsPercent,
	LossesPercent,
	TiesPercent, 
	RockWinsPercent,
	RockLossesPercent,
	RockTiesPercent,
	PaperTiesPercent,
	PaperLossesPercent,
	PaperWinsPercent,
	ScissorsTiesPercent,
	ScissorsWinsPercent,
	ScissorsLossesPercent;

// Rock, Paper, or Scissors 
var Choices = [null,"rock","paper","scissors"];
	
// Possible Choices
var UserChoice,
	ComputerChoice;

// HTML Elements
var RockWinsHTML = document.getElementById("RockWins"),
	RockLossesHTML = document.getElementById("RockLosses"),
	RockTiesHTML = document.getElementById("RockTies"),
	PaperWinsHTML = document.getElementById("PaperWins"),
	PaperLossesHTML = document.getElementById("PaperLosses"),
	PaperTiesHTML = document.getElementById("PaperTies"),
	ScissorsWinsHTML = document.getElementById("ScissorsWins"),
	ScissorsLossesHTML = document.getElementById("ScissorsLosses"),
	ScissorsTiesHTML = document.getElementById("ScissorsTies"),
	WinsHTML = document.getElementById("TotalWins"),
	LossesHTML = document.getElementById("TotalLosses"),
	TiesHTML = document.getElementById("TotalTies"),
	AmountOfGamesHTML = document.getElementById("Gamereviwer");

// Wins and Losses Evaluator 
function WinLoss() {
	
	// User Choice Init
	UserChoice = Choices[Math.floor((Math.random() *3) + 1)];

	// Computer Choice Init
	ComputerChoice = Choices[Math.floor((Math.random() *3) + 1)];


	// Rock Wins 
	if (UserChoice === "rock" && ComputerChoice === "scissors" ) {
		Wins++;
		RockWins++;
	}

	// Rock Loses 
	else if (UserChoice === "rock" && ComputerChoice === "paper") {
		Losses++;
		RockLosses++;
	}

	// Rock Ties 
	else if (UserChoice === "rock" && ComputerChoice === "rock") {
		Ties++;
		RockTies++;
	}

	// Paper Wins
	if (UserChoice === "paper" && ComputerChoice === "rock" ) {
		Wins++;
		PaperWins++;
	}

	// Paper Loses 
	else if (UserChoice === "paper" && ComputerChoice === "scissors") {
		Losses++;
		PaperLosses++;
	}

	// Paper Ties 
	else if (UserChoice === "paper" && ComputerChoice === "paper") {
		Ties++;
		PaperTies++;
	}

	// Scissors Wins
	if (UserChoice === "scissors" && ComputerChoice === "paper" ) {
		Wins++;
		ScissorsWins++;
	}

	// Scissors Loses 
	else if (UserChoice === "scissors" && ComputerChoice === "rock") {
		Losses++;
		ScissorsLosses++;
	}

	// Scissors Ties
	else if (UserChoice === "scissors" && ComputerChoice === "scissors") {
		Ties++;
		ScissorsTies++;
	}
	}

// Simulate Game(s)
for (var i = 1; i <= Simulations; i++) {
	WinLoss();
}

// Calculate Percantages 
function CalcPercent(StatInput) {
	return ((StatInput/Simulations) * 100).toFixed(2);
}

// Validate Game(s) and Analysis
if ((Wins===RockWins+PaperWins+ScissorsWins) && (Losses===RockLosses+PaperLosses+ScissorsLosses) && (Ties===RockTies+PaperTies+ScissorsTies)) {
	WinsPercent = CalcPercent(Wins) + "%";
	LossesPercent = CalcPercent(Losses) + "%";
	TiesPercent = CalcPercent(Ties) + "%";
	RockWinsPercent = CalcPercent(RockWins) + "%";
	RockLossesPercent = CalcPercent(RockLosses) + "%";
	RockTiesPercent = CalcPercent(RockTies) + "%";
	PaperTiesPercent = CalcPercent(PaperTies) + "%";
	PaperLossesPercent = CalcPercent(PaperLosses) + "%";
	PaperWinsPercent = CalcPercent(PaperWins) + "%";
	ScissorsTiesPercent = CalcPercent(ScissorsTies + "%");
	ScissorsWinsPercent	= CalcPercent(ScissorsWins) + "%";
	ScissorsLossesPercent = CalcPercent(ScissorsLossesPercent) + "%";
}

// If you get here, then idk what to say to you bud
else {
	alert("System Derped :p");
}


function Rename(element) {
	switch(element) {
		case RockWinsHTML: 
							RockWinsHTML.innerHTML = "Rock Wins: "+RockWins+" ("+RockWinsPercent+")";
							break;
		case RockLossesHTML: 
							break;
		case RockTiesHTML: 
							break;
		case PaperWinsHTML: 
							break;
		case PaperLossesHTML: 
							break;
		case PaperTiesHTML: 
							break;	
		case ScissorsWinsHTML: 
							break;
		case ScissorsLossesHTML: 
							break;
		case ScissorsTiesHTML: 
							break;
		case WinsHTML: 
							break;	
		case LossesHTML: 
							break;
		case TiesHTML: 
							break;
		case AmountOfGamesHTML: 
							AmountOfGamesHTML.innerHTML = "Games simulated: "+Simulations;
							break;																							
																		
	}
}

Rename(RockWinsHTML);
Rename(AmountOfGamesHTML);
