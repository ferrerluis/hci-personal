var overlay = document.getElementById("map-overlay");
var map = document.getElementById("map-iframe");

function activateElement (element) {
    
    element.style = "pointer-events: all;";
}

overlay.addEventListener("click", function() {
    
    activateElement(map)
});