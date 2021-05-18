import {SVG} from './svg.min.js';
/**
 * MyToolkit function creates the widgets in my toolkit and returns them.
 * @returns Button, Progress Bar, Checkbox, Radio Buttons functions
 */
var MyToolkit = (function() {
    var draw = SVG().addTo('body').size(4000,4000);
    var window = draw.group();
    window.rect(700,700).stroke("pink").fill("#f9f2e8");


    /**
     * This function creates a Button widget and its methods for labelling and moving.
     * @returns a Button widget
     */
    var Button = function(){
        /**
         * Rectangle shape that will be the main button shape.
         * @type rect
         */
        var rect = draw.rect(100,50).fill('#DEB887').stroke('#9e7f57');
        /**The initial label for the button. */
        var label = draw.text("label").attr({x:47,y:8}).font({
            family:   'Playfair', 
            size:     16, 
            fill:     '#000',
            anchor:   'middle'
          });
        var clickEvent = null;
        /** This function handles the mouseover function for the button, and changes its color. */
        rect.mouseover(function(){
            this.fill({ color: 'LightCoral'});
            console.log("MOUSEOVER");
        })
        /** This function handles the mouseout function for the button.*/
        rect.mouseout(function(){
            this.fill({ color: '#DEB887'})
            console.log("IDLE");
        })
        /** This function handles the mouseup function for the button.*/
        rect.mouseup(function(){
            this.fill({ color: '#DEB887'})
            console.log("MOUSEUP");
        })
        /** This function handles the click event for the button, and changes its color.*/
        rect.click(function(event){
            this.fill({ color: '#b04a4a'})
            console.log("CLICK");
            if(clickEvent != null)
                clickEvent(event)
        })

        return {
            /**
             * Function to move the button and its label to the x,y coordinates.
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                rect.move(x, y);
                label.move(x+32,y+15)
            },
            /**
             * @param  {eventHandler} eventHandler for onclick event
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * @returns the rectangle (button)
             */
            src: function(){
                return rect;
            },
            /**
             * @param  {number} id function to set unique identifier for button
             */
            setId: function(id){
                rect.attr("id", id);
            },
            /**
             * @param  {string} string desired label for button that users input
             */
            label: function(string){
                label.text(string);
            }
        }
    }
    //CHECKBOX CODE
    /**
     * Code for creating a Checkbox widget.
     * @returns a Checkbox widget
     */
    var Checkbox = function(){
        /** The rectangle that will be the checkbox. */
        var rect = draw.rect(30,30).fill('white').stroke('#DEB887'); //checkbox box
        var clickEvent = null;
        /** Current state of the checkbox - either unchecked or checked. */
        var currentState = 'UNCHECKED';
        /** Checkmark image. */
        var checkmark = draw.text("✓").attr({"x":10,"y":0}); //actual checkmark image
        /** Label that will go to the right of the checkbox. */
        var label = draw.text("Label").attr({x:400,y:10}).font({ //initial label
            family:   'Playfair', 
            size:     16, 
            fill:     '#000',
          });
        checkmark.hide();
        console.log(currentState);
        
        /** This function handles the mouseover function for the checkbox.*/
        rect.mouseover(function(){
            console.log("MOUSEOVER");
        })
        /** This function handles the mouseout function for the checkbox.*/
        rect.mouseout(function(){
            console.log("IDLE");
            if (currentState == 'CHECKED') { //if checked, keep showing the checkmark
                checkmark.show();
            }
            else {
                checkmark.hide();} //if state changes to unchecked, hide the image
        })
        /** This function handles the mouseup function for the checkbox, decides whether it stays checked or not.*/
        rect.mouseup(function(){
            if (!checkmark.visible()) { //if checked, change state to unchecked on mouseup
                checkmark.hide();
                currentState = 'UNCHECKED';
                console.log(currentState);
            }
            console.log("MOUSEUP"); //otherwise, keep the state the same
            
        })
        /**
         * @param  {event} event handles the click event for the checkbox widget
         */
        rect.click(function(event){
            console.log("CLICK");
            if (currentState == 'UNCHECKED') { //change state to checked, show image
                checkmark.show();
                currentState = 'CHECKED';
            }
            else if (currentState == 'CHECKED') { //change state to unchecked and hide image
                this.fill({color: 'white'});
                checkmark.hide();
                //checkmark.style.display = "none";
                currentState = 'UNCHECKED';
            }
            
            console.log(currentState);
            if(clickEvent != null)
                clickEvent(event)
        })

        return {
            /**
             * This function creates the move method for the Checkbox widget so that it can move to coordinates (x,y).
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                rect.move(x, y);
                checkmark.move(x, y);
                label.move(x+45,y+5);
            },
            /**
             * This function handles the click even for the checkbox.
             * @param  {eventHandler} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * @returns rectangle for checkbox
             */
            src: function(){
                return rect;
            },
            /**
             * @param  {number} id
             */
            setId: function(id){
                rect.attr("id", id);
            },
            /**
             * @param  {string} string label for checkbox
             */
            label: function(string){
                label.text(string);
            }
        }
    }

    //RADIO BUTTON CODE
    /**
     * This function creates the widget Radio Button that can be created by passing the parameter for number of radio buttons to show.
     * @param  {Number} n amount of radio buttons (2*n) to show
     */
    var RadioButton = function(n){
        if (n >= 2) {
        var buttonGroup = draw.group();
        }
        for (var i=0; i < n; i++) {
            /** The circle that will be the radio button.
             * 
             */
            var radio = draw.circle(22).fill('white').stroke('#DEB887').attr({"checked": false, "cx": 50, "cy": 200+50*i});
            radio.attr("id", i);
            radio.move(50, 200+50*i); //move each new button to be spaced out vertically
            buttonGroup.add(radio);

        var clickEvent = null;
        /**The inner circle that will fill the radio button when clicked. */
        var innerCircle = draw.circle(16).fill('LightCoral').attr({"x":50,"y":153}); //inner, smaller circle for filling radio button
        /** Label for each of the radio buttons. */
        var label = draw.text("hello radio button").attr({x:90,y:195+50*i}).font({ //label for each button
            family:   'Playfair', 
            size:     16, 
            fill:     '#000'
          });
        innerCircle.hide();
        
        /** This function handles the mouseover function for the radio button.*/
        radio.mouseover(function(){
            console.log("MOUSEOVER");
        })
        /** This function handles the mouseout function for the radio button.*/
        radio.mouseout(function(){
            console.log("IDLE");
            if (innerCircle.visible()) { //show inner circle when checked
                innerCircle.show();
            }
            else {
                innerCircle.hide();
            }
        })
        /** This function handles the mouseup function for the radio button.*/
        radio.mouseup(function(){
            console.log("MOUSEUP");
        })
        /**
         * Handles the click event for the radio buttons.
         * @param  {event} event
         */
        radio.click(function(event){
            console.log("CLICK");
            console.log("CHECKED");
            innerCircle.show();
            innerCircle.move(event.target.cx.animVal.value-8, event.target.cy.animVal.value-8) //move the inner circle to the position of button id that was pressed
            if(clickEvent != null)
                clickEvent(event)
        })
        }
        
        return {
            /**
             * Handles the move method to move the radio buttons and their labels to (x,y) coordinates.
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                radio.move(x, y);
                label.move(x+40,y);
            },
            /**
             * Handles the click event for the radio buttons.
             * @param  {eventHandler} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * @returns radio button
             */
            src: function(){
                return radio;
            },
            /**
             * Handles the label method and changes the label to string user input.
             * @param  {string} string label for radio buttons
             */
            label: function(string){
                label.text(string);
            }
        }
    
    }
//PROGRESS BAR CODE
/**
 * This function creates the Progress Bar widget and its methods.
 * @returns ProgressBar widget
 */
var ProgressBar = function() {
    /** Rectangle for the main progress bar. */
    var rect = draw.rect(250,15).fill('white').stroke("#DEB887"); //main bar
    rect.attr("width", 300);
    /** Rectangle that will represent the fill for the main progress bar. */
    var progress = draw.rect(100, 15).fill('LightCoral'); //"progress" bar
    progress.attr("width", 0);
    progress.move(300,150);
    /** This function handles the mouseover function for a progress bar. */
    rect.mouseover(function(){
        console.log("MOUSEOVER");
    })
    /** This function handles the mouseup function for a progress bar. */
    rect.mouseup(function() {
        console.log("MOUSEUP");
    })
     /** This function handles the mouseout function for a progress bar. */
    rect.mouseout(function() {
        console.log("IDLE");
    })
    /** This function handles the click function for a progress bar. */
    rect.click(function() {
        console.log("CLICK on progress bar");
    })

    return {
        /**
         * Handles the move method for the progess bar - moves it to x,y coordinates.
         * @param  {number} x
         * @param  {number} y
         */
        move: function(x,y) {
            rect.move(x,y);
            progress.move(x,y);
        },
        /**
         * Returns the rectangle that is the progress bar.
         * @returns rect for progress bar
         */
        src: function(){
            return rect;
        },
        /**
         * Allows user to set the progress value of the progress bar.
         * @param  {number} n value of progress bar
         */
        setProgressWidth: function(n){
            if ((n <= 100) && (n >= 0)) { 
                var newValue = (n/100) * rect.attr("width"); //calculate the length of the progress bar (convert n to percentage)
                progress.attr("width", newValue);
            }
            
        },
        /**
         * Allows the user to set the initial width of the progress bar n.
         * @param  {number} n width of progress bar
         */
        setBarWidth: function(n){
            rect.attr("width", n); //set n to be bar's initial width
        },
        /**
         * Allows the user to add to the current value of the progress bar with parameter value n.
         * @param  {number} n value to increment progress
         */
        incrementValue: function(n){
            if ((n <= 100) && (n >= 0)) {
                var result = progress.attr("width") + ((n/100) * rect.attr("width")); //add the calculated percentage to progress bar's width
                progress.attr("width", result);
            }
            else {
                console.log("Value must be between 0-100!"); //handle n outside of 0-100
            }
        },
        /**
         * Function for getting the current value of the progress bar.
         */
        getValue: function(){
            console.log(progress.attr("width")); //print the current progress bar width
        }
    }
}


return {Button, Checkbox, RadioButton, ProgressBar}
}());


export{MyToolkit}
