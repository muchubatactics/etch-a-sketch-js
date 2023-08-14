//sketching
let length;
let container = document.querySelector(".container");

function draw(length)
{
    if(!length) length = 16;
    for (let i = 0; i < length; ++i)
    {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "row";
        for (let a = 0; a < length; ++a)
        {
            let b = document.createElement("div");
            b.style.width = "30px"
            b.style.height = "30px";
            b.style.backgroundColor = "gray";
            // b.style.border = "5px solid white";
            b.addEventListener("mouseover", () => {
                b.style.backgroundColor = "aqua";
                console.log("mouseover");
            });
            b.addEventListener("mouseout", () => {
                b.style.backgroundColor = "white";
                console.log("mouseout");
            });
            div.appendChild(b);
        }
        container.appendChild(div);
    }

}
//buttons
let housing = document.createElement("div");
housing.style.padding = "10px";
housing.style.backgroundColor = "cornsilk";
housing.style.margin = "50px";


let button = document.createElement("button");
button.textContent = "click this";
button.backgroundColor = "white";
button.addEventListener("click", () => {
    length = Number(prompt("enter length"));
    draw(length);
});
housing.appendChild(button);


document.body.appendChild(housing);

