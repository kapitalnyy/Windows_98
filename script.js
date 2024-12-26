const openbtn = document.getElementById("firstdiv")
const closebtn = document.getElementById("close-popup")
const closebtn2 = document.getElementById("close-popup2")
const popup = document.getElementById("popup")
const writing1 = document.getElementById("writing1")
let alertShown = false;


openbtn.addEventListener("dblclick", () => {
    popup.classList.add("open");
});

closebtn.addEventListener("click", () => {
    popup.classList.remove("open");
});

closebtn2.addEventListener("click", () => {
  popup.classList.remove("open");
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove("open"); 
    }
});

openbtn.addEventListener("click", () => {
  writing1.classList.add("click");
  event.stopPropagation();
});

openbtn.addEventListener("click", () => {
  if (!alertShown) {
    alert("This works like real Windows 98! In order to open, you need to double-click!");
    alertShown = true;
}});

document.addEventListener('click', (event) => {
  if (event.target !== openbtn) {
    writing1.classList.remove("click"); 
  }
});

const div2 = document.getElementById("div2")
const writing2 = document.getElementById("writing2")

div2.addEventListener("click", () => {
  writing2.classList.add("click");
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  if (event.target !== div2) {
    writing2.classList.remove("click"); 
  }
});

const div3 = document.getElementById("div3")
const writing3 = document.getElementById("writing3")

div3.addEventListener("click", () => {
  writing3.classList.add("click");
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  if (event.target !== div3) {
    writing3.classList.remove("click"); 
  }
});

const div4 = document.getElementById("div4")
const div5 = document.getElementById("div5")
const div6 = document.getElementById("div6")
const div7 = document.getElementById("div7")
const writing4 = document.getElementById("writing4")
const writing5 = document.getElementById("writing5")
const writing6 = document.getElementById("writing6")
const writing7 = document.getElementById("writing7")

div4.addEventListener("click", () => {
  writing4.classList.add("click");
  event.stopPropagation();
});

div5.addEventListener("click", () => {
  writing5.classList.add("click");
  event.stopPropagation();
});

div6.addEventListener("click", () => {
  writing6.classList.add("click");
  event.stopPropagation();
});

div7.addEventListener("click", () => {
  writing7.classList.add("click");
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  if (event.target !== div4) {
    writing4.classList.remove("click"); 
  }
});

document.addEventListener('click', (event) => {
  if (event.target !== div5) {
    writing5.classList.remove("click"); 
  }
});

document.addEventListener('click', (event) => {
  if (event.target !== div6) {
    writing6.classList.remove("click"); 
  }
});

document.addEventListener('click', (event) => {
  if (event.target !== div7) {
    writing7.classList.remove("click"); 
  }
});



dragElement(document.getElementById("popinner"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  hours = hours % 12 || 12; 
  hours = String(hours).padStart(2, "0"); 

  clockElement.textContent = `${hours}:${minutes} PM`;
}
setInterval(updateClock, 1000);
updateClock();


const openbtn2 = document.getElementById("div2")
const closebtn21 = document.getElementById("close-popup21")
const closebtn22 = document.getElementById("close-popup22")
const popup2 = document.getElementById("popup2")

openbtn2.addEventListener("dblclick", () => {
  popup2.classList.add("open");
});

closebtn21.addEventListener("click", () => {
  popup2.classList.remove("open");
});

closebtn22.addEventListener("click", () => {
  popup2.classList.remove("open");
});

popup2.addEventListener('click', (event) => {
  if (event.target === popup2) {
    popup2.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner2"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const clearCanvasButton = document.getElementById('clearCanvas');
const saveCanvasButton = document.getElementById('saveCanvas');

let isDrawing = false;
let startX = 0;
let startY = 0;

ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = lineWidth.value;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [startX, startY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [startX, startY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

colorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

lineWidth.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

clearCanvasButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveCanvasButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
});


const colorButtons = document.querySelectorAll('.color-option');
function setColor(color) {
    ctx.strokeStyle = color;
}

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        setColor(color);
    });
});

colorPicker.addEventListener('input', (e) => {
    setColor(e.target.value);
});



const openbtn3 = document.getElementById("div3")
const closebtn31 = document.getElementById("close-popup31")
const closebtn32 = document.getElementById("close-popup32")
const popup3 = document.getElementById("popup3")

openbtn3.addEventListener("dblclick", () => {
  popup3.classList.add("open");
});

closebtn31.addEventListener("click", () => {
  popup3.classList.remove("open");
});

closebtn32.addEventListener("click", () => {
  popup3.classList.remove("open");
});

popup3.addEventListener('click', (event) => {
  if (event.target === popup3) {
    popup3.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner3"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const openbtn4 = document.getElementById("div4")
const closebtn41 = document.getElementById("close-popup41")
const closebtn42 = document.getElementById("close-popup42")
const popup4 = document.getElementById("popup4")

openbtn4.addEventListener("dblclick", () => {
  popup4.classList.add("open");
});

closebtn41.addEventListener("click", () => {
  popup4.classList.remove("open");
});

closebtn42.addEventListener("click", () => {
  popup4.classList.remove("open");
});

popup4.addEventListener('click', (event) => {
  if (event.target === popup4) {
    popup4.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner4"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function calculateSin() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value); 
  if (!isNaN(value)) {
      const result = Math.sin(toRadians(value)); 
      display.value = result.toFixed(4); 
  } else {
      display.value = 'Invalid number'; 
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180); // Konwersja stopni na radiany
}

function copyInputValue() {
  const input = document.getElementById('display'); // Pobierz input o ID "display"
  
  if (input) {
      navigator.clipboard.writeText(input.value)
          .then(() => {
              alert('Answear succesfully copied to clipboard.');
          })
          .catch(err => {
              console.error('While copying error occured: ', err);
          });
  } else {
      alert('Unknown error');
  }
}

document.getElementById('calccopy').addEventListener('click', copyInputValue);



const openbtn5 = document.getElementById("div5")
const closebtn51 = document.getElementById("close-popup51")
const closebtn52 = document.getElementById("close-popup52")
const popup5 = document.getElementById("popup5")

openbtn5.addEventListener("dblclick", () => {
  popup5.classList.add("open");
});

closebtn51.addEventListener("click", () => {
  popup5.classList.remove("open");
});

closebtn52.addEventListener("click", () => {
  popup5.classList.remove("open");
});

popup5.addEventListener('click', (event) => {
  if (event.target === popup5) {
    popup5.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner5"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const openbtn6 = document.getElementById("div6")
const closebtn61 = document.getElementById("close-popup61")
const closebtn62 = document.getElementById("close-popup62")
const popup6 = document.getElementById("popup6")

openbtn6.addEventListener("dblclick", () => {
  popup6.classList.add("open");
});

closebtn61.addEventListener("click", () => {
  popup6.classList.remove("open");
});

closebtn62.addEventListener("click", () => {
  popup6.classList.remove("open");
});

popup6.addEventListener('click', (event) => {
  if (event.target === popup6) {
    popup6.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner6"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const openbtn7 = document.getElementById("div7")
const closebtn71 = document.getElementById("close-popup71")
const closebtn72 = document.getElementById("close-popup72")
const popup7 = document.getElementById("popup7")

openbtn7.addEventListener("dblclick", () => {
  popup7.classList.add("open");
});

closebtn71.addEventListener("click", () => {
  popup7.classList.remove("open");
});

closebtn72.addEventListener("click", () => {
  popup7.classList.remove("open");
});

popup7.addEventListener('click', (event) => {
  if (event.target === popup7) {
    popup7.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner7"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const start = document.getElementById("start")
const closebtn81 = document.getElementById("close-popup81")
const closebtn82 = document.getElementById("close-popup82")
const popup8 = document.getElementById("popup8")

start.addEventListener("click", () => {
  popup8.classList.add("open");
  start.classList.add("click");
});

popup8.addEventListener('click', (event) => {
  if (event.target === popup8) {
    popup8.classList.remove("open"); 
    start.classList.remove("click")
  }
});

const starthelp = document.getElementById("starthelp")

starthelp.addEventListener("click", () => {
  popup8.classList.remove("open");
  start.classList.remove("click");
  popup7.classList.add("open")
})

const shut = document.getElementById("startshut")
startshut.addEventListener("click", () => {
  window.close();
})



const filelist = document.getElementById("filelist")
const file = document.getElementById("file")
const popinner = document.getElementById("popinner")

file.addEventListener("click", () => {
  filelist.classList.add("open")
  file.classList.add("click")
});

const notexit = document.getElementById("notexit")

notexit.addEventListener("click", () =>{
  popup.classList.remove("open")
  filelist.classList.remove("open");
  file.classList.remove("click")
});

document.addEventListener("click", (event) => {
  if (!filelist.contains(event.target) && event.target !== file) {
    filelist.classList.remove("open");
    file.classList.remove("click")
  }
});



const textarea = document.getElementById('mytextarea');
const clearButton = document.getElementById('noteclears');

clearButton.addEventListener("click", () => {
  textarea.value = " ";
  textarea.focus();
  filelist.classList.remove("open");
  file.classList.remove("click");
});


const notesavebtn = document.getElementById("save")

notesavebtn.addEventListener('click', () => {
  const noteContent = textarea.value; 
  const blob = new Blob([noteContent], { type: 'text/plain' }); 
  const link = document.createElement('a'); 
  link.href = URL.createObjectURL(blob); 
  link.download = 'untitled.txt'; 
  link.click(); 
  URL.revokeObjectURL(link.href); 
});

const notesavebtn2 = document.getElementById("save2")

notesavebtn2.addEventListener('click', () => {
  const noteContent = textarea.value; 
  const blob = new Blob([noteContent], { type: 'text/plain' }); 
  const link = document.createElement('a'); 
  link.href = URL.createObjectURL(blob); 
  link.download = 'untitled.txt'; 
  link.click(); 
  URL.revokeObjectURL(link.href); 
});

const notehelp = document.getElementById("notehelp")

notehelp.addEventListener("click", () => {
  popup.classList.remove("open")
  popup7.classList.add("open")
})


const calchelp = document.getElementById("calchelp")
calchelp.addEventListener("click", () => {
  popup4.classList.remove("open")
  popup7.classList.add("open")
})


const legend = document.getElementById('div9')
legend.addEventListener('click', () => {
  const userChoice = confirm("Why update to normal when you can remain a legend?\n\nChoose 'OK' to remain a legend or 'Cancel' to update to normal.");
  if (!userChoice) {
    window.close(); // Zamknie stronę
  }
})

const openbtn9 = document.getElementById("div10")
const closebtn91 = document.getElementById("close-popup91")
const closebtn92 = document.getElementById("close-popup92")
const popup9 = document.getElementById("popup9")

openbtn9.addEventListener("click", () => {
  popup9.classList.add("open");
});

closebtn91.addEventListener("click", () => {
  popup9.classList.remove("open");
});

closebtn92.addEventListener("click", () => {
  popup9.classList.remove("open");
});

popup9.addEventListener('click', (event) => {
  if (event.target === popup9) {
    popup9.classList.remove("open"); 
  }
});

dragElement(document.getElementById("popinner9"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




//Minesweeper Game//


const numRows = 8;
const numCols = 8;
const numMines = 10;

const gameBoard = document.getElementById("gameBoard");
let board = [];

function initializeBoard() {
    board = [];
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
            board[i][j] = {
                isMine: false,
                revealed: false,
                flagged: false,
                count: 0,
            };
        }
    }

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < numMines) {
        const row = Math.floor(Math.random() * numRows);
        const col = Math.floor(Math.random() * numCols);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minesPlaced++;
        }
    }

    // Calculate counts
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (!board[i][j].isMine) {
                let count = 0;
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        const ni = i + dx;
                        const nj = j + dy;
                        if (
                            ni >= 0 &&
                            ni < numRows &&
                            nj >= 0 &&
                            nj < numCols &&
                            board[ni][nj].isMine
                        ) {
                            count++;
                        }
                    }
                }
                board[i][j].count = count;
            }
        }
    }
}

function revealCell(row, col) {
    if (
        row < 0 ||
        row >= numRows ||
        col < 0 ||
        col >= numCols ||
        board[row][col].revealed ||
        board[row][col].flagged
    ) {
        return;
    }

    board[row][col].revealed = true;

    if (board[row][col].isMine) {
        // Handle game over
        alert("Game Over! You stepped on a mine.");
        resetGame();
        return;
    } else if (board[row][col].count === 0) {
        // If cell has no mines nearby, reveal adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                revealCell(row + dx, col + dy);
            }
        }
    }

    if (checkWin()) {
        alert("Congratulations! You won the game!");
        resetGame();
        return;
    }

    renderBoard();
}

function toggleFlag(row, col) {
    if (board[row][col].revealed) return;

    board[row][col].flagged = !board[row][col].flagged;
    renderBoard();
}

function resetGame() {
    initializeBoard();
    renderBoard();
}

function checkWin() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (!board[i][j].isMine && !board[i][j].revealed) {
                return false;
            }
        }
    }
    return true;
}

function renderBoard() {
    gameBoard.innerHTML = "";

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";

            if (board[i][j].revealed) {
                cell.classList.add("revealed");
                if (board[i][j].isMine) {
                    cell.classList.add("mine");
                    cell.textContent = "?";
                } else if (board[i][j].count > 0) {
                    cell.textContent = board[i][j].count;
                }
            } else if (board[i][j].flagged) {
                cell.textContent = "F"; // Mark flagged cells
            }

            cell.addEventListener("click", () => revealCell(i, j));
            cell.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                toggleFlag(i, j);
            });

            gameBoard.appendChild(cell);
        }
        gameBoard.appendChild(document.createElement("br"));
    }
}

initializeBoard();
renderBoard();

//settings - background set//

const back = document.getElementById('container')
const a = document.getElementById('wall1')
const b = document.getElementById('wall2')
const c = document.getElementById('wall3')
const d = document.getElementById('wall4')

a.addEventListener('click', () => {
  if(back.classList.contains('b')){
    back.classList.remove('b')
  }
  if(back.classList.contains('a')){
    back.classList.remove('a')
  }
  if(back.classList.contains('c')){
    back.classList.remove('c')
  }
  if(back.classList.contains('d')){
    back.classList.remove('d')
  }
  back.classList = 'container'
})

b.addEventListener('click', () => {
  if(back.classList.contains('b')){
    back.classList.remove('b')
  }
  if(back.classList.contains('a')){
    back.classList.remove('a')
  }
  if(back.classList.contains('c')){
    back.classList.remove('c')
  }
  if(back.classList.contains('d')){
    back.classList.remove('d')
  }
  back.classList.add('b')
})

c.addEventListener('click', () => {
  if(back.classList.contains('b')){
    back.classList.remove('b')
  }
  if(back.classList.contains('a')){
    back.classList.remove('a')
  }
  if(back.classList.contains('c')){
    back.classList.remove('c')
  }
  if(back.classList.contains('d')){
    back.classList.remove('d')
  }
  back.classList.add('c')
})

d.addEventListener('click', () => {
  if(back.classList.contains('b')){
    back.classList.remove('b')
  }
  if(back.classList.contains('a')){
    back.classList.remove('a')
  }
  if(back.classList.contains('c')){
    back.classList.remove('c')
  }
  if(back.classList.contains('d')){
    back.classList.remove('d')
  }
  back.classList.add('d')
})