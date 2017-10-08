function displayGrid()



{

$("[cellnum=1]").text(cell1) ;


$("[cellnum=2]").text(cell2) ;


$("[cellnum=3]").text(cell3) ;


$("[cellnum=4]").text(cell4) ;


$("[cellnum=5]").text(cell5) ;


$("[cellnum=6]").text(cell6) ;


$("[cellnum=7]").text(cell7) ;


$("[cellnum=8]").text(cell8) ;


$("[cellnum=9]").text(cell9) ;
}

function enableClicks()


{

$("td").click(doclick);


}

function disableClicks()
{


$("td").unbind();

}

function NoWinner()

{

$("#gamewin").text("No one won the game");


}

function WinGameO()


{



$("#gamewin").text("You have lost the game");



}

function WinGameX()



{


$("#gamewin").text("You have won the game");

}

function Beginner () {
skillLevel = "B";
$("").text("");
}


function Expert ()  {
skillLevel = "E";
$("").text("");
}