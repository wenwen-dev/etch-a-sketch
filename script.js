const body = document.querySelector('body');


for (let i = 0; i < 16; i++) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.display = 'flex';
  body.appendChild(container);
  for (let j = 0; j < 16; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('style', 'background: #B1B2FF; width: 30px; height: 30px; border: solid 1px #EEF1FF')
    container.appendChild(box);
  }
}