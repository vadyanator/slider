'use strict'

let position = 0;
let finalPosition;
const slidesToShow = 3;
const slidesToScroll = 3;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const itemsAmount = items.length;
const containerWidth = container.offsetWidth;
const itemWidth = containerWidth / slidesToShow;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


checkBtns()

function checkBtns() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    if (position === 0) {
        prevBtn.disabled = true;
    }

    finalPosition = -itemWidth * (itemsAmount - slidesToShow);

    if (position <= finalPosition) {
        nextBtn.disabled = true;
    }
}

items.forEach( (item) => {
    item.style.minWidth = itemWidth + 'px';
})

nextBtn.addEventListener('click', () => {
    let widthToScroll = getWidthToScrollNext();
    position -= widthToScroll;
    track.classList.add('slide')
    track.style.transform = 'translateX(' + position + 'px)';
    checkBtns();
})

prevBtn.addEventListener('click', () => {
    let widthToScroll = getWidthToScrollPrev();
    position += widthToScroll;
    track.classList.add('slide')
    track.style.transform = 'translateX(' + position + 'px)';
    checkBtns();
})

function getWidthToScrollNext() {  
    let itemsLeft = Math.abs(finalPosition - position) / itemWidth;

    if (itemsLeft < slidesToScroll) {
        return itemsLeft * itemWidth;
    }

    return itemWidth * slidesToScroll;
}

function getWidthToScrollPrev() {
    let itemsLeft = Math.abs(position) / itemWidth;

    if (itemsLeft < slidesToScroll) {
        return itemsLeft * itemWidth;
    }

    return itemWidth * slidesToScroll;
}


