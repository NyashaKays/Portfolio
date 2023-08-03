window.onload = function(){
    window.addEventListener('scroll', function (e) {
        if(window.pageYOffset > 250){
            this.document.getElementById('totop').classList.add('active');
            this.document.getElementById('head').classList.add('active');
        } else{
            this.document.getElementById('totop').classList.remove('active');
            this.document.getElementById('head').classList.remove('active');
        }})

    document.getElementById('totop').addEventListener("click", function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"

        });
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })










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

    var i = 0;
    
}



