const topRow = document.getElementById("top-row");
const container = document.getElementById("container");
const usedLetters = document.getElementById("usedLetters");

let currentRow = 0;
let word = GetRandomWord().toUpperCase();
CreateGameContainer();
SetRowWriteAbility(currentRow);
CreateLettersContainer();

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

function CreateGameContainer()
{
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
}

function AddlistenForEnterKey(input, currentRow) 
{
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && IsCurrentRowFilled(currentRow)) 
        {
            if (IsRowCorrect(currentRow))
            {
                RemoveRowWriteAbility(currentRow);
                return;
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
    
    for (let j = 0; j < letterboxes.length; j++)
    {
        const letterBox = letterboxes[j];
        const letter = letterBox.children[0];

        if (input.value.toUpperCase() === letter.textContent.toUpperCase())
        {
            
            if (letterBox.classList[1].toString() === "green")
            {
                color = "green";
            }

            if (letterBox.classList[1].toString() === "yellow")
            {
                if (color !== "green")
                {
                    color = "yellow";
                }
            }
        
            letterBox.classList.remove(letterBox.classList[1].toString())
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
    }
}
function RemoveAllRowsWriteAbility()
{
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++)
    {
        const row = container.children[rowIndex];
        const boxes = row.children;

        for (let index = 0; index < boxes.length; index++) 
        {
            const box = boxes[index];
            const inputDiv = box.children[0];
            inputDiv.readOnly = true;
        }
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
        SpinBox(box, "spinToGreen");

        return true;
    }

    for (let index = 0; index < word.length; index++)
    {
        if (input.value.toUpperCase() === word.charAt(index))
        {
            box.classList.add("yellow");
            LetterUsed(currentRow, index, "yellow");
            SpinBox(box, "spinToYellow");
            return false;
        }
    }

    box.classList.add("grey");
    LetterUsed(currentRow, index, "grey");
    SpinBox(box, "spinToGrey");
    return false
}

function SpinBox(box, spinTo)
{
    box.classList.add(spinTo); 
            
    setTimeout(() => {
        box.classList.remove(spinTo);
        box.classList.add("boxHover");
    }, 1000);
}

function CreateLettersContainer()
{
    const letters = [
        "A",
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

    const letterRow = document.createElement("div");
    letterRow.className = "letterRow";

    for (let i = 0; i < letters.length; i++)
    {
        const letterBox = document.createElement("div");
        letterBox.classList.add("letterBox");
        letterBox.classList.add("transparent")

        const letter = document.createElement("h2");
        letter.textContent = letters[i];
        
        letterBox.appendChild(letter);
        letterRow.appendChild(letterBox);
    }
    usedLetters.appendChild(letterRow);
}