
const container = document.querySelector('#container');



function createGrid(size) {
for (let i = 0; i < size; i++) {
  for (let column = 0; column < size; column++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }
  }
  $(".square").width(960 / size);
  $(".square").height(960 / size);
}


createGrid(10);




