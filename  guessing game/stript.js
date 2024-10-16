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

let word = GetRandomWord();
function SetTopWord(word)
{
    for (let i = 0; i < word.length; i++) 
    {
        document.getElementById(i.toString()).textContent = word.charAt(i);
    }
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
        rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
}

function AddlistenForEnterKey(input, row) 
{
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') 
        {
            if (row + 1 < container.children.length) 
            {
                SetRowWriteAbility(row + 1);
            }
            event.preventDefault();
        }
    });
}

function SetRowWriteAbility(row) 
{
    const rowDiv = container.children[row];
    const boxes = rowDiv.children;

    for (let box = 0; box < boxes.length; box++) 
    {
        const inputDiv = document.createElement("input");
        inputDiv.type = "text";
        inputDiv.maxLength = 1;
        boxes[box].appendChild(inputDiv);
        
        // Listen for the Enter key on each inputDiv
        AddlistenForEnterKey(inputDiv, row);
    }
}

SetTopWord(GetRandomWord());

SetRowWriteAbility(0);