
let colours = ["red", "green", "blue", "pink", "yellow", "purple"];
let targetColor = "";
let button = document.getElementsByClassName("btn")
    let score = 0;

document.getElementById("colour-box").style.backgroundColor="blue";

function startGame() {
    let num = Math.floor(Math.random() * 6)
    targetColor = colours[num];
    document.getElementById("colour-box").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").innerText = "";
    let click = document.getElementsByClassName("box");
    for (let index = 0; index < click.length; index++) {
        click[index].onclick = () => checkGuess(click[index].getAttribute("id"))
    } 
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").innerText = "Correct!";
        score++;
        document.getElementById("score").innerText = score;
    } else {
        document.getElementById("gameStatus").innerText = "Wrong! Try again.";
        score=0;
        document.getElementById("score").innerText = score;
    }
}

startGame();

let restart = document.querySelector("button");
restart.addEventListener("click", startGame)