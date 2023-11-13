const imgBox = document.querySelector('.wrapper');
const imgWrap = document.querySelector('.front-img');
const orgImg = document.getElementById('original');
const line = document.getElementById('line');


orgImg.style.width = imgBox.offsetWidth + 'px';

const leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e) => {
    const boxWidth = (e.pageX -leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}