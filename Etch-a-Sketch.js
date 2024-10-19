let usrInput = 16;

createGrid();
setBlack();

const controlPanel = document.querySelector("#control-panel");

const blackButton = document.createElement("button");
const resetButton = document.createElement("button");
const colorButton = document.createElement("button");
const colorStrengtheningButton = document.createElement("button");

blackButton.textContent = "Paint it, Black!";
resetButton.textContent = "Reset";
colorButton.textContent = "Colors";
colorStrengtheningButton.textContent = "Color Strength";
controlPanel.append(resetButton, blackButton, colorButton, colorStrengtheningButton);

resetButton.addEventListener("click", () => {
    resetGrid();
    usrInput = prompt("Give me a number from 1 to 100");
    createGrid();
});

blackButton.addEventListener("click", () => {
    setBlack();
    deactivateColorStrength();
});

colorButton.addEventListener("click", () => {
    setColors();
    deactivateColorStrength();
});

colorStrengtheningButton.addEventListener("click", () => {
    activateColorStrength();
});


function createGrid() {
    let i = 1;
    let a = 1;
    if (usrInput <= 100 && usrInput > 0) {
        while (i <= usrInput) {
            const container = document.querySelector("#container");
            const rowDiv = document.createElement("div");
            rowDiv.classList.add(`column${i}`);
            rowDiv.classList.add("columnOfColumns")
            container.appendChild(rowDiv);
            while (a <= usrInput) {
                const columnContainer = document.querySelector(`.column${i}`);
                const columnDiv = document.createElement("div");
                columnDiv.classList.add("row");
                columnContainer.appendChild(columnDiv);
                a++;
            };
            a = 1;
            i++;
        };
    } else {
        alert("Number too big or too small!!! - Press 'Reset' button to try again");
    };
};



function setBlack() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        if (row.style.backgroundColor === "") {
            row.addEventListener("mouseover", function cancelHandler() {
                row.setAttribute("style", "background: black;");
                row.removeEventListener("mouseover", cancelHandler);
            });
        };
    });
};


function setColors() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        if (row.style.backgroundColor === "") {
            row.addEventListener("mouseover", function cancelHandler() {
                row.setAttribute("style", `background: 
                    rgb(${Math.floor(Math.random() * 257)}, 
                    ${Math.floor(Math.random() * 257)}, 
                    ${Math.floor(Math.random() * 257)});`);
                row.removeEventListener("mouseover", cancelHandler);
            });
        };
    });
};



function resetGrid() {
    const columns = document.querySelectorAll(".columnOfColumns")
    columns.forEach((column) => {
        column.remove();
    });
};

function activateColorStrength() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        if (row.style.backgroundColor === "") {
            row.addEventListener("mouseover", opacityColor);
        };
    });
};

function deactivateColorStrength() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        if (row.style.backgroundColor === "") {
            row.removeEventListener("mouseover", opacityColor);
        };
    });
};


function opacityColor(event) {
    const row = event.currentTarget;
    if (row.style.opacity < 1) {
        row.style.opacity -= "-0.1";
    };
};
