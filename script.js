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
            b.style.backgroundColor = "white";
            b.style.border = "1px solid rgb(156, 156, 156)";
            b.draggable = false;
            // b.style.border = "5px solid white";
            b.addEventListener("mouseover", drawBlack);
            div.appendChild(b);
        }
        div.draggable = false;
        container.appendChild(div);
    }

}

//utility functions

function drawBlack()
{
    if (bool)
    {
        this.style.backgroundColor = "black";
    }
}

function drawLighten()
{
    if (bool)
    {
        let color = getComputedStyle(this).color;
        console.log(color);
    }
}

function drawDarken()
{
    if (bool)
    {

    }
}

function drawRainbow()
{
    if (bool)
    {
        this.style.backgroundColor = randomColor();
    }
}

function randomColor()
{
    let number = Math.floor(Math.random() * 7);
    switch (number) {
        case 0:
            return "red";
        case 1:
            return "orange";
        case 2:
            return "yellow";
        case 3:
            return "lime";
        case 4:
            return "blue";
        case 5:
            return "rgb(75, 0, 130)";
        case 6:
            return "violet";  
        default:
            break;
    }
}

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

let rainbowMode = document.createElement("button");
rainbowMode.textContent = "Toggle Rainbow";
rainbowMode.addEventListener("click", () => {
    let list = document.querySelectorAll(".container > div > div");
    Array.from(list).forEach((box) => {
        box.removeEventListener("mouseover", drawBlack);
        box.removeEventListener("mouseover", drawDarken);
        box.removeEventListener("mouseover", drawLighten);
        box.addEventListener("mouseover", drawRainbow);
    });

});

let lightenMode = document.createElement("button");
lightenMode.textContent = "Toggle Lighten";
lightenMode.addEventListener("click", () => {
    let list = document.querySelectorAll(".container > div > div");
    Array.from(list).forEach((box) => {
        box.removeEventListener("mouseover", drawBlack);
        box.removeEventListener("mouseover", drawDarken);
        box.removeEventListener("mouseover", drawRainbow);
        box.addEventListener("mouseover", drawLighten);
    });

});

let darkenMode = document.createElement("button");
darkenMode.textContent = "Toggle Darken";
darkenMode.addEventListener("click", () => {
    let list = document.querySelectorAll(".container > div > div");
    Array.from(list).forEach((box) => {
        box.removeEventListener("mouseover", drawBlack);
        box.removeEventListener("mouseover", drawRainbow);
        box.removeEventListener("mouseover", drawLighten);
        box.addEventListener("mouseover", drawDarken);
    });

});

let normalMode = document.createElement("button");
normalMode.textContent = "Toggle Normal";
normalMode.addEventListener("click", () => {
    let list = document.querySelectorAll(".container > div > div");
    Array.from(list).forEach((box) => {
        box.removeEventListener("mouseover", drawDarken);
        box.removeEventListener("mouseover", drawRainbow);
        box.removeEventListener("mouseover", drawLighten);
        box.addEventListener("mouseover", drawBlack);
    });

});


controlPanel.appendChild(sizeButton);
controlPanel.appendChild(resetButton);
controlPanel.appendChild(rainbowMode);
controlPanel.appendChild(darkenMode);
controlPanel.appendChild(lightenMode);
controlPanel.appendChild(normalMode);

//run
draw();

