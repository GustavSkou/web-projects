function GetRandomWord() 
{
    const words = [
        "Absent","Boller","Bringe","Danner","Detekt","Elsker","Flotte","Fodret","Fuglen","Grader","Hakket","Kasket","Klippe","Knuser","Kramme","Lamper","Magter","Malede","Mandag","Mørket","Oplade","Piller","Placer","Rester","Rodere","Rummer","Sadler","Skader","Skaber","Snakke","Stærke","Stolen","Svampe","Tænder","Vender","Værket","Vinder","Yndige","Åbning","Bølger","Gryden","Hjemme","Kilder","Klaver","Pumper","Sikker","Støtte","Søster","Vasket","Vinter","Vindue","Slange"
    ];
    
    let randomIndex = Math.floor(Math.random() * words.length);
    let someWord = words[randomIndex];
    console.log(someWord);
    return someWord;
};

const topRow = document.getElementById("top-row");
const container = document.getElementById("container");
const usedLetters = document.getElementById("usedLetters");

const letters = ["A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Æ",
    "Ø",
    "Å"
]

for (let row = 0; row < 6; row++)
{
    const rowDiv = document.createElement("div");   //Create a new div
    rowDiv.className = "row";                       //div class="name"

    for(let box = 0; box < 6; box++)
    {
        const boxDiv = document.createElement("div");
        boxDiv.classList.add("box");
        boxDiv.classList.add("boxBorder");

        rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
}

function AddlistenForEnterKey(input, currentRow) 
{
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && IsCurrentRowFilled(currentRow)) 
        {
            if (IsRowCorrect(currentRow))
            {
                //endgame
            }

            if (currentRow + 1 < container.children.length) 
            {
                SetRowWriteAbility(currentRow + 1);
                RemoveRowWriteAbility(currentRow);

            }
            event.preventDefault();
        }
    });
}

function LetterUsed(currentRow, index, color)
{
    const rowDiv = container.children[currentRow];
    const boxes = rowDiv.children;

    const usedLetterRow = usedLetters.children[0];
    const letterboxes = usedLetterRow.children;

    const box = boxes[index];
    const input = box.children[0];
    
    console.log(letterboxes.length);
    for (let j = 0; j < letterboxes.length; j++)
    {
        const letterBox = letterboxes[j];
        const letter = letterBox.children[0];

        if (input.value.toUpperCase() === letter.textContent.toUpperCase())
        {
            letterBox.classList.remove("transparent");
            letterBox.classList.add(color);
        }
    }
}

function SetRowWriteAbility(row) 
{
    const rowDiv = container.children[row];
    const boxes = rowDiv.children;

    for (let index = 0; index < boxes.length; index++) 
    {
        const inputDiv = document.createElement("input");
        inputDiv.type = "text";
        inputDiv.maxLength = 1;
        boxes[index].appendChild(inputDiv);
        
        // Listen for the Enter key on each inputDiv
        AddlistenForEnterKey(inputDiv, row);
    }
}

function RemoveRowWriteAbility(row)
{
    const rowDiv = container.children[row];
    const boxes = rowDiv.children;

    for (let index = 0; index < boxes.length; index++) 
    {
        const box = boxes[index];
        const inputDiv = box.children[0];
        inputDiv.readOnly = true;

        box.classList
    }
}

function IsCurrentRowFilled(currentRow)
{
    const rowDiv = container.children[currentRow];
    const boxes = rowDiv.children;
    
    for(let index = 0; index < boxes.length; index++)
    {
        const inputDiv = boxes[index].children[0];
        if (inputDiv.value.trim() === "")
        {
            return false;
        }
    }
    return true;
}

function IsRowCorrect(currentRow)
{
    let correctRow = true;
    const row = container.children[currentRow];
    const boxes = row.children;
    for(let index = 0; index < boxes.length; index++)
    {
        if( !IsBoxCorrect( currentRow, index ) ) 
        { 
            correctRow = false; 
        }
    }
    return correctRow;
}

function IsBoxCorrect(currentRow, index)
{
    const row = container.children[currentRow];
    const box = row.children[index];
    const input = box.children[0];

    box.classList.remove("boxBorder");

    if (input.value.toUpperCase() === word.charAt(index))
    {   
        box.classList.add("green");
        LetterUsed(currentRow, index, "green");
        spinBox(box, "spinToGreen");

        return true;
    }

    for (let index = 0; index < word.length; index++)
    {
        if (input.value.toUpperCase() === word.charAt(index))
        {
            box.classList.add("yellow");
            LetterUsed(currentRow, index, "yellow");
            spinBox(box, "spinToYellow");
            break;
        }
        else
        {
            box.classList.add("grey");
            LetterUsed(currentRow, index, "grey");
            spinBox(box, "spinToGrey");
        }
    }

    return false
}

function spinBox(box, spinTo)
{
    box.classList.add(spinTo); 
            
    setTimeout(() => {
        box.classList.remove(spinTo);
        box.classList.add("boxHover");
    }, 1000);

}

function IsLetterInWord(input)
{
    for (let index = 0; index < word.length; index++)
    {
        if (input.value.toUpperCase() === word.charAt(index))
        {
            box.className = "boxYellow";
            return true;
        }
    }
    return false;
}

let currentRow = 0;
let word = GetRandomWord().toUpperCase();
SetRowWriteAbility(currentRow);
CreateUsedLetters();

function CreateUsedLetters()
{
    const someRow = document.createElement("div");
    someRow.className = "letterRow";

    for (let i = 0; i < letters.length; i++)
    {
        const letterBox = document.createElement("div");
        letterBox.classList.add("letterBox");
        letterBox.classList.add("transparent")

        const letter = document.createElement("h2");
        letter.textContent = letters[i];
        
        letterBox.appendChild(letter);
        someRow.appendChild(letterBox);
    }
    usedLetters.appendChild(someRow);
}