const doc = document.getElementById("robot");
const hum = document.getElementById("human");
const gameButton = document.getElementById("gamebtn");

let player1;
let gamelevel;

function playersDet(first, second) {
    this.first = first;
    this.second = second;
    this.display = function() {
        alert(this.first + " " + this.second);
    }
    
}

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

function changeLevel() {
    for(let j = 1; j<=5; j++) {
        document.getElementById(j).addEventListener("click", function(){
            for(let i = 1; i <= 5 ; i++) {
                document.getElementById(i).classList.remove("selected");
            }            
            document.getElementById(j).classList.add("selected");
            gamelevel = j;
            alert("game level: " + j);
        })
    }
};
changeLevel();

function startGame(gamelevel, playersDet) {
    var playIcon;
    var player;
    if(player1 === "robot") {
        player = new playersDet("robot", "human");
    }
    else if (player1 === "human") {
        player = new playersDet("human", "robot");
    }
    
    player.display();
}

gameButton.addEventListener("click", function() {
    alert("game has started now!!!");
    startGame(gamelevel, playersDet);
})