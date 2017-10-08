

var prom = prompt("Enter a value.");
var numIn, numUser, sqrNum, mean, varience, std, lcUser;
var turns = 0;
var sum = 0;
var sumSqr = 0;
var value;


if (prom =="done"){
	document.write("</table>");
}







while (prom!= "done"){
value = Number(prom);
turns++;
sqrNum = value*value;
	sum = sum + value;
	sumSqr = sumSqr + sqrNum;

document.write("<tr><td>"+turns+"</td><td>"+value+"</td><td>"+sqrNum+"</td><td>"+sum+"</td><td>"+sumSqr+"</td></tr>");



	
	
prom = prompt('Enter a value or type "done".');

}

document.write("</table>");
	var mean = sum/turns;
	var varience = (sumSqr-((sum*sum)/turns))/(turns-1);
	var std = Math.sqrt(varience);
	document.write("Sample size is " + turns + "<br />");
	document.write("Sample mean is " + mean + "<br />");
	document.write("Sample varience is " + varience + "<br />");
	document.write("Sample standard deviation is " + std + "<br />");

	
