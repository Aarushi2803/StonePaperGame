   
// uper vale ki jagah ye kroo kyuki refresh ye refresh nhi hoga LOCAL STORAGE   
let score = JSON.parse(localStorage.getItem('score')) ||  {  
    wins: 0,
    losses: 0,   
    ties: 0
};

updateScoreElement();

// win lose tie

 function playerGame(playerMove){
   
  // calling a finction
  const computermove = pickcomputermove();

let result = '';

  if(playerMove==='Scissors'){
    if(computermove === 'Rock'){
        result = 'You lose.';
    }
    else if(computermove==='Paper'){
        result = 'You Win.';
    }
    else if(computermove==='Scissors'){
        result='Tie.';
    }
  } 
  else if(playerMove==='Paper'){
    if(computermove==='Rock'){
        result = 'You Win.';
    }
    else if(computermove==='Paper'){
        result='Tie.';  
    } 
    else if(computermove==='Scissors'){
        result='You Lose.'; 
    }
  } 
  else if(playerMove==='Rock'){
    if(computermove === 'Rock'){
    result = 'Tie.';
 }
 else if(computermove==='Paper'){
   result = 'You lose.';
 } 
 else if(computermove==='Scissors'){
    result='You Win.';
 }
  } 

//  win lose tie marks
  if(result==='You Win.'){
    score.wins += 1;
 }
 else if(result==='You lose.'){
    score.losses += 1;
 }
 else if(result==='Tie.'){
    score.ties += 1;
 }

//  save to local storage
localStorage.setItem('score',JSON.stringify(score)); 

updateScoreElement(); 

// for result
document.querySelector('.js-result').style.display = "block";
document.querySelector('.js-result').innerHTML = result;

// your and compurt moves   
document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}.png"  height="100px" width="80">
<img src="images/${computermove}.png" height="100px" width="100px">  
Computer`;

} 

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;  
} 

//  computermove selction
function pickcomputermove(){
    const randomNumber = Math.random();
    let computermove = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3){
    computermove = 'Rock'; 
    } 
    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computermove = 'Paper';
    } 
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computermove = 'Scissors';
    } 
    return computermove; 
}
