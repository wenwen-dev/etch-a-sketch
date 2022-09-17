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

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', e => {e.target.style.background = 'lightpink'; console.log(e.bubbles);}));

function changeColor(e) {
  console.log(e.bubbles);
  console.log(e.target);
  alert('You clicked: ' + e.target.tagName);
  // e.stopImmediatePropagation();
  // const test = e.target;
  // e.target.stopPropagation;
  e.target.style = 'background-color: red;';
}
