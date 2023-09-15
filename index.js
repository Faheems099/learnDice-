// Player1=prompt('Typer player 1 Name')
// Player2=prompt('Typer player 2 Name')
var play1 = Math.floor(Math.random()*6)+1;
var play2 = Math.floor(Math.random()*6)+1;
console.log(play1)
console.log(play2)
document.body.querySelector(".img1").src=`./images/dice${play1}.png`
document.body.querySelector(".img2").src=`./images/dice${play2}.png`
if(play1>play2){
    document.querySelector('.container h1').textContent=`🚩 Player 1 Won`
}
else if(play2>play1){
    document.querySelector('.container h1').textContent=` Player 2  Won 🚩`
}
else{
    document.querySelector('.container h1').textContent=`🚩 Draw 🚩`   
}


