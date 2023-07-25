window.onload = function(){
    var text = ["Web Developer!", "Graphic Designer!", "Photographer!"];
    var counter = 0;
    var elem = document.getElementById("textCycle");
    setInterval(change, 4000);

    function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        }
    }
}



