document.addEventListener("DOMContentLoaded", function () {



//QUOTE SLIDER FINISH

//BUTTON redirection to buy tickets

document.getElementById("myButton").onclick = function () {
    location.href = "https://goout.net/pl/bilety/kazka/mmvd/";
};

document.getElementById("myButtonL").onclick = function () {
    location.href = "https://goout.net/pl/bilety/lyapis-98/dfbe/";
};

// BUTTON redirection finish

//STICKY NAVBAR!!!!!!!!!!!!!!!!!!!!!


window.onscroll = function() {myFunctionN()};

var navbar = document.getElementById("navbarn");
var sticky = navbar.offsetTop;

function myFunctionN() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};




})


//QUOTE SLIDER
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}