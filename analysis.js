//Enter desired amount of games to be simulated after the equal sign

i = 2;

//Do not edit below this line
var ucr = 0;
var ucp = 0;
var ucs = 0;
var a = 0;
var b = 0;
var c = 0;
var rw = 0;
var rl = 0;
var rt = 0;
var pw = 0;
var pl = 0;
var pt = 0;
var sw = 0;
var sl = 0;
var st = 0;

for (var z = 1; z <= i; z++) {
// User Choice Init
var uc = Math.floor((Math.random() * 3) + 1);
if (uc == 1) {
	uc = "ROCK";
	ucr++;
}
else if (uc == 2) {
	uc = "PAPER";
	ucp++;

}
else {
	uc = "SCISSORS";
	ucs++;

}



// Computer Choice Init
var cc = Math.floor((Math.random() * 3) + 1);
if (cc == 1) {
	cc = "ROCK";
}
else if (cc == 2) {
	cc = "PAPER";


}
else {
	cc = "SCISSORS";


}

// User Wins
if ((uc === "ROCK" && cc === "SCISSORS")||(uc === "PAPER" && cc === "ROCK")||(uc === "SCISSORS" && cc==="PAPER")) {
	a++;

}


// User Loses
if ((uc === "SCISSORS" && cc === "ROCK")||(uc === "ROCK" && cc === "PAPER")||(uc === "PAPER" && cc==="SCISSORS")) {
	b++;

}


// Tie
if ((uc === "SCISSORS" && cc === "SCISSORS")||(uc === "ROCK" && cc === "ROCK")||(uc === "PAPER" && cc==="PAPER")) {
	c++;
}

// Rock Wins 
if (uc === "ROCK" && cc==="SCISSORS") {
	rw++;
}

// Rock Loses 
if (uc === "ROCK" && cc==="PAPER") {
	rl++;
}

// Rock Ties
if (uc === "ROCK" && cc==="ROCK") {
	rt++;
}

// Paper Wins 
if (uc === "PAPER" && cc==="ROCK") {
	pw++;
}

// Paper Loses 
if (uc === "PAPER" && cc==="SCISSORS") {
	pl++;
}

// Paper Ties
if (uc === "PAPER" && cc==="PAPER") {
	pt++;
}

// Scissors Wins 
if (uc === "SCISSORS" && cc==="PAPER") {
	sw++;
}

// Scissors Loses 
if (uc === "SCISSORS" && cc==="ROCK") {
	sl++;
}

// Scissors Ties
if (uc === "SCISSORS" && cc==="SCISSORS") {
	st++;
}

}

//Data Validation

// Total Wins 
var tw = rw+pw+sw;

// Total losses 
var tl = rl+pl+sl; 

// Total Ties 
var tt = rt+pt+st;

if ((tw===a)&&(tl===b)&&(tt===c)) {

	// Detailed Results
	console.log(" Data validated. Starting detailed user results for "+i+" simulations");
	console.log("User won "+a+" amount of times");
	console.log("User lost "+b+" amount of times");
	console.log("User tied "+c+" amount of times");
	console.log("User chose rock "+ucr+" amount of times");
	console.log("User chose paper "+ucp+" amount of times");
	console.log("User chose scissors "+ucs+" amount of times");
	console.log("Rock won "+rw+" amount of times");
	console.log("Rock lost "+rl+" amount of times");
	console.log("Rock tied "+rt+" amount of times");
	console.log("Paper won "+pw+" amount of times");
	console.log("Paper lost "+pl+" amount of times");
	console.log("Paper tied "+pt+" amount of times");
	console.log("Scissors won "+sw+" amount of times");
	console.log("Scissors lost "+sl+" amount of times");
	console.log("Scissors tied "+st+" amount of times");
	console.log("End detailed results");

	// Result Analysis

	// Percantage of Rock Throws 
	var ucrp = (ucr/i)*100;
	
	// Percantage of Paper Throws 
	var ucpp = (ucp/i)*100;

	// Percantage of Scissors Throws 
	var ucsp = (ucs/i)*100;

	// Percantage of games won 
	var ap = (a/i)*100;

	// Percantage of games lost 
	var bp = (b/i)*100;

	// Percantage of games tied
	var cp = (c/i)*100;

	// Percantage of Rock Wins 
	var rwp = (rw/i)*100;

	// Percantage of Rock Losses 
	var rlp = (rl/i)*100; 

	// Percantage of Rock Ties 
	var rtp = (rt/i)*100;

	// Percantage of Paper Wins 
	var pwp = (pw/i)*100;

	// Percantage of Paper Losses 
	var plp = (pl/i)*100;

	// Percantage of Paper Ties 
	var ptp = (pt/i)*100;

	// Percantage of Scissors Wins 
	var swp = (sw/i)*100;

	// Percantage of Scissors Losses 
	var slp = (sl/i)*100;

	// Percant of Scissors Ties 
	var stp = (st/i)*100;

	console.log("Starting analysis of user results");
	console.log("User won "+ap+"% of the time");
	console.log("User lost "+bp+"% of the time");
	console.log("User tied "+cp+"% of the time");
	console.log("User chose rock "+ucrp+"% of the time");
	console.log("User chose paper "+ucpp+"% of the time");
	console.log("User chose scissors "+ucsp+"% of the time");
	console.log("Rock won "+rwp+"% of the time");
	console.log("Rock lost "+rlp+"% of the time");
	console.log("Rock tied "+rtp+"% of the time");
	console.log("Paper won "+pwp+"% of the time");
	console.log("Paper lost "+plp+"% of the time");
	console.log("Paper tied "+ptp+"% of the time");
	console.log("Scissors won "+swp+"% of the time");
	console.log("Scissors lost "+slp+"% of the time");
	console.log("Scissors tied "+stp+"% of the time");
	console.log("End analysis of results");
}

// If you get here, then idk what to say to you bud
else {
	alert("System Derped :p");
}

