let playerShow = document.querySelectorAll('.pssButton');
let player;
let computer;
let index
let list = ['Stone','Paper','Scissors']
let interval;
let lable = 1;
let playerScore = 0;
let computerScore = 0;
const result = document.getElementById('player-score');
const score = document.getElementById('hands');

function flash(){
  clearInterval(interval);
  interval = setInterval(() => {
  computerGesture();
  }, 100);
}


function play(){
  playerShow.forEach(gesture => {
  if (lable === 1){
    gesture.onclick = () => {player = gesture.value;
    clearInterval(interval);
    computer = list[index];  
    ifwin(player, computer);
    lable = 0;
    } 
  }
  else {
    result.innerText = '请按play键开始';
  }
})
}  


//按play键
let startButton = document.getElementById('startGameButton');
startButton.onclick = () => {
  lable = 1;
  result.innerText = '请出拳';
  flash();  
  play();
}

//按exit键
let exitButton = document.getElementById('endGameButton');
exitButton.onclick = () => {
  clearInterval(interval);
  lable = 0;  
  result.innerText = '游戏结束';
  playerScore = 0;
  computerScore = 0;
  score.innerText = `比分：${playerScore}:${computerScore}`;
}



function computerGesture(){
  const comgesture = document.getElementById('comgesture');
  index = Math.floor(Math.random()*3);
  switch(index){
    case 0:
      comgesture.innerText = `✊`;
      break;
    case 1:
      comgesture.innerText = `🤚`;
      break;
    case 2:
      comgesture.innerText = `✌`;
      break;
  }
}
  



function ifwin(pl,com){
  if (lable === 1)
    if (pl === com){
      console.log('draw');
      result.innerText = '平局！';
    }
    else if (((pl === 'Stone') && (com === 'Scissors')) || ((pl === 'Scissors') && (com === 'Paper')) || ((pl === 'Paper') && (com === 'Stone'))){
      console.log('win');
      result.innerText = '你赢了，电脑输了！';
      playerScore += 1;
      score.innerText = `比分：${playerScore}:${computerScore}`;
    }
    else{
      console.log('lose');
      result.innerText = '你输了，电脑赢了！';
      computerScore += 1;
      score.innerText = `比分：${playerScore}:${computerScore}`;
    }
  else {
    result.innerText = '请按play键开始';
  }

}