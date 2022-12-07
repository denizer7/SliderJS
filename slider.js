
const images = document.querySelectorAll('.slider .slider-line .slider-images');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let screenWidth;

function init() {
	screenWidth = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = screenWidth * images.length + 'px';
	images.forEach(item => { 
		item.style.width = screenWidth + 'px';
		item.style.height = 'auto';	
	});
	rollSlider();
}
window.addEventListener('resize', init);
init();
const buttonNext = document.querySelector('.button-next');
buttonNext.addEventListener('click', function () {
	buttonNext.disabled = true;
	setTimeout(() => buttonNext.disabled = false, 1000);
	count++;
	if (count > images.length - 1) {
		count = 0;
	}
	rollSlider();
});

const buttonPrev = document.querySelector('.button-prev')
buttonPrev.addEventListener('click', function () {
	buttonPrev.disabled = true;
	setTimeout(() => buttonPrev.disabled = false, 1000);
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
})

function rollSlider() {
	sliderLine.style.transform = 'translate( -' + count * screenWidth + 'px)';
}
