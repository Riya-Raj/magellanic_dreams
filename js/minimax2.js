//////////////////////////////////////////

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function isWinner(gameData, player){
    for(let i = 0; i < COMBOS.length; i++){
        let won = true;

        for(let j = 0; j < COMBOS[i].length; j++){
            let id = COMBOS[i][j];
            won = gameData[id] == player && won;
        }

        if(won){
            return true;
        }
    }
    return false;
}

function isTie(gameData){
    let isBoardFill = true;
    for(let i = 0; i < gameData.length; i++){
        isBoardFill = gameData[i] && isBoardFill;
    }
    if(isBoardFill){
        return true;
    }
    return false;
}

function minimax(gameData, currentPlayer) {

    if( isWinner(gameData, senpai) ) return { evaluation : +10 };
    if( isWinner(gameData, human)      ) return { evaluation : -10 };
    if( isTie(gameData)                     ) return { evaluation : 0 };

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
