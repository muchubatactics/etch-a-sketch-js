/*
    What if, to be, is to be percieved?
    muchubatactics 14/08/23
*/

//global
let len;
let bool = false;

document.body.addEventListener("mousedown", () =>{
    bool = true;
});
document.body.addEventListener("mouseup", () =>{
    bool = false;
});

//sketching

let container = document.querySelector(".container");
container.draggable = false;

function draw(length)
{
    clear();
    if(!length) length = 16;
    for (let i = 0; i < length; ++i)
    {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "row";
        for (let a = 0; a < length; ++a)
        {
            let b = document.createElement("div");
            b.style.width = String((700/length) - 2) + "px";
            b.style.height = String((700/length) - 2) + "px";
            b.style.backgroundColor = "gray";
            b.style.border = "1px solid cornsilk";
            b.draggable = false;
            // b.style.border = "5px solid white";
            b.addEventListener("mouseover", () => {
                if (bool)
                {
                    b.style.backgroundColor = "white";
                }
            });
            div.appendChild(b);
        }
        container.appendChild(div);
    }

}

//utility functions

function clear()
{
    let list = document.querySelectorAll(".container > div");
    Array.from(list).forEach((item) => {
        item.remove();
    });
}

function reset()
{
    clear();
    draw(len);
}


//buttons
let controlPanel = document.querySelector(".controls");

let sizeButton = document.createElement("button");
sizeButton.textContent = "set size";
sizeButton.addEventListener("click", () => {
    len = Number(prompt("Enter size", "a number not greater than 64"));
    if (!len || len > 64 || len < 1)
    {
        len = 30;
        alert("entered invalid number, size set to 30");
    }
    draw(len);
});

let resetButton = document.createElement("button");
resetButton.textContent = "reset";
resetButton.addEventListener("click", reset);

controlPanel.appendChild(sizeButton);
controlPanel.appendChild(resetButton);

//run
draw();

