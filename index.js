
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png"
var randomImages = "images/" + randomDiceImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImages2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins  &#128541"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins  &#128540"
}
else {
    document.querySelector("h1").innerHTML = "Draw &#129322	"
}