let usrInput = 4;
let i = 1;
let a = 1;

while (i <= usrInput) {
    const container = document.querySelector("#container");
    const rowDiv = document.createElement("div");
    rowDiv.classList.add(`column${i}`);
    rowDiv.classList.add("columnOfColumns")
    rowDiv.textContent = "this is div nr:" + i;
    container.appendChild(rowDiv);
    while(a <= usrInput) {
        const columnContainer = document.querySelector(`.column${i}`);
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("row");
        columnDiv.textContent = "this is row nr:" + a;
        columnContainer.appendChild(columnDiv);
        a++;
    }
    a = 1;
    i++;
}

