const doc = document.getElementById("robot");
const hum = document.getElementById("human");
const gameButton = document.getElementById("gamebtn");

let player1;
let gamelevel;
let board = [];

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
imgX.src = "img/x1.png";

var imgY = new Image();
imgY.src = "img/o1.png";

withFriend.addEventListener("click", function() {    
    alert("Start playing with your friend. Let's see who wins!!");
    humanWithFriend();
    if (winner) {
        return;
    }
})

///// Robot Senpai vs Human ///////////////////////////////////////////

let currentPlayer;
let senpai;
let human;
let senpaiImage;
let humanImage;



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

function startGame(gameLevel) {

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
    alert(player1 + ' ' + gamelevel);
}


