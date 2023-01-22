/*HAMBURGER MENU*/
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const black = document.getElementById('nav-wrapper');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    black.classList.toggle("black");
});

/*STICKY NAVBAR*/

window.addEventListener("scroll", function(){
    var nav = document.getElementById("nav-wrapper");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

/*window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})*/