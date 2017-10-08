/**
 * 
 */
// Global Variables
cell1 = "";
cell2 = "";
cell3 = "";
cell4 = "";
cell5 = "";
cell6 = "";
cell7 = "";
cell8 = "";
cell9 = "";

skillLevel = "B";

//-----------------------------------------------------------------------------
function doclick() {
	var result;
	disableClicks();  // user clicks are not defined now
	var cellnum = $(this).attr("cellnum");
	if ((cellnum == "1") && (cell1 == "")) {
		cell1 = "X";
	}
	else if ((cellnum == "2") && (cell2 == "")) {
		cell2 = "X";
	}
	else if ((cellnum == "3") && (cell3 == "")) {
		cell3 = "X";
	}
	else if ((cellnum == "4") && (cell4 == "")) {
		cell4 = "X";
	}
	else if ((cellnum == "5") && (cell5 == "")) {
		cell5 = "X";
	}
	else if ((cellnum == "6") && (cell6 == "")) {
		cell6 = "X";
	}
	else if ((cellnum == "7") && (cell7 == "")) {
		cell7 = "X";
	}
	else if ((cellnum == "8") && (cell8 == "")) {
		cell8 = "X";
	}
	else if ((cellnum == "9") && (cell9 == "")) {
		cell9 = "X";
	}
	else {
		console.log("no action");
		enableClicks();
		return;
	}
	displayGrid();       // update the visible table
	result = checkXWin();  // check if the player won the game
	if (result) return;  // we end with user clicks undefined - game ends
	result = checkGameOver();  // check if all tiles are used
	if (result) {
		NoWinner();
		return;
	}
	programTurn();
	displayGrid();
	result = checkOWin();  // check if program won the game
	if (result) return;  // we end with user clicks undefined - game ends
	result = checkGameOver();  // check if all tiles are used
	if (result) {
		NoWinner();
		return;
	}
	enableClicks();   // restore player's ability to click
}

//-----------------------------------------------------------------------------
function checkXWin() {
	var result = checkWin("X");
	if (result) WinGameX();
	return result;
}

//-----------------------------------------------------------------------------
function checkOWin() {
	var result = checkWin("O");
	if (result) WinGameO();
	return result;
}

//-----------------------------------------------------------------------------
function checkGameOver() {
	var blank = "";
	if ((cell1==blank) || (cell2==blank) || (cell3==blank) || (cell4==blank) || (cell5==blank) ||
	   (cell6==blank) || (cell7==blank) || (cell8==blank) || (cell9==blank))
		return false;
	else
		return true;
}

//-----------------------------------------------------------------------------
function checkWin(char) {
	// check 1,2,3
	if ((cell1==char) && (cell2==char) && (cell3==char)) {
		return true;
	}
	// check 4,5,6
	if ((cell4==char) && (cell5==char) && (cell6==char)) {
		return true;
	}
	// check 7,8,9
	if ((cell7==char) && (cell8==char) && (cell9==char)) {
		return true;
	}
	// check 1,4,7
	if ((cell1==char) && (cell4==char) && (cell7==char)) {
		return true;
	}
	// check 2,5,8
	if ((cell2==char) && (cell5==char) && (cell8==char)) {
		return true;
	}
	// check 3,6,9
	if ((cell3==char) && (cell6==char) && (cell9==char)) {
		return true;
	}
	// check 1,5,9
	if ((cell1==char) && (cell5==char) && (cell9==char)) {
		return true;
	}
	// check 3,5,7
	if ((cell3==char) && (cell5==char) && (cell7==char)) {
		return true;
	}
	// at this point noone has won the game
	return false;
}
	
//-----------------------------------------------------------------------------
function programTurn() {
	if (skillLevel == "E") programTurnExpert();
	else programTurnBeginner();
}

//-----------------------------------------------------------------------------
function programTurnExpert() {
	// can we win the game
	if (makeWinMove()) return;
	// can we block the player's win
	if (blockWin()) return; // do block player's win
	// check center
	if (docenter()) return; // chose the center tile
	// check 4 corners
	if (docorner()) return; // chose a corner tile
	// check the 4 non-corners, non-center
	if (dosides()) return;  // chose a side tile
	
	// at this point we couldn't make a move -- all squares are filled and noone won
	
	//NoWinner();
	//console.log("Error: program could not make a legal move");
	//alert("Error:  program could not make a legal move");
}

//-----------------------------------------------------------------------------
function programTurnBeginner() {
	blank = "";
	if (cell1==blank) {
		cell1 = "O";
		return;
	}
	else if (cell2==blank) {
		cell2 = "O";
		return;
	}
	else if (cell3==blank) {
		cell3 = "O";
		return;
	}
	else if (cell4==blank) {
		cell4 = "O";
		return;
	}
	else if (cell5==blank) {
		cell5 = "O";
		return;
	}
	else if (cell6==blank) {
		cell6 = "O";
		return;
	}
	else if (cell7==blank) {
		cell7 = "O";
		return;
	}
	else if (cell8==blank) {
		cell8 = "O";
		return;
	}
	else if (cell9==blank) {
		cell9 = "O";
		return;
	}
	
	// at this point we couldn't make a move -- all squares are filled and noone won
	
	//NoWinner();
	//console.log("Error: program could not make a legal move");
	//alert("Error:  program could not make a legal move");
}

//-----------------------------------------------------------------------------
function makeWinMove() {
	char = "O";
	blank = "";
	// check first row
	if ((cell1==char) && (cell2==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
    if ((cell1==char) && (cell3==char) && (cell2==blank)) {
    	cell2 = "O";
    	return true;
    }
	if ((cell2==char) && (cell3==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
	
	// check second row
	if ((cell4==char) && (cell5==char) && (cell6==blank)) {
		cell6 = "O";
		return true;
	}
	if ((cell4==char) && (cell6==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}	
	if ((cell5==char) && (cell6==char) && (cell4==blank)) {
		cell4 = "O";
		return true;
	}
	
	// check third row
	if ((cell7==char) && (cell8==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell7==char) && (cell9==char) && (cell8==blank)) {
		cell8 = "O";
		return true;
	}
	if ((cell8==char) && (cell9==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	
	// check first column 1,4,7
	if ((cell1==char) && (cell4==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	if ((cell1==char) && (cell7==char) && (cell4==blank)) {
		cell4 = "O";
		return true;
	}
	if ((cell4==char) && (cell7==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
	
	// check 2nd column 2,5,8
	if ((cell2==char) && (cell5==char) && (cell8==blank)) {
		cell8 = "O";
		return true;
	}
	if ((cell2==char) && (cell8==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell8==char) && (cell2==blank)) {
		cell2 = "O";
		return true;
	}
	
	// check 3rd column 3,6,9
	if ((cell3==char) && (cell6==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell3==char) && (cell9==char) && (cell6==blank)) {
		cell6 = "O";
		return true;
	}
	if ((cell6==char) && (cell9==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
	
	// check first diagonal 1,5,9
	if ((cell1==char) && (cell5==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell1==char) && (cell9==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell9==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
		
	// check second diagonal 3,5,7
	if ((cell3==char) && (cell5==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	if ((cell3==char) && (cell7==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell7==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
	
	// at this point we do can't win on this move
	return false;
}

//-----------------------------------------------------------------------------
function blockWin() {
	char = "X";
	blank = "";
	// check first row
	if ((cell1==char) && (cell2==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
    if ((cell1==char) && (cell3==char) && (cell2==blank)) {
    	cell2 = "O";
    	return true;
    }
	if ((cell2==char) && (cell3==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
	
	// check second row
	if ((cell4==char) && (cell5==char) && (cell6==blank)) {
		cell6 = "O";
		return true;
	}
	if ((cell4==char) && (cell6==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}	
	if ((cell5==char) && (cell6==char) && (cell4==blank)) {
		cell4 = "O";
		return true;
	}
	
	// check third row
	if ((cell7==char) && (cell8==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell7==char) && (cell9==char) && (cell8==blank)) {
		cell8 = "O";
		return true;
	}
	if ((cell8==char) && (cell9==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	
	// check first column 1,4,7
	if ((cell1==char) && (cell4==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	if ((cell1==char) && (cell7==char) && (cell4==blank)) {
		cell4 = "O";
		return true;
	}
	if ((cell4==char) && (cell7==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
	
	// check 2nd column 2,5,8
	if ((cell2==char) && (cell5==char) && (cell8==blank)) {
		cell8 = "O";
		return true;
	}
	if ((cell2==char) && (cell8==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell8==char) && (cell2==blank)) {
		cell2 = "O";
		return true;
	}
	
	// check 3rd column 3,6,9
	if ((cell3==char) && (cell6==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell3==char) && (cell9==char) && (cell6==blank)) {
		cell6 = "O";
		return true;
	}
	if ((cell6==char) && (cell9==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
	
	// check first diagonal 1,5,9
	if ((cell1==char) && (cell5==char) && (cell9==blank)) {
		cell9 = "O";
		return true;
	}
	if ((cell1==char) && (cell9==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell9==char) && (cell1==blank)) {
		cell1 = "O";
		return true;
	}
		
	// check second diagonal 3,5,7
	if ((cell3==char) && (cell5==char) && (cell7==blank)) {
		cell7 = "O";
		return true;
	}
	if ((cell3==char) && (cell7==char) && (cell5==blank)) {
		cell5 = "O";
		return true;
	}
	if ((cell5==char) && (cell7==char) && (cell3==blank)) {
		cell3 = "O";
		return true;
	}
	
	// at this point we do not need to block a win
	return false;
}

//-----------------------------------------------------------------------------
function docenter() {
	blank = "";
	// check first row
	if (cell5==blank) {
		cell5 = "O";
		return true;
	}
	return false;
}

//-----------------------------------------------------------------------------
function docorner() {
	blank = "";
	// check first row
	if (cell1==blank) {
		cell1 = "O";
		return true;
	}
	if (cell3==blank) {
		cell3 = "O";
		return true;
	}
	if (cell7==blank) {
		cell7 = "O";
		return true;
	}
	if (cell9==blank) {
		cell9 = "O";
		return true;
	}
	// we could not put an O in a corner
	return false;
	
}

//-----------------------------------------------------------------------------
function dosides() {
	if (cell2==blank) {
		cell2 = "O";
		return true;
	}
	if (cell4==blank) {
		cell4 = "O";
		return true;
	}
	if (cell6==blank) {
		cell6 = "O";
		return true;
	}
	if (cell8==blank) {
		cell8 = "O";
		return true;
	}
	// we could not put an O in a side
	return false;	
}

//-----------------------------------------------------------------------------
function initGame() {
	//$("#area1").css('color','black');
	//$("#area2").css('color','black');
	//$("#area3").css('color','black');
	//$("#area4").css('color','black');
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    cell5 = "";
    cell6 = "";
    cell7 = "";
    cell8 = "";
    cell9 = "";
    skillLevel = getValidSkill();
	displayGrid();
	enableClicks();
	return;
}

//-----------------------------------------------------------------------------
function getValidSkill() {
	var result = prompt('Enter "E" for (E)xpert or "B" for (B)eginner');
	while ((result != "E" && result != "B")) {
		result = prompt('Invalid input!  Enter "E" for (E)xpert or "B" for (B)eginner');
	}
	return result;
}

