import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var rect = draw.rect(100,50).fill('#996633')
        var clickEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'skyblue'})
        })
        rect.mouseout(function(){
            this.fill({ color: '#996633'})
        })
        rect.mouseup(function(){
            this.fill({ color: '#996633'})
        })
        rect.click(function(event){
            this.fill({ color: '#996633'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
return {Button}
}());

export{MyToolkit}
