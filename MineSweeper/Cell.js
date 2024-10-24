class Cell
{
    constructor()
    {
        this.cell = document.createElement("button");
        this.cell.classList.add("cell");
        this.isOpen = false;
        this.isMine = false;
        this.isFlag = false;
        this.mineCount;
    }
}
export default Cell;