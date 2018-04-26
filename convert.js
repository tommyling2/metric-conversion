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

//Converter of yards to meters
function yToM() {
	
	var yards = parseInt(document.getElementById("value1").value);
	
	var meters = yards * 0.9144;
	var message = yards + ' yard converts to ' + meters + ' meters.' ;
	console.log(message);
}

//Converter of miles to kilometers
function mToK() {
	
	var miles = parseInt(document.getElementById("value1").value);
	
	var kilometers = miles * 1.60934;
	var message = miles + ' mile converts to ' + kilometers + ' kilometers.' ;
	console.log(message);
}

	