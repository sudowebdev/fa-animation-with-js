/* All the JavaScript for thermometer.html is put here */

//script for full-empty animation
let node = document.getElementById('node');


function emptyTheThermometer(){

	/*
	using unicode value of font-awesome icons and appending that to &#x
	for instance, the unicode value of the below icon is: f2c7.
	which after appending to &#x becomes &#xf2c7 
	*/
	node.innerHTML = '&#xf2c7;';

	setTimeout(function(){
		node.innerHTML = '&#xf2cb;';
	}, 1000);
}

emptyTheThermometer();


setInterval(emptyTheThermometer, 2000);


//script for (x4) thermometer animation
let anotherNode = document.getElementById('node-2');

function fillTheThermometer(){

	anotherNode.innerHTML = '&#xf2cb;';

	setTimeout(function(){
		anotherNode.innerHTML = '&#xf2ca;';
	}, 1000);

	setTimeout(function(){
		anotherNode.innerHTML = '&#xf2c9;';
	}, 2000);

	setTimeout(function(){
		anotherNode.innerHTML = '&#xf2c8;';
	}, 3000);	
	
	setTimeout(function(){
		anotherNode.innerHTML = '&#xf2c7;';
	}, 4000);	

}

fillTheThermometer();

setInterval(fillTheThermometer, 5000);
