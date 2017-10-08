var prom = prompt("Enter a value.");
while (isNaN(prom) && !(prom == "done")){
     prom = prompt("Invalid input.  Enter a value"); 
}
var numIn, numUser, sqrNum, mean, varience, std, lcUser;
var turns = 0;
var sum = 0;
var sumSqr = 0;
var value;

var min = 1000000000;
var max = -1000000000;


//if (prom =="done"){
//	document.write("</table>");
//}


while (prom != "done"){
	value = Number(prom);
	turns++;
	sqrNum = value*value;
	sum = sum + value;
	sumSqr = sumSqr + sqrNum;
	if (value>max){
		max = value;
	}
	if (value<min){
		min = value;
	}
	

	document.write("<tr><td>"+turns+"</td><td>"+value+"</td><td>"+sqrNum+"</td><td>"+sum+"</td><td>"+sumSqr+"</td><td>"+ min +"</td><td>"+ max +"</td></tr>");

	
	var prom = prompt("Enter a value.");
	while (isNaN(prom) && !(prom == "done")){
	     prom = prompt("Invalid input.  Enter a value"); 
	}

}

document.write("</table>");
	var mean = sum/turns;
	var varience = (sumSqr-((sum*sum)/turns))/(turns-1);
	var std = Math.sqrt(varience);
	var range = max - min;
	document.write("Sample size is " + turns + "<br/>");
	document.write("Sample mean is " + mean + "<br/>");
	document.write("Sample varience is " + varience + "<br/>");
	document.write("Sample standard deviation is " + std + "<br/>");
	document.write("Range is " + range + "<br/>");
	