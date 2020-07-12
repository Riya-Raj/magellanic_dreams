const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const withFriend = document.getElementById("withfriend");
const withRobot = document.getElementById("gamebtn");

var gameArray = new Array();
let winLine;
let winner;

var imgX = new Image();
imgX.src = "img/x.png";

var imgY = new Image();
imgY.src = "img/o.png";

// BOARD VARIABLES
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function boardDetails() {
    /*let boardvalue = 0;
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = boardvalue;
            boardvalue++;            
        }        
    }*/
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(150, 0, 0, 450);
    ctx.strokeRect(300, 0, 0, 450);
    ctx.strokeRect(0, 150, 450, 0);
    ctx.strokeRect(0, 300, 450, 0);
    
}
boardDetails();

/* PLAYING WITH A FRIEND */

withFriend.addEventListener("click", function() {

    clearBoard();

    alert("Start playing with your friend. Let's see who wins!!");

    canvas.addEventListener("click", function(e) {

        var bDim = canvas.getBoundingClientRect();
        let x = e.clientX - bDim.left;
        let y = e.clientY - bDim.top;
        let i = Math.floor(x/150);
        let j = Math.floor(y/150);
        //let id = board[i][j];
        let tic = 'X';
        let tac = 'O';
    
        if (gameArray.length == 9 || winner) {
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

        toCheckWinner();
    
        console.log(gameArray);
        alert(board[i][j] + " " + gameArray.length);
    })

    

    if (winner) {
        return;
    }
})

function equalThree(a, b, c) {
    return a == b && b == c && c == a && a != '' && b != '' && c != '';
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "white";
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function gameWinner() {
    if(gameArray.length != 0) {
        alert("'X' wins the match!! CONGRATULATIONS!!");
    } else {
        alert("'O' wins the match!! CONGRATULATIONS!!");
    }
}

function toCheckWinner() {

    for (let i = 0; i < 3; i++) {
        if(equalThree(board[i][0], board[i][1], board[i][2])) {
            winLine = 'v';
            drawLine(i*150+75, 0, i*150+75, 450);
            gameWinner();
            winner = true;
        } 
    }

    for (let j = 0; j < 3; j++) {
        if(equalThree(board[0][j], board[1][j], board[2][j])) {
            drawLine(0, j*150+75, 450, j*150+75);
            gameWinner();
            winner = true;
        } 
    }

    if (equalThree(board[0][0], board[1][1], board[2][2])) {
        drawLine(0,0,450,450);
        gameWinner();
        winner = true;
    }
    
    if (equalThree(board[0][2], board[1][1], board[2][0])) {
        drawLine(450,0,0,450);
        gameWinner();
        winner = true;
    }
}

/* PLAYING WITH ROBOT SENPAI --- AI PART */
// will try this. for now I'm committing changes 
