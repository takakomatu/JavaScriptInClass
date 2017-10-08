

var vehicletype = prompt("Vehicle code: E (Economy size), C (Compact size), S (Standard size), F (Full size), V (Van), T (Truck), or U (SUV)?");

	


	if (vehicletype == "V"){
	var subtype = prompt("M (Minivan) or P (Passenger van?");
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));




	if (subtype == "M"){
	document.write("Vehicle type:  ("+ vehicletype +") Van <br>");
	document.write("Vehicle subtype: ("+ subtype +") Minivan<br>");
	document.write("Days rented: "+ NumDays +"<br>")
	var calcforrentalfee = 49.99*NumDays;
	var calcforMileagecharge = 0.35*NumMiles;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>")
	document.write("Miles driven: "+ NumMiles +"<br>")
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>")
	var calcfortotal = calcforrentalfee + calcforMileagecharge;
	document.write("Total charge: $"+ calcfortotal +"")
}
	
	if (subtype == "P"){
	document.write("Vehicle type:  ("+ vehicletype +") Van <br>");
	document.write("Vehicle subtype: ("+ subtype +") Passenger<br>");
	document.write("Days rented: "+ NumDays +"<br>")
	var calcforrentalfee = 59.99*NumDays;
	var calcforMileagecharge = 0.35*NumMiles;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>")
	document.write("Rental fee: $ "+ calcforrentalfee +"<br>")
	document.write("Miles driven: "+ NumMiles +"<br>")
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>")
	var calcfortotal = calcforrentalfee + calcforMileagecharge;
	document.write("Total charge: $"+ calcfortotal +"")
}

	}
	


	if (vehicletype == "U"){
	var subtype = prompt("S (Small) or L (Large)?");
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));

	
	if (subtype == "S"){
	document.write("Vehicle type: ("+ vehicletype +") SUV<br>");
	document.write("Vehicle subtype:  ("+ subtype +")  Small <br>");
	document.write("Days rented: "+ NumDays +"<br>")
	var calcforrentalfee = 54.99*NumDays;
	var calcuforMileagecharge = 0.37*NumMiles;
	document.write("Rental fee: $ "+ calcforrentalfee +"<br>")
	document.write("Miles driven: "+ NumMiles +"<br>")
	document.write("Mileage charge: $"+ calcuforMileagecharge +"<br>")
	var calcfortotal = calcforrentalfee + calcuforMileagecharge;
	document.write("Total charge: $"+ calcfortotal +"")
}
	if (subtype == "L"){
	document.write("Vehicle type: ("+ vehicletype +") SUV<br>");
	document.write("Vehicle subtype:  ("+ subtype +") Large <br>");
	document.write("Days rented: "+ NumDays +"<br>")
	var calcforrentalfee = 64.99*NumDays;
	var calcuforMileagecharge = 0.37*NumMiles;
	document.write("Days rented: "+ calcforrentalfee +"<br>")
	document.write("Miles driven: "+ NumMiles +"<br>")
	document.write("Mileage charge: $"+ calcuforMileagecharge +"<br>")
	var calcfortotal = calcforrentalfee + calcuforMileagecharge;
	document.write("Total charge: $"+ calcfortotal +"")
}

	}

if (vehicletype == "E"){
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));
	document.write("Vehicle type:  ("+ vehicletype +") Economy size <br>");
	document.write("Days rented:  "+ NumDays +" <br>");
	var calcforrentalfee = NumDays*29.99;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>");
	document.write("Miles driven: "+ NumMiles +"<br>");
	var calcforMileagecharge = 0.25*NumMiles;
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>");
	var calcfortotal = calcforMileagecharge + calcforrentalfee;
	document.write("Total charge: $"+ calcfortotal +"")
}
if (vehicletype == "C"){
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));
	document.write("Vehicle type:  ("+ vehicletype +") Compact size <br>");
	document.write("Days rented:  "+ NumDays +" <br>");
	var calcforrentalfee = NumDays*34.99;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>");
	document.write("Miles driven: "+ NumMiles +"<br>");
	var calcforMileagecharge = 0.27*NumMiles;
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>");
	var calcfortotal = calcforMileagecharge + calcforrentalfee;
	document.write("Total charge: $"+ calcfortotal +"")
}
if (vehicletype == "S"){
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));
	document.write("Vehicle type:  ("+ vehicletype +") Standard size <br>");
	document.write("Days rented:  "+ NumDays +" <br>");
	var calcforrentalfee = NumDays*39.99;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>");
	document.write("Miles driven: "+ NumMiles +"<br>");
	var calcforMileagecharge = 0.30*NumMiles;
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>");
	var calcfortotal = calcforMileagecharge + calcforrentalfee;
	document.write("Total charge: $"+ calcfortotal +"")
}
if (vehicletype == "F"){
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));
	document.write("Vehicle type:  ("+ vehicletype +") Full size <br>");
	document.write("Days rented:  "+ NumDays +" <br>");
	var calcforrentalfee = NumDays*44.99;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>");
	document.write("Miles driven: "+ NumMiles +"<br>");
	var calcforMileagecharge = 0.35*NumMiles;
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>");
	var calcfortotal = calcforMileagecharge + calcforrentalfee;
	document.write("Total charge: $"+ calcfortotal +"")
}
if (vehicletype == "T"){
	var NumDays = Number(prompt("Enter the number of days the vehicle was rented."));
	var NumMiles = Number(prompt("Enter the number of miles travelled during the rental period."));
	document.write("Vehicle type:  ("+ vehicletype +") Truck <br>"); 
	document.write("Days rented:  "+ NumDays +" <br>");
	var calcforrentalfee = NumDays*54.99;
	document.write("Rental fee: $"+ calcforrentalfee +"<br>");
	document.write("Miles driven: "+ NumMiles +"<br>");
	var calcforMileagecharge = 0.35*NumMiles;
	document.write("Mileage charge: $"+ calcforMileagecharge +"<br>");
	var calcfortotal = calcforMileagecharge + calcforrentalfee;
	document.write("Total charge: $"+ calcfortotal +"")
}


