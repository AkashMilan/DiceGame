var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImages="dice"+randomNumber1+".png";
var player1=document.querySelectorAll("img")[0];
player1.setAttribute("src",randomDiceImages);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImages="dice"+randomNumber2+".png";
var player2=document.querySelectorAll("img")[1];
player2.setAttribute("src",randomDiceImages);
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw !";
}
