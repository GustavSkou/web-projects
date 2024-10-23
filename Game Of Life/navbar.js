class NavigationBar
{
    constructor()
    {
        this.navbar = document.getElementById("navbar");
        this.navbar.classList.add("navagation-bar");

        this.generation = document.createElement("div");
        this.pauseButton = document.createElement("button");
        this.pauseButton.textContent = "pause";

        this.currentGeneration = 0;

        this.navbar.appendChild(this.generation);
        this.navbar.appendChild(this.pauseButton);
    } 

    CreateGenerationDiv()
    {
        this.generation.classList.add("generation-container");
        this.CreateGenerationText(); 
        this.CreateGenerationNumber();   
    }

    CreateGenerationText()
    {
        const text = document.createElement("h2");
        text.textContent = "Current generation: ";
        this.generation.appendChild(text);
    }

    CreateGenerationNumber()
    {
        const number = document.createElement("h2");
        number.textContent = this.currentGeneration;
        this.generation.appendChild(number);
    }

    UpdateGenerationNumber()
    {
        this.currentGeneration = this.currentGeneration + 1;
        this.generation.lastChild.textContent = this.currentGeneration;
    }

    CreatePauseButtonDiv()
    {
        
    }

}

export default NavigationBar;