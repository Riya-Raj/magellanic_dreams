
    const canvas = document.getElementById("cvs");
    const ctx = canvas.getContext("2d");

    // BOARD VARIABLES
    let board = [];
    const COLUMN = 3;
    const ROW = 3;
    const SPACE_SIZE = 150;

function drawBoard(){
    /*
    let id = 0
    for(let i = 0; i < ROW; i++){
        board[i] = [];
        for(let j = 0; j < COLUMN; j++){
            board[i][j] = id;
            id++;

            // draw the spaces
            ctx.strokeStyle = "white";
            ctx.strokeRect(j * SPACE_SIZE, i * SPACE_SIZE, SPACE_SIZE, SPACE_SIZE);
        }
    }*/
    ctx.lineWidth = 5;
    ctx.strokeRect(150, 0, 0,450);
    ctx.strokeRect(300, 0, 0,450);
    ctx.strokeRect(0, 150, 450, 0);
    ctx.strokeRect(0, 300, 450, 0);
}
drawBoard();

  