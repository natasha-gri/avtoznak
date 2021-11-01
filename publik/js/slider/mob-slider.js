"use strict";

let position = 0;
let slidesToShow = 4;
if(window.innerWidth < 960)
	slidesToShow = 3
if(window.innerWidth < 480)
	slidesToShow = 1

console.log(window.innerWidth )
const slidesToScroll = 1;
const container = document.querySelector('.worker-slider-wrapper-container');
const wrapper = document.querySelector('.worker-slider-wrapper');
const track = document.querySelector('.worker-slider-wrapper-container-track');
const btnPrev = document.querySelector('.worker-slider-wrapper-btn-prev');
const btnNext = document.querySelector('.worker-slider-wrapper-btn-next');
const items = document.querySelectorAll('.worker-slider-wrapper-container-track-item');
const itemsCount = items.length;
const itemWidth = wrapper.clientWidth / slidesToShow;


const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});
btnNext.addEventListener('click', () => {
	if(position <= -(itemsCount - slidesToShow) * itemWidth ){
		position = 0
	}else{
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	}
    setPosition();
    checkBtns();
}); 
btnPrev.addEventListener('click', () => {
	

	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {

    btnPrev.disabled = position === 0;
};

checkBtns();
