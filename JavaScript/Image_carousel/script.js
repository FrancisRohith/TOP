let slideIndex = 1
showSlide(slideIndex)
function plus_img(n){
    showSlide(slideIndex+=n)
}

function currentslide(n){
    showSlide(slideIndex = n)
}
function showSlide(n){
    const slides = document.querySelectorAll('.slide')
    const dots = document.querySelectorAll('.dot')
    console.log(slides,slideIndex)
    if (n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for(let i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(' active','')
    }
    dots[slideIndex-1].className+=' active'
    slides[slideIndex-1].style.display = "block"
    
}

