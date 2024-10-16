

function GetRandomWord() 
{
    const words = [
        "Bright",
        "Castle",
        "Dreamy",
        "Flight",
        "Grapes",
        "Hurdle",
        "Jacket",
        "Kitten",
        "Lizard",
        "Monkey"
    ];
    
    let randomIndex = Math.floor(Math.random() * words.length);
    let someWord = words[randomIndex];
    return someWord;
};

let str = GetRandomWord();

for (let i = 0; i < str.length; i++) {
    document.getElementById(i.toString()).textContent = str.charAt(i);
}

const container = document.getElementById("container");

for (let row = 0; row < 6; row++)
{
    const rowDiv = document.createElement("div");   //Create a new div
    rowDiv.className = "row";                       //div class="name"

    for(let box = 0; box < 6; box++)
    {
        const boxDiv = document.createElement("div");
        boxDiv.className = "box";
        
        const inputDiv = document.createElement("input");
        inputDiv.type = "text";
        boxDiv.appendChild(inputDiv);

        rowDiv.appendChild(boxDiv);
    }

    container.appendChild(rowDiv);
}