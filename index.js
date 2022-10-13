var dices = [
"images/dice1.png", 
"images/dice2.png", 
"images/dice3.png",
"images/dice4.png", 
"images/dice5.png", 
"images/dice6.png"
];
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

function circleAnim() {
    dice1.classList.add("dice-img");
    dice2.classList.add("dice-img");
}



function removeAnim() {
    setTimeout(() => {
      dice1.classList.remove("dice-img");
      dice2.classList.remove("dice-img");
    }, 600)
  }
  

function randomize() {
    removeAnim();

    var x = Math.floor(Math.random() * 6) ;
    var y = Math.floor(Math.random() * 6) ;

    dice1.src = dices[x] ;
    dice2.src = dices[y] ;
    
    var winner = document.querySelector("h1");
    setTimeout(() => {
        if(x===y) {
            winner.innerText="Too bad. That's a draw. Nobody wins.";
            winner.style.fontSize="5rem";
        } else if(x>y) {
            winner.innerText="Player 1 wins!!";
        } else {
            winner.innerText="Player 2 wins!!";
        }
      }, 600)

    
    circleAnim();
}






