'use strict';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const boxes = [];
for (let i = 0; i < 8; i++) {
  boxes[i] = document.querySelector(`.box${i + 1}`);
}

boxes[0].addEventListener('click', randomColors);
boxes[1].addEventListener('click', rounded);
boxes[2].addEventListener('click', oneColor);
boxes[3].addEventListener('click', randomBorder);

const colorOrder = [];

for (let i = 0; i < 8; i++) {
  colorOrder[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomColors() {
  for (let i = 0; i < colorOrder.length; i++) {
    colorOrder[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  for (let i = 0; i < 8; i++) {
    boxes[i].style.background = colorOrder[i];
  }
}

function rounded() {
  if (boxes[0].style.borderRadius === '15px') {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.borderRadius = 0;
    }
  } else {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.borderRadius = '15px';
    }
  }
}

function oneColor() {
  for (let i = 0; i < 8; i++) boxes[i].style.background = colorOrder[2];
}

function randomBorder() {
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.borderColor = color;
  }
}
