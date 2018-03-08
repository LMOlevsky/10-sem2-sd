var clear = document.getElementById("clear");
var svg = document.getElementById("svg");

var circle = function(x, y, color){
    var c =
	{x:x,//c.setAttribute("cx", x),
	 y:y,//c.setAttribute("cy", y),
	 r:10,
	 color:color,//c.setAttribute("fill", color),
	 svg:svg,
	 display:append,
	 remove:circleCallback
	};
    return c;
};

var clearCallback = function(e){
    svg.innerHTML = "";
};

var svgCallback = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;

    var c = circle(x, y, "red");
    c.setAttribute("cx", c.x);
    c.setAttribute("cy", c.y);
    c.setAttribute("fill", c.color);
};

var append = function(c){
    c.addEventListener("click", circleCallback);
    svg.append(c);
};

var circleCallback = function(e){
    //e.target.setAttribute("fill", "green");
    e.target.remove();
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = Math.random() * svg.getAttribute("width");
    var y = Math.random() * svg.getAttribute("height");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "red");
    c.setAttribute("clicked", "0");
    c.addEventListener("click", circleCallback);
    svg.appendChild(c);
    e.stopPropagation();
};

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", svgCallback);
