function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.' ;
  console.log(message);
  

}

//Converter of inch to centimeters
function iToC() {
	
	var inches = parseInt(document.getElementById("value1").value);
	
	var centimeters = inches * 2.54;
	var message = inches + ' inch converts to ' + centimeters + ' centimeters.' ;
	console.log(message);
}



	