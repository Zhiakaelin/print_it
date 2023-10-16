let slide = 1;
showSlide(slide);

//Next slide previous control
function plusSlide(n){
    showSlide(slide += n);
} 

//background image control
function currentSlide(n){
    showSlide(slide = n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("Banner");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slide = 1}
    if (n < 1) {slide = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slide-1].style.display = "flex";
    dots[slide-1].className += " active";
}