class GameWorld 
{
    constructor() 
    {
        this.world = document.getElementById("game-container");
    }

    GenerateWorldCells()
    {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        let i = 0;
        let color;
        for (let row = 0; row < Math.floor(windowHeight/10)-1; row++)
        {
            const cells = document.createElement("div");
            cells.classList.add("cells");
         
            for (let column = 0; column < Math.floor(windowWidth/10); column++)
            {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                {
                if (i === 0) {color = "dead"}
                else if (i === 1) {color = "alive"}
                else if (i === 2) {color = "blue"}
                
                
                if (i < 2) {i++}else{i = 0}
                }
                cell.classList.add(color);
                
                cells.appendChild(cell);
            }
            this.world.appendChild(cells);
        }
    }
}

const game = new GameWorld("game-container");

game.GenerateWorldCells();