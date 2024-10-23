class Cell
{
    constructor()
    {
        this.cell = document.createElement("div");
        this.cell.classList("cell");
        this.isOpen = false;
        this.isMine = false;
        this.isFlag = false;
        this.mineCount;
    }
}
export default Cell;