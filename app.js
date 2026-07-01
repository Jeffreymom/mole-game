const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let timeId = null;

let hitPosition;
let result = 0;
let currentTime = 60;


function randomSquare(){
    squares.forEach((square) =>{
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id
        
}

squares.forEach((square) =>{
    square.addEventListener("mousedown",() =>{
        if(square.id == hitPosition){
            result++;
            score.textContent =result;
            hitPosition =null;
        
        }
    })
})
    
function moveMole() {
    let timeId =setInterval(randomSquare,500);
}


moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime;
    if(currentTime==0){
        clearInterval(countDownTimeId);
        clearInterval(timeId);
        alert("Game Over!! Your final score is" +     result);

    }
}

let countDownTimeId = setInterval(countDown,1000);