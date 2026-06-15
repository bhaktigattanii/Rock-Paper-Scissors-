const score = document.getElementById("score");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

const startScreen = document.getElementById("choice");
const compareScreen = document.getElementById("compare");
const resultScreen = document.getElementById("results")

const youPicked = document.getElementById("you-picked");
const housePicked = document.getElementById("house-picked");

const userDiv =  document.getElementById("user-div");
const houseDiv = document.getElementById("house-div");

const finalSentance = document.getElementById("final");
const finalDiv =  document.getElementById("final-div");

let userchoice="";
paper.addEventListener("click",compare);
rock.addEventListener("click",compare);
scissors.addEventListener("click",compare);
let initialscore = Number(localStorage.getItem("score")) || 0;

score.textContent = initialscore;
function compare(event)
{
    userchoice = event.currentTarget.id;
    const img = document.createElement("img");
    img.src = `icon-${userchoice}.svg`;
userDiv.classList.remove("rock", "paper", "scissors");

    userDiv.classList.add(userchoice);
    
    userDiv.innerHTML = "";
    userDiv.appendChild(img);

    startScreen.classList.remove("active");
    compareScreen.classList.add("active");

    let choice="";
    setTimeout(() => {
         choice = choices[Math.floor(Math.random() * 3)];
        const img = document.createElement("img");
        img.src = `icon-${choice}.svg`;
        houseDiv.classList.remove("rock", "paper", "scissors");
        houseDiv.classList.add(choice);
        houseDiv.innerHTML = "";
        houseDiv.appendChild(img);
}, 2000);


    setTimeout(() => {
        
        winner(userchoice,choice);
        
}, 2000);

}

let choices = ["rock","paper","scissors"];

function winner(choice1 , choice2){
   
    if((choice1 === "rock" && choice2=== "paper") || (choice1 === "paper" && choice2 === "scissors")  || (choice1 === "scissors" && choice2 === "rock")){
            houseDiv.classList.add("winner");
                finalSentance.textContent = "YOU LOSE";
                finalDiv.classList.add("final");
               const  button = document.createElement("button");
                button.innerText = "PLAY AGAIN";
                button.classList.add("play-again");
                finalDiv.appendChild(button);
                initialscore = initialscore-1;
                score.textContent = initialscore;
                localStorage.setItem("score", initialscore);
                button.addEventListener("click",startAgain);
    }
    else if( (choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock")  || (choice1 === "scissors" && choice2 === "paper")){
        userDiv.classList.add("winner");
        finalSentance.textContent = "YOU WIN";
         finalDiv.classList.add("final");
           const button = document.createElement("button");
                button.innerText = "PLAY AGAIN";
                button.classList.add("play-again");
                finalDiv.appendChild(button);
                button.addEventListener("click",startAgain);
                initialscore = initialscore+1;
                score.textContent = initialscore;
                localStorage.setItem("score", initialscore);
    }

    else{
        finalSentance.textContent = "TIE";
        finalDiv.classList.add("final");
       const  button = document.createElement("button");
        button.innerText = "PLAY AGAIN";
        button.classList.add("play-again");
        finalDiv.appendChild(button);
        score.textContent = initialscore;
        localStorage.setItem("score", initialscore);
        button.addEventListener("click",startAgain);
    }

   
}


function startAgain(){
    
   
    startScreen.classList.add("active");
    compareScreen.classList.remove("active");
    userDiv.classList.remove("winner", "rock", "paper", "scissors");

    houseDiv.classList.remove("winner", "rock", "paper", "scissors");

    userDiv.innerHTML = "";

    houseDiv.innerHTML = "";

    finalSentance.textContent = "";

     const oldButton = finalDiv.querySelector(".play-again");

    if (oldButton) oldButton.remove();

    score.textContent = initialscore;
}

