var p1s = 0;
var p2s = 0;
function random() {
    var x = Math.floor(Math.random()*3);
    return x-2?(x-1?"rock":"paper"):"scissors";
}
function addListeners() {
    document.querySelector(".rock").addEventListener("click", function() {play("rock");});
    document.querySelector(".paper").addEventListener("click", function() {play("paper");});
    document.querySelector(".scissors").addEventListener("click", function() {play("scissors");});
}
function play(x) {
    var y = random();
    switch(x+y) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            edit("player");
            break;
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            edit("computer");
            break;
        default:
            edit("tie");
            break;
    }
}
function edit(x) {
    var y = "";
    switch(x) {
        case "player":
            p1s++;
            y = "Player Wins!"
            break;
        case "computer":
            p2s++;
            y = "Computer Wins!"
            break;
        case "tie":
            y = "Tie!";
            break;
    }
    document.getElementById("player").innerHTML = p1s;
    document.getElementById("computer").innerHTML = p2s;
    document.getElementById("resulttext").innerHTML = y;
}
addListeners();