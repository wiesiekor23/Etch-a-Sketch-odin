let usrInput = 16;
const controlPanel = document.querySelector("#control-panel");

const blackButton = document.createElement("button");
const resetButton = document.createElement("button");
blackButton.textContent = "Paint it Black!";
resetButton.textContent = "RESET";
controlPanel.append(blackButton, resetButton);

resetButton.addEventListener("click", () =>{
    resetBox();
    usrInput = prompt("Give me a number from 1 to 100");
    createGrid();
    //black();
    setColors();
})


function createGrid() {
    let i = 1;
    let a = 1;
    while (i <= usrInput) {
        const container = document.querySelector("#container");
        const rowDiv = document.createElement("div");
        rowDiv.classList.add(`column${i}`);
        rowDiv.classList.add("columnOfColumns")
        container.appendChild(rowDiv);
        while(a <= usrInput) {
            const columnContainer = document.querySelector(`.column${i}`);
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("row");
            columnContainer.appendChild(columnDiv);
            a++;
        }
        a = 1;
        i++;
    }
}


function setBlack() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.setAttribute("style", "background: black;");
        })
    })
};


function setColors() {
    console.log(random256);
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.setAttribute("style", `background: 
                rgb(${Math.floor(Math.random() * 257)}, 
                ${Math.floor(Math.random() * 257)}, 
                ${Math.floor(Math.random() * 257)});`);
        })
    })
};

function resetBox() {
    const columns = document.querySelectorAll(".columnOfColumns")
    columns.forEach((column) => {
        column.remove();
    });
};

function userInput () {

}

createGrid();
setBlack();