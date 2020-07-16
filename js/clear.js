
function clearBoard() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,450,450);
    ctx.beginPath();
    boardDetails();

    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    gameArray = [];
}
