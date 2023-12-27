let scoreBoard = document.getElementById("scoreboard")
let scoreBoardtwo = document.getElementById("scoreboard2")
let score = 0
let score2 = 0

function button1(){
  score += 1 
  scoreBoard.textContent = score 
}

function button2(){
  score += 2 
  scoreBoard.textContent = score 
}

function button3(){
  score += 3 
  scoreBoard.textContent = score 
}



function buttona(){
  score2 += 1 
  scoreBoardtwo.textContent = score2 
}

function buttonb(){
  score2 += 2 
  scoreBoardtwo.textContent = score2 
}

function buttonc(){
  score2 += 3 
  scoreBoardtwo.textContent = score2 
}



