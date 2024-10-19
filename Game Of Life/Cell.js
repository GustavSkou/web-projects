class Cell {
    constructor(x, y) {
        this.cell = document.createElement("div");
        this.cell.classList.add("cell");

        this.x = x;
        this.y = y;
        this.state = false;
        this.color = "dead";
        this.cell.classList.add(color);
    }

    SetStateAlive()
    {
        this.state = true;
        this.SetCellColor();
        this.cell.classList.replace("dead","alive");
    }
    SetStateDead()
    {
        this.state = false;
        this.SetCellColor();
        this.cell.classList.replace("alive","dead");
    }

    GetAliveNeighbors(gameWorld) {
        return aliveNeighbors;
    }

    UpdateState() {
        if (this.state === false && GetAliveNeighbors() === 3) {
            this.SetStateAlive();
            return;
        }
        if (this.state === true && this.GetAliveNeighbors() > 3 || this.state === true && this.GetAliveNeighbors() < 2) {
            this.SetStateDead();
            return;
        }
        if (this.state === true && this.GetAliveNeighbors() === 3 || this.state === true && this.GetAliveNeighbors() === 2) {
            return;
        }
    }
}
export default Cell;