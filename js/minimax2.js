function getEmptySpaces() {
    let empty = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != 'X' || board[i][j] != 'O') {
                empty.push(board[i][j]);
            }
        }
    }
    return empty;
}

function minimax(gameData, currentPlayer) {

    if(isWinner(gameData, senpai)) return { evaluation: +10 };
    if(isWinner(gameData, human)) return { evaluation: -10 };
    if(isTie(gameData)) return { evaluation: 0 };

    let empty_Spaces = getEmptySpaces();
    let moves = [];

    for (let i = 0; i < empty_Spaces.length; i++) {

        let id = empty_Spaces[i];
        let backup = gameData[id];

        gameData[id] = currentPlayer;

        let move = {};
        move.id = id;

        if (currentPlayer == senpai) {
            move.evaluation = minimax(gameData, human).evaluation;
        }
        else {
            move.evaluation = minimax(gameData, senpai).evaluation;
        }

        moves.push(move);
    }
    
    let bestMove;

    if (currentPlayer == senpai) {
        //Maximising condition
        let bestEvaluation = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].evaluation > bestEvaluation) {
                bestEvaluation = move[i].evaluation;
                bestMove = moves[i];
            }
        }
    }
    else {
        //Minimiser
        let bestEvaluation = +Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].evaluation < bestEvaluation) {
                bestEvaluation = moves[i].evaluation;
                bestMove = moves[i];
            }
        }
    }

    return bestMove;

}
