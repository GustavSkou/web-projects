class GameTick
{
    constructor(gameWorld, navBar)
    {
        this.isRunning = false;
        this.intervalId = null;

        document.addEventListener('keydown', (event) =>{
            if(event.code === "Space")
            {
                console.log("space pressed");
                this.isRunning = !this.isRunning;
                
                if (this.isRunning){
                    this.intervalId = setInterval(() => {
                        gameWorld.UpdateWorldCells();
                        navBar.UpdateGenerationNumber();
                    }, 100);
                }
                if (!this.isRunning){
                    clearInterval(this.intervalId);
                }
            }
        });
    }
}

export default GameTick;