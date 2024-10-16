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

function AddlistenForEnterKey(input, currentRow) 
{
    const rowDiv = container.children[currentRow];
    const boxes = rowDiv.children;

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && IsCurrentRowFilled(currentRow)) 
        {
            if (IsRowCorrect(currentRow) === true)
            {
                /*for(let index = 0; index < boxes.length; index++)
                {
                    boxes[index].className = "boxGreen";
                }*/
            }

            if (currentRow + 1 < container.children.length) 
            {
                SetRowWriteAbility(currentRow + 1);
            }
            event.preventDefault();
        }
    });
}

function MakeBoxGreen()
{

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

function IsCurrentRowFilled(currentRow)
{
    const rowDiv = container.children[currentRow];
    const boxes = rowDiv.children;
    
    for(let box = 0; box < boxes.length; box++)
    {
        const inputDiv = boxes[box].children[0];
        if (inputDiv.value.trim() === "")
        {
            return false;
        }
    }
    return true;
}

function IsRowCorrect(currentRow)
{
    let correct = true;
    const row = container.children[currentRow];
    const boxes = row.children;
    for(let index = 0; index < boxes.length; index++)
    {
        if(IsBoxCorrect(currentRow, index) === false)
        {
            correct = false;
        }
    }
    return correct;
}

function IsBoxCorrect(currentRow, index)
{
    const row = container.children[currentRow];
    const box = row.children[index];
    const input = box.children[0];

    if (input.value === word.charAt(index))
    {
        box.className = "boxGreen";
        return true;
    }
    return false
}
function DoesWordContainLetter()
{

}


let currentRow = 0;
let word = GetRandomWord();
SetTopWord(word);
SetRowWriteAbility(currentRow);