var myGuess, count, compNum, avaCount;
var tourCount;
count = 0;
avaCount = 8;
var winCount, lossCount;
winCount = 0;
lossCount = 0;

function playTournament() {
    var gameResult;
    for (tourCount = 1; tourCount <= 3; tourCount++){
        gameResult = playGame();
        if (gameResult == true){
            winCount++;
        }
        else if (gameResult == false){
            lossCount++;
        }
        else if (gameResult == null){
            return;
        }
        //console.log(winCount);
        //console.log(lossCount);
    }

    
    if (winCount >= 2){
        document.write("Coungratulations! You won the tournamentby "+winCount+" - "+lossCount+"!!")
    }
    else {
        document.write("Sorry! You LOST the tournament by "+winCount+" - "+lossCount+"!!")
    }
}


function playGame() {
    compNum = generateValue();
    document.write("Game Number " + tourCount + "<br />");
    for (count = 1; count <= avaCount; count++) {
        myGuess = validateInpute();
        if (myGuess != null) {
            showGuess(count, myGuess);
        }
        
        //console.log(compNum);
        //console.log(myGuess);
        //console.log(count);

        if (myGuess == compNum) {
            showWin(myGuess);
            return true;
        }
        
        else if (myGuess < compNum) {
            showToLow(myGuess);
        }
        else if (myGuess > compNum) {
            showToHigh(myGuess);
        }
        else if (myGuess == null) {
            showGameCancel();
            return null;
        }
    }
    showLose(compNum);
    return false;
}

function showGuess(count, guess) {
    document.write("Your guess #" + count + " is " + guess + ". ");
}

function showWin(guess) {
    document.write("<br /><br /> Congratulations. You guessed my number (" + guess + ")!!<br /><br />");
}

function showLose(compG) {
    document.write("<br /> Sorry, you loose. My number was " + compG + ".<br /><br />");
}

function showToHigh(guess) {
    document.write("Sorry, " + guess + " is too high.<br />");
}

function showToLow(guess) {
    document.write("Sorry, " + guess + " is too low.<br />");
}

function showGameCancel() {
    document.write("Game was cancelled. Click <a href='lab5.html'>here</a> to refresh.");
}

function generateValue() {
    compNum = 1 + Math.floor(Math.random() * 100);
    return compNum;
}

function validateInpute() {
    var guess;
    var countLeft = (avaCount + 1) - count;
    var str = "Enter a whole number between 1 and 100. You have " + countLeft + " attempts left.";
    var num = prompt(str);
    //Checking for Cancel
    if (num == null) {
        guess == null;
        return guess;
    }
    //Checking that user entered valid number.
    guess = Number(num);
    while (isNaN(guess) || (guess < 1) || (guess > 100) || (guess != Math.floor(guess))) {
        num = prompt("That is not a valid number! " + str);
        guess = Number(num);
    }
    return guess;
}




