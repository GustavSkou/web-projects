class Cell {
    constructor(x, y) {
        this.cell = document.createElement("div");
        this.cell.classList.add("cell");

        this.x = x;
        this.y = y;
        this.state = false;
        this.nexteState = false;
        this.cell.classList.add("dead");
    }

    SetNextStateAlive()
    {
        this.state = true;
        this.cell.classList.replace("dead","alive");
    }
    SetNextStateDead()
    {
        this.state = false;
        this.cell.classList.replace("alive","dead");
    }
    ChangeState()
    {
        this.state = !this.state;
        if(this.cell.classList.contains("dead"))
        {
            this.cell.classList.replace("dead","alive");
        }
        else
        {
            this.cell.classList.replace("alive", "dead");
        }
    }

    GetAliveNeighbors(worldMap) {
        let aliveNeighbors = 0;
        
        for (let row = this.y - 1; row <= this.y + 1; row++) {
            for (let column = this.x - 1; column <= this.x + 1; column++) {
                if (row === this.y && column === this.x) {  // Skip the current cell
                    continue;
                }
                if (row < 0 || column < 0 || row >= worldMap.length || column >= worldMap[0].length) {   // Skip the cells that are out of bounds
                    continue;
                }
                if (worldMap[row][column].state === true) {
                    aliveNeighbors++;
                    console.log(aliveNeighbors);
                }
            }
        }
        return aliveNeighbors;
    }

    UpdateNextState(worldMap) {
        const someWorldMap = worldMap;
        const aliveNeighbors = this.GetAliveNeighbors(someWorldMap);
        if (this.state === false && aliveNeighbors === 3) {
            this.SetNextStateAlive();
            return;
        }
        if (this.state === true && aliveNeighbors > 3 || this.state === true && aliveNeighbors < 2) {
            this.SetNextStateDead();
            return;
        }
        if (this.state === true && aliveNeighbors === 3 || this.state === true && aliveNeighbors === 2) {
            return;
        }
    }

    UpdateCurrentState()
    {
        this.state = this.nexteState;
    }
}
export default Cell;