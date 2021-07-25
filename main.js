const $upBtn = document.querySelector('.up-button');
const $downBtn = document.querySelector('.down-button');
const $sidebar = document.querySelector('.sidebar');
const $sliders = document.querySelector('.main-slide');
const mainSlider = $sliders.querySelectorAll('div').length;
const $container = document.querySelector('.container');

let activeSlideIndex = 0;

$sidebar.style.top = `-${(mainSlider - 1) * 100}vh`;

$upBtn.addEventListener('click',() => clickBtn('up'));
$downBtn.addEventListener('click', () => clickBtn('down'));

function clickBtn(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === mainSlider) {
            activeSlideIndex = 0;
        }
    }
    else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = mainSlider - 1;
        }
    }
    const height = $container.clientHeight;
    $sliders.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    $sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}