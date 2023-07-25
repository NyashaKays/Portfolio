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

    window.addEventListener('scroll', function (e) {
        if(window.pageYOffset > 250){
            this.document.getElementById('totop').classList.add('active');
        } else{
            this.document.getElementById('totop').classList.remove('active');
        }})

    document.getElementById('totop').addEventListener("click", function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}



