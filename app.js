const squares = document.querySelectorAll(".square");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let hitPosition;
let result = 0;
let currentTime = 60;
let moleTimerId;
let countDownTimerId;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });

    square.addEventListener("touchstart", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    moleTimerId = setInterval(randomSquare, 700);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(moleTimerId);
        alert("Game Over! Your score is " + result);
    }
}

moveMole();

countDownTimerId = setInterval(countDown, 1000);