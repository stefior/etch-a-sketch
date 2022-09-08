"use strict";

const containerDiv = document.querySelector('div');
for (let i = 0; i < 16; i++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList += 'row-div';
  for (let n = 0; n < 16; n++) {
    const cellDiv = document.createElement('div');
    rowDiv.appendChild(cellDiv);
  }
  containerDiv.appendChild(rowDiv);
}
