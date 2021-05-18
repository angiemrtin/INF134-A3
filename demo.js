import {MyToolkit} from './mytoolkit.js';


//Button
var btn = new MyToolkit.Button;
btn.setId("button1");
btn.label("hello!");
btn.move(50,50);
btn.onclick(function(e){
	console.log("click at " + e.target.id)
});

//Checkbox
var checkbox = new MyToolkit.Checkbox;
checkbox.move(200, 60);
checkbox.label("hello checkbox");

//Radio Buttons
var radioGroup = new MyToolkit.RadioButton(4);
radioGroup.move(50, 150);
radioGroup.label("change me!");
radioGroup.onclick(function(e){
	console.log("click at " + e.target.id)
});

//Progress Bar
var progressBar = new MyToolkit.ProgressBar;
progressBar.setBarWidth(300);
progressBar.move(300, 150);
progressBar.setProgressWidth(25);
progressBar.getValue();
progressBar.incrementValue(25);
progressBar.getValue();