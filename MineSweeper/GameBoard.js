import Cell from './Cell.js';

class GameBoard
{
    constructor(height, width)
    {
        this.gameContainer = document.getElementById("game-container");
        this.height;
        this.width;

        this.gameBoard = [];
    }

    CreateBoard()
    {
        for(let row = 0; row < this.height; row++)
        {
            const row = [];
            const rowDiv = document.createElement("div");
            rowDiv.classList("row");

            for (let column = 0; column < this.width; column++)
            {
                const cell = new Cell();
                
                rowDiv.appendChild(cell.cell);
                row.push(cell);
            }
            this.gameContainer.appendChild(rowDiv);
            this.gameBoard.push(row);
        }
    }
}
export default GameBoard;