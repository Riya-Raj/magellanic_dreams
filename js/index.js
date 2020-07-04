const doc = document.getElementById("robot");
const hum = document.getElementById("human");



/*const player = new Object;
let OPPONENT;*/

doc.addEventListener("click", function() {
    
    doc.classList.add("selected");
    hum.classList.remove("selected");
});

hum.addEventListener("click", function() {
    /*OPPONENT = "robot";
    player.human="X";
    player.robot = "O";*/
    hum.classList.add("selected");
    doc.classList.remove("selected");
});

function changeLevel() {
    for(let j = 1; j<=5; j++) {
        document.getElementById(j).addEventListener("click", function(){
            for(let i = 1; i <= 5 ; i++) {
                document.getElementById(i).classList.remove("selected");
            }            
            document.getElementById(j).classList.add("selected");
        })
    }
};
changeLevel();

