function humanMove() {  
    

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

        if (currentPlayer == human && board[i][j] == '' && !winner) {
            ctx.drawImage(humanImage, i*150+25, j*150+25, 100, 100);
            gameArray.push(human);
            board[i][j] = human;
            currentPlayer = senpai;
            toCheckWinner();
        }
        
        if (currentPlayer == senpai && !winner) {
            //alert("robot turn");
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
        console.log(gameArray);
        //alert(board[i][j] + " " + gameArray.length);
        //return currentPlayer;
    })       
       
    
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
            if (gameArray.length%2 != 0 && board[i][j] == '') {
                ctx.drawImage(imgY, i*150+25, j*150+25, 100, 100);
                gameArray.push('O');
                board[i][j] = tac;
            }
            else if (gameArray.length%2 == 0 && (board[i][j] == '')) {
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