let container = document.querySelector(".container");

for (let i = 0; i < 16; ++i)
{
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "row";
    for (let a = 0; a < 16; ++a)
    {
        let b = document.createElement("div");
        b.style.width = "30px"
        b.style.height = "30px";
        b.style.backgroundColor = "gray";
        b.style.border = "5px solid white";
        div.appendChild(b);
    }
    container.appendChild(div);
}