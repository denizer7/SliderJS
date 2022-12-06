
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
document.querySelector('.button-next').addEventListener('click', function() {
	count++;
	if (count > images.length - 1) {
		count = 0;
	}
	rollSlider();
});

document.querySelector('.button-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
})

function rollSlider() {
	sliderLine.style.transform = 'translate( -' + count * screenWidth + 'px)';
}
