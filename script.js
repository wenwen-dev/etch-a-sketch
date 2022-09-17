const body = document.querySelector('body');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
body.appendChild(gridContainer);


for (let i = 0; i < 16; i++) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.display = 'flex';
  gridContainer.appendChild(container);
  for (let j = 0; j < 16; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('style', 'background: #B1B2FF; width: 30px; height: 30px; border: solid 1px #EEF1FF')
    container.appendChild(box);
  }
}

let boxes = document.querySelectorAll('.box');
//use let instead of const, because after 1st grid is removed, boxes need to be reassigned to new boxes
boxes.forEach(box => box.addEventListener('mouseover', changeColor));

function changeColor(e) {
  e.target.style.background = 'lightpink';
}

const btn = document.querySelector('button');
btn.addEventListener('click', promptAndDraw);

function promptAndDraw(e) {
  let numOfRows = Number(prompt('How many rows would you like: '));
  numOfRows = checkNumber(numOfRows);
  let numOfColumns = Number(prompt('How many columns would you like: '));
  numOfColumns = checkNumber(numOfColumns);

  boxes.forEach(box => box.remove()); 
  //remove each box. if only remove grid-container, boxes are still there.

  console.log(numOfRows);
  for (let i = 0; i < numOfRows; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.display = 'flex';
    gridContainer.appendChild(container);
    for (let j = 0; j < numOfColumns; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('style', 'background: #B1B2FF; width: 30px; height: 30px; border: solid 1px #EEF1FF')
      container.appendChild(box);
    }
  }
  body.appendChild(gridContainer);

  boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('mouseover', changeColor));
}

function checkNumber(num) {
  if (num > 100 || num < 0) return prompt('Please enter a number between 0 and 100');
  return num;
}