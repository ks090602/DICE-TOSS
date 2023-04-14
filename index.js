var randomNum1 = Math.random();
randomNum1*=6;
randomNum1++;
randomNum1 = Math.floor(randomNum1);

var randomDiceImage1 = "dice" + randomNum1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var newImage1 = document.querySelectorAll("img")[0];
newImage1.setAttribute("src" , randomImageSource1);

var randomNum2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var newImage2 = document.querySelectorAll("img")[1];
newImage2.setAttribute("src" , randomImageSource2);

if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML = "🏆 PLAYER1 WINS!";
}
else if(randomNum2>randomNum1)
{
    document.querySelector("h1").innerHTML = "🏆 PLAYER2 WINS!";
}
else // its a draw
{
    document.querySelector("h1").innerHTML = "ITS A DRAW 😕!"
}


