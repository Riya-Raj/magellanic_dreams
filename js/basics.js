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
    ctx.strokeRect(150, 0, 0, 450);
    ctx.strokeRect(300, 0, 0, 450);
    ctx.strokeRect(0, 150, 450, 0);
    ctx.strokeRect(0, 300, 450, 0);
}
boardDetails();

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
    } 
    else {
        alert("'O' wins the match!! CONGRATULATIONS!!");
    }
}

function toCheckWinner() {

    for (let i = 0; i < 3; i++) {
        if(equalThree(board[i][0], board[i][1], board[i][2])) {
            drawLine(i*150+75, 0, i*150+75, 450);
            gameWinner();
            winner = board[i][0];
        } 
    }

    for (let j = 0; j < 3; j++) {
        if(equalThree(board[0][j], board[1][j], board[2][j])) {
            drawLine(0, j*150+75, 450, j*150+75);
            gameWinner();
            winner = board[0][j];
        } 
    }

    if (equalThree(board[0][0], board[1][1], board[2][2])) {
        drawLine(0,0,450,450);
        gameWinner();
        winner = board[0][0];
    }
    
    if (equalThree(board[0][2], board[1][1], board[2][0])) {
        drawLine(450,0,0,450);
        gameWinner();
        winner = board[0][2];
    }

    let emptySpaces = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                emptySpaces++;
            }
        }
    }
    if (winner == null && emptySpaces == 0) {
        return 'tie';
    } 
    else {
        return winner;
    }
}

function changeLevel() {
    for(let j = 1; j<=5; j++) {
        document.getElementById(j).addEventListener("click", function(){
            for(let i = 1; i <= 5 ; i++) {
                document.getElementById(i).classList.remove("selected");
            }            
            document.getElementById(j).classList.add("selected");
            gamelevel = j;
        })
    }
};
changeLevel();
