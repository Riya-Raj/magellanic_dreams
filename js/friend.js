
function playTheGame() {     

    canvas.addEventListener("click", function(e) {

        var bDim = canvas.getBoundingClientRect();
        let x = e.clientX - bDim.left;
        let y = e.clientY - bDim.top;
        let i = Math.floor(x/150);
        let j = Math.floor(y/150);
        //let id = board[i][j];
    
        if (gameArray.length == 9 || winner) {
            location.reload();
            return;
        } 

        if (currentPlayer == human && board[i][j] != 'X' && board[i][j] != 'O' && !winner) {
            ctx.drawImage(humanImage, i*150+25, j*150+25, 100, 100);
            gameArray.push(human);
            board[i][j] = human;
            currentPlayer = senpai;
            toCheckWinner();
        }
        
        if (currentPlayer == senpai && !winner) {           
            levelTwo();            
        }              
        console.log(gameArray);
        //alert(board[i][j] + " " + gameArray.length);
        //return currentPlayer;
    })       
       
    
}

function levelTwo() {
    let empty = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != 'X' && board[i][j] != 'O') {
                empty.push(board[i][j]);
            }
        }
    }
    let index = Math.floor(Math.random()*(empty.length-1));
    let board_index = empty[index];
    alert(index);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == board_index) {
                ctx.drawImage(senpaiImage, i*150+25, j*150+25, 100, 100);
                gameArray.push(senpai);
                board[i][j] = senpai;
                currentPlayer = human;
                toCheckWinner();
            }
        }
    }
    currentPlayer = human;
}

function levelOne() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '' && gameArray[gameArray.length-1] == human) {
                ctx.drawImage(senpaiImage, i*150+25, j*150+25, 100, 100);
                gameArray.push(senpai);
                board[i][j] = senpai;
                currentPlayer = human;
                toCheckWinner();
            }
        }
    }
}

function humanWithFriend() {

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
            location.reload();
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
            else if (gameArray.length%2 == 0 && board[i][j] != 'X' && board[i][j] != 'O') {
                ctx.drawImage(imgX, i*150+25, j*150+25, 100, 100);
                gameArray.push('X');
                board[i][j] = tic;
            }
        }

        toCheckWinner();
        
        console.log(gameArray);
        alert(board[i][j] + " " + gameArray.length);
    })
    currentPlayer = senpai;

}