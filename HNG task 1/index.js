// 
// let num = Math.round(Math.random() * 5);

let colours = ["red", "green", "blue", "pink", "yellow", "purple"];
let targetColor = "";
let score = 0;

function startGame() {
    targetColor = colours[Math.floor(Math.random() * 6)];
    document.getElementsByClassName("colour-box").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").innerText = "";
    generateColorOptions();
    let button = document.getElementsByClassName("btn")
    
}
button.attr("Id")
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").innerText = "Correct!";
        score++;
        document.getElementById("score").innerText = score;
    } else {
        document.getElementById("gameStatus").innerText = "Wrong! Try again.";
    }
}

document.querySelector("button").addEventListener("click",startGame());