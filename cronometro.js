function begin()  
{
	//Obtencion de la fecha actual
	now = new Date();
	
	//Fecha a la cual se va a llegar
	target = new Date("Jun 12 2014 23:59:59");

	//Se restan los dias de la fecha y se redondea
	days = (target - now) / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);

	//Se restan las horas de la fecha y se redondean
	hours = (target - now) / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = Math.floor(hours);

	//Se restan los minutos de la fecha y se redondean
	minutes = (target - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = Math.floor(minutes);

	//Se restan los segundos de la fecha y se redondean
	seconds = (target - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
	secondsRound = Math.round(seconds);

	sec = (secondsRound == 1) ? " segundo" : " segundos";
	min = (minutesRound == 1) ? " minuto" : " minutos, ";
	hr = (hoursRound == 1) ? " hora" : " horas, ";
	day = (daysRound == 1)  ? " día" : " d&iacute;as, "

	//Hace el display de la cuenta en el elemento con id display
	document.getElementById("display").innerHTML = daysRound  + day + hoursRound + hr + minutesRound + min + secondsRound + sec + " <br />Para el Mundial Brasil 2014";
	
	//La funcion se llama cada segundo para actualizarse
	newtime = window.setTimeout("begin();", 1000);
}