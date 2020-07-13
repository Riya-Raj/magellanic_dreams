const doc = document.getElementById("robot");
const hum = document.getElementById("human");
const gameButton = document.getElementById("gamebtn");

let player1;
let gamelevel;

doc.addEventListener("click", function() {
    doc.classList.add("selected");
    hum.classList.remove("selected");
    player1 = "robot";    
});

hum.addEventListener("click", function() {
    hum.classList.add("selected");
    doc.classList.remove("selected");
    player1 = "human";    
});

function playerOne() {
    return player1;
}

/////////////////////////////////////////////////
///////////////////////////////////////////////
const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const withFriend = document.getElementById("withfriend");
const withRobot = document.getElementById("gamebtn");

var gameArray = new Array();
var gameData = new Array(9);
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

withFriend.addEventListener("click", function() {    
    alert("Start playing with your friend. Let's see who wins!!");
    humanWithFriend();
    if (winner) {
        return;
    }
})
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///// Robot Senpai vs Human ///////////////////////////////////////////

let currentPlayer;
let senpai;
let human;
let senpaiImage;
let humanImage;


gameButton.addEventListener("click", function() {
    alert("game has started now!!!");
    startGame();
})

function startGame() {

    playerOne();
    if(player1 === "robot") {
        senpai = 'X';
        human = 'O';
        senpaiImage = imgX;
        humanImage = imgY;
        currentPlayer = senpai;
    }
    else if (player1 === "human") {
        senpai = 'O';
        human = 'X';
        senpaiImage = imgY;
        humanImage = imgX;
        currentPlayer = human;
    }    
    playTheGame();
    alert(player1);
}


