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

gameButton.addEventListener("click", function() {
    alert("game has started now!!!");
    startGame();
})

function playersDet(first, second) {
    this.first = first;
    this.second = second;
    this.display = function() {
        alert(this.first + " " + this.second);
    }
    
}