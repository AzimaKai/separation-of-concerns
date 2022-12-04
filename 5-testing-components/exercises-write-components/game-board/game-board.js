/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
  const tableE1 = document.createElement('table');
  for (const array of arrayOfArrays) {
    const trE1 = document.createElement('tr');

    for (const text of array) {
      const tdE1 = document.createElement('td');
      tdE1.innerText = text;
      trE1.appendChild(tdE1);
    }
    tableE1.appendChild(trE1);
  }
  return tableE1;
};
