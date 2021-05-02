import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
//document.getElementById("button").display("block");
btn.move(100,100);
btn.onclick(function(e){
	console.log(e);
});
