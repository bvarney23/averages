// let games = [[],[],[],[],[],[],[],[],[],[]];

// let statSheet = document.getElementById("calculate");

// function createInputs() {
//     while (statSheet.firstChild) {
//         statSheet.removeChild(statSheet.firstChild);
//     }
    
//         for (let numOfRowsMade = 0; numOfRowsMade < games.length; numOfRowsMade++) {
//             let newRowElement = document.createElement("input");
//             newRowElement.setAttribute("type", "number")
//             newRowElement.classList.add("row");
//             newRowElement.dataset.rowIndex = numOfRowsMade
//             let currentJSRow = games[numOfRowsMade];
        
//             for (let numOfCellsMade = 0; numOfCellsMade < currentJSRow.length; numOfCellsMade++) {
//                 let newCellElement = document.createElement("div");
//                 newCellElement.dataset.cellIndex = numOfCellsMade
//                 newCellElement.classList.add("cell");
                
//                 if (currentJSRow[numOfCellsMade] != null) {
//                     newCellElement.textContent = currentJSRow[numOfCellsMade];
//                 } else {
//                     newCellElement.textContent = "";
//                 }
//                 newRowElement.appendChild(newCellElement);
//             }
//             statSheet.appendChild(newRowElement);    
//         }
// };

// document.addEventListener("DOMContentLoaded", createInputs)

// function calculateAverage() {
//     console.log("Does this work")
// }

// let btn = document.getElementById("submit-btn");

// btn.addEventListener("click", calculateAverage)
