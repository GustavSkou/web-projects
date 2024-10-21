class Cell {
    constructor(x, y) {
        this.cell = document.createElement("div");
        this.cell.classList.add("cell");

        this.column = x;
        this.row = y;
        this.state = false;
        this.nextState = false;
        this.cell.classList.add("dead");

        this.cell.addEventListener("click", () => {
            console.log("Cell clicked");
            this.ChangeState();
        });
    }

    SetNextStateAlive()
    {
        this.nextState = true;
        this.cell.classList.replace("dead", "alive");
    }
    SetNextStateDead()
    {
        this.nextState = false;
        this.cell.classList.replace("alive", "dead");
    }
    KeepState()
    {
        this.nextState = this.state;
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

        for (let row = this.row - 1; row <= this.row + 1; row++) {
            for (let column = this.column - 1; column <= this.column + 1; column++) {

                let neighborRow = row
                let neighborColumn = column

                if (row === this.row && column === this.column) {  // Skip the current cell
                    continue;
                }

                if (row < 0) {
                    neighborRow = worldMap.length - 1;
                }
                if (row >= worldMap.length) {
                    neighborRow = 0;
                }

                if (column < 0) {
                    neighborColumn = worldMap[0].length - 1;
                }
                if (column >= worldMap[0].length) {
                    neighborColumn = 0;
                }   

                if (worldMap[neighborRow][neighborColumn].state === true) {
                    aliveNeighbors++;
                }
            }
        }
        return aliveNeighbors;
    }

    UpdateNextState(worldMap) {
        let someWorldMap = worldMap;
        let aliveNeighbors = this.GetAliveNeighbors(someWorldMap);
        if (this.state === false && aliveNeighbors === 3) {
            this.SetNextStateAlive();
            return;
        }
        if (this.state === true && aliveNeighbors > 3 || this.state === true && aliveNeighbors < 2) {
            this.SetNextStateDead();
            return;
        }
        if (this.state === true && aliveNeighbors === 3 || this.state === true && aliveNeighbors === 2) {
            this.KeepState();
        }
    }

    UpdateCurrentState()
    {
        this.state = this.nextState;
    }
}
export default Cell;