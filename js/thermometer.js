/* All the JavaScript for thermometer.html is put here */

//script for full-empty animation
let node = document.getElementById('node');


function emptyTheThermometer(){

	node.innerHTML = '&#xf2c7;';

	setTimeout(function(){
		node.innerHTML = '&#xf2cb;';
	}, 1000);
}

emptyTheThermometer();


setInterval(emptyTheThermometer, 2000);



