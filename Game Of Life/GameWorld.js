import Cell from './Cell.js';

class GameWorld 
{
    constructor() 
    {
        this.world = document.getElementById("game-container");
        this.worldMap = [];
        this.isRunning = false;
        this.intervalId = null;

        document.addEventListener('keydown', (event) =>{
            if(event.code === "Space")
            {
                console.log("space pressed");
                this.isRunning = !this.isRunning;
                
                if (this.isRunning){
                    this.intervalId = setInterval(() => {
                        this.UpdateWorldCells();
                        
                    }, 100);
                }
                if (!this.isRunning){
                    clearInterval(this.intervalId);
                }
            }
        });
    }

    GenerateWorldCells()
    {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;


        for (let row = 0; row < Math.floor(windowHeight/10)-1; row++)
        {
            const cells = document.createElement("div");
            cells.classList.add("cells");

            const cellsRow = []; 

            for (let column = 0; column < Math.floor(windowWidth/10)-1; column++)
            {    
                const cell = new Cell(column, row);
                cells.appendChild(cell.cell);
                cellsRow.push(cell);
            }
            this.world.appendChild(cells);
            this.worldMap.push(cellsRow);
        }
        console.log(this.worldMap.length)
        console.log(this.worldMap[0].length)
    }

    PlaceCell(row, column)
    {
        this.worldMap[row][column].ChangeState();
    }

    UpdateWorldCells() 
    {
        for (let row = 0; row < this.worldMap.length; row++)
        {
            for (let column = 0; column < this.worldMap[0].length; column++)
            {
                const cell = this.worldMap[row][column];
                cell.UpdateNextState(this.worldMap);
            }
        }

        for (let row = 0; row < this.worldMap.length; row++)
        {
            for (let column = 0; column < this.worldMap[0].length; column++)
            {
                const cell = this.worldMap[row][column];
                cell.UpdateCurrentState();
            }
        }
    }
}

export default GameWorld;