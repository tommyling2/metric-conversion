// Converter of feet to meters
function fToM(){


  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.' ;
  console.log(message);
  
  
  //Alert user if they entered a negative value
  if( measure < 0) {
	  alert("No negative values allowed");
  }
  

}

//Converter of inch to centimeters
function iToC() {
	
	var inches = parseInt(document.getElementById("value1").value);
	
	var centimeters = inches * 2.54;
	var message = inches + ' inch converts to ' + centimeters + ' centimeters.' ;
	console.log(message);
	
	//Alert user if they entered a negative value
  if( inches < 0) {
	  alert("No negative values allowed");
  }
}

//Converter of yards to meters
function yToM() {
	
	var yards = parseInt(document.getElementById("value1").value);
	
	var meters = yards * 0.9144;
	var message = yards + ' yard converts to ' + meters + ' meters.' ;
	console.log(message);
	
	//Alert user if they entered a negative value
  if( yards < 0) {
	  alert("No negative values allowed");
  }
}

//Converter of miles to kilometers
function mToK() {
	
	var miles = parseInt(document.getElementById("value1").value);
	
	var kilometers = miles * 1.60934;
	var message = miles + ' mile converts to ' + kilometers + ' kilometers.' ;
	console.log(message);
	
	//Alert user if they entered a negative value
  if( miles < 0) {
	  alert("No negative values allowed");
  }
}

	