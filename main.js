
const container = document.querySelector('#container');
const square = document.querySelector('.square');


function createGrid(size) {
for (let i = 0; i < size; i++) {
  for (let column = 0; column < size; column++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }
  }
  $(".square").width(500 / size);
  $(".square").height(500 / size);
}

function clearGrid() {
  $(".square").remove();
};

function resetGrid () {
  let x = prompt("What size grid would you like? Please enter a number");
  clearGrid();
  createGrid(x);
}

$(document).ready(function () {
  createGrid(16);

  $(".square").mouseover(function () {
    $(this).css("background-color", "black");
  });


  $("#refresh-grid").click(function () {
    resetGrid();

    $(".square").mouseover(function () {
      $(this).css("background-color", "black");
    });
  });
});






