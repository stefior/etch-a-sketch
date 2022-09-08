"use strict";

const button = document.querySelector('button');
button.onclick = () => createGrid(Number(prompt("New width: ")), Number(prompt("New height: ")));

function createGrid(width, height) {
  if (!width || !height) return alert('incorrect input');
  
  const oldGridDivs = document.querySelectorAll('#container > *');
  const containerDiv = document.querySelector('div');
  oldGridDivs.forEach((oldGridRow) => containerDiv.removeChild(oldGridRow));

  for (let i = 0; i < height; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList += 'row-div';
    for (let n = 0; n < width; n++) {
      const cellDiv = document.createElement('div');
      rowDiv.appendChild(cellDiv);
    }
    containerDiv.appendChild(rowDiv);
  }
}

createGrid(8, 8);
