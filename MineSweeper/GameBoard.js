import Cell from './Cell.js';

class GameBoard
{
    constructor(height, width)
    {
        this.gameContainer = document.getElementById("game-container");
        this.gameContainer.classList.add("gameContainer");
        this.height = height;
        this.width = width;

        this.gameBoard = [];
    }

    CreateBoard()
    {
        for(let row = 0; row < this.height; row++)
        {
            const row = [];
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let column = 0; column < this.width; column++)
            {
                const cell = new Cell();
                console.log("new cell")
                rowDiv.appendChild(cell.cell);
                row.push(cell);
            }
            this.gameContainer.appendChild(rowDiv);
            this.gameBoard.push(row);
        }
    }
}
export default GameBoard;