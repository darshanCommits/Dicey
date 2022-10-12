var dices = [
"images/dice1.png", 
"images/dice2.png", 
"images/dice3.png",
"images/dice4.png", 
"images/dice5.png", 
"images/dice6.png"
];

function randomize() {
    var x = Math.floor(Math.random() * dices.length) ;
    var y = Math.floor(Math.random() * dices.length) ;
    document.querySelector(".img1").src= dices[x] ;
    document.querySelector(".img2").src= dices[y] ;

    var winner = document.querySelector("h1");

    if(x===y) {
        winner.innerText="Too bad. That's a draw. Nobody wins.";
        winner.style.fontSize="5rem";
    }
    else if(x>y) {
        winner.innerText="Player 1 wins!!";
    } else {
        winner.innerText="Player 2 wins!!";
    }
}





