
    const canvas = document.getElementById("cvs");
    const ctx = canvas.getContext("2d");

    // BOARD VARIABLES
    let board = [];
    const COLUMN = 3;
    const ROW = 3;
    const SPACE_SIZE = 150;

    /* let gameData = new Array(9);
    //assuming the first player to play is the human
    let currentPlayer = player.human;

    const xImg = new Image();
    xImg.src = "img/x.png";

    const oImg = new Image();
    oImg.src = "img/o.png"; */

    //let GAME_OVER = false;
function drawBoard(){
    
    let id = 0;
    for(let i = 0; i < ROW; i++){
        board[i] = [];
        for(let j = 0; j < COLUMN; j++){
            board[i][j] = id;
            id++;

            // draw the spaces
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.strokeRect(j * SPACE_SIZE, i * SPACE_SIZE, SPACE_SIZE, SPACE_SIZE);
        }
    }
    //ctx.lineWidth = 5;
    /*ctx.strokeRect(150, 0, 0, 450);
    ctx.strokeRect(300, 0, 0, 450);
    ctx.strokeRect(0, 150, 450, 0);
    ctx.strokeRect(0, 300, 450, 0);*/
}
drawBoard();


/*canvas.addEventListener("click", function(event) {
    // if(GAME_OVER) return;
    let X = event.clientX - canvas.getBoundingClientRect().x;
    let Y = event.clientY - canvas.getBoundingClientRect().y;
    let i = Math.floor(Y/SPACE_SIZE);
    let i = Math.floor(X/SPACE_SIZE);
    let id = board[i][j];

    if(gameData[id]) return;
    gameData[id] = currentPlayer;

    drawOnBoard(); //To draw X or O

    if(isWinner()) {
        
        GAME_OVER = true;
        return;
    }
    if(currentPlayer == player.human) {
        currentPlayer = player.robot;
    } else {
        currentPlayer = player.human;
    }

});

function drawOnBoard(   ){
    ctx.drawI
}*/
