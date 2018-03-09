//With help from Jake Zaia's code!

var clear = document.getElementById("clear");
var svg = document.getElementById("svg");

var circle = function(x, y){
    var c = {
	x: x,
	y: y,
	r: 10,
	color: "red",
	svgCircle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	
	display:  function(e){
	    c.svgCircle.setAttribute("cx", this.x);
	    c.svgCircle.setAttribute("cy", this.y);
	    c.svgCircle.setAttribute("r", this.r);
	    c.svgCircle.setAttribute("fill", this.color);
	    svg.append(c.svgCircle);
	},

	remove: function(){
	    svg.removeChild(this.svgCircle);
	},
	
	changeState: function(e){
	    e.stopPropagation();
	    if(this.color == "red"){
		this.color = "green";
		this.display();
	    }
	    else{
		this.remove();
		drawRand();
	    }
	}
    }
    
    c.svgCircle.addEventListener("click", function(e){c.changeState(e)});
    return c;
};


var clearCallback = function(e){
    svg.innerHTML = "";
};

var drawMouse = function(e){
    var newObj = circle(e.offsetX, e.offsetY);
    newObj.display();
}


var drawRand = function(e){
    var newObj = circle(Math.random() * 500, Math.random() * 500);
    newObj.display();
}

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", drawMouse);
