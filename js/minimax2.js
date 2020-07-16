//////////////////////////////////////////

function minimax(gameData, currentPlayer) {

    toCheckWinner();
    if (winner == senpai) {
        return { evaluation : +10 };
    }
    if (winner == human) {
        return { evaluation : -10 };
    } 
    if (winner == 'tie') {
        return  { evaluation : 0 };
    }
    let moves = [];
    let emptyS = [];

    for (let id = 0; id < gameData.length; id++) {
        if (!gameData[id]) {
            emptyS.push(id);
        }
    }
    for ( let i = 0; i < emptyS.length; i++) {
        let id = emptyS[i];
        let backup = gameData[id];
        gameData[id] = currentPlayer;

        let move = {};
        move.id = id;
        if (currentPlayer == senpai) {
            move.evaluation = minimax(gameData, human).evaluation;
        } else {
            move.evaluation = minimax(gameData, senpai).evaluation;
        }
        gameData[id] = backup;
        moves.push(move);
    }
    ////////////////// FIXED /////////////////// PERFECT /////////// NO CHANGES //////
    let bestMove;
    if (currentPlayer == senpai) {
        let bestEvaluation = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].evaluation > bestEvaluation) {
                bestEvaluation = moves[i].evaluation;
                bestMove = moves[i]; 
            }
        }
        ///
        //currentPlayer = human;
    }
    else {
        let bestEvaluation = +Infinity;
        for (let i = 0; i < moves.length; i++) {
            if ( moves[i].evaluation < bestEvaluation ) {
                bestEvaluation = moves[i].evaluation;
                bestMove = moves[i];
            }
        }
        /////
        //currentPlayer = senpai;
    }

    return bestMove;
}
