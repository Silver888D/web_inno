const track = document.querySelector('.carousel__t');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__b-r');
const prevButton = document.querySelector('.carousel__b-l');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePos = (slide,index) => {slide.style.left = slideWidth * index +'px';}

slides.forEach(setSlidePos);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX (-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('.current-slide');
    targetSlide.classList.add('.current-slide');}

prevButton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);})

nextButton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);})

function aClick(){
    const accordionItemHs = document.querySelectorAll(".accordion-item-h");
    accordionItemHs.forEach(x => x.classList.toggle('active'));}

function aClick1(){
    const accordionItemHs = document.querySelectorAll(".accordion-item-h1");
    accordionItemHs.forEach(x => x.classList.toggle('active'));}