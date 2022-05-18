const track = document.querySelector('carousel__t');
const slides = Array.from(track.children);
const nextButton = document.querySelector('carousel__b-r');
const prevButton = document.querySelector('carousel__b-l');
const dotsNav = document.querySelector('carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePos = (slide,index) => {slide.style.left = slideWidth * index +'px'};

slides.forEach(setSlidePos);

nextButton.addEventListener("click", event => {
    const currentSlide = track.querySelector('current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToM = nextSlide.style.left;
    track.style.transform = 'translateX (-'+ amountToM +')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

function aClick(){
    const accordionItemHs = document.querySelectorAll(".accordion-item-h");
    accordionItemHs.forEach(x => x.classList.toggle('active'));}

function aClick1(){
    const accordionItemHs = document.querySelectorAll(".accordion-item-h1");
    accordionItemHs.forEach(x => x.classList.toggle('active'));}