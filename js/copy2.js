const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

let gameArray = new Array();

var imgX = new Image();
imgX.src = "img/x.png";

var imgY = new Image();
imgY.src = "img/o.png";

// BOARD VARIABLES
const board = [];

function boardDetails() {
    let boardvalue = 0;
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = boardvalue;
            boardvalue++;            
        }        
    }
    ctx.lineWidth = 5;
    ctx.strokeRect(150, 0, 0, 450);
    ctx.strokeRect(300, 0, 0, 450);
    ctx.strokeRect(0, 150, 450, 0);
    ctx.strokeRect(0, 300, 450, 0);
}
boardDetails();

canvas.addEventListener("click", function(e) {

    var bDim = canvas.getBoundingClientRect();
    let x = e.clientX - bDim.left;
    let y = e.clientY - bDim.top;
    let i = Math.floor(x/150);
    let j = Math.floor(y/150);
    let id = board[i][j];
    let tic = 'X';
    let tac = 'O';

    if (gameArray.length == 9) {
        return;
    }
    if (gameArray == 0) {
        ctx.drawImage(imgX, i*150+25, j*150+25, 100, 100);
        gameArray.push('X');
        board[i][j] = tic;
    } 
    else {
        if (gameArray.length%2 != 0 && board[i][j] != 'X' && board[i][j] != 'O') {
            ctx.drawImage(imgY, i*150+25, j*150+25, 100, 100);
            gameArray.push('O');
            board[i][j] = tac;
        }
        else if (gameArray.length%2 == 0 && (board[i][j] != 'X' && board[i][j] != 'O')) 
        {
            ctx.drawImage(imgX, i*150+25, j*150+25, 100, 100);
            gameArray.push('X');
            board[i][j] = tic;
        }
    }

    console.log(gameArray);
    alert(board[i][j] + " " + gameArray.length);
})


