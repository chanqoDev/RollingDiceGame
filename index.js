// var playerName1 = prompt("First Player Name");
// var playerName2 = prompt("Second Player name");


//
// document.querySelector('.nameTag').innerText = `${playerName1} `;
// document.querySelector('.nameTag2').innerText = `${playerName2} `;


// 1 - 6 random Number Generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// this will be generating dice "1 - 6 .png"
var randomDiceImage =  `images/dice${randomNumber1}.png`

document.querySelector(".dice .img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".dice .img2").setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳️💰 Play 1 wins!";

}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Play 2 Wins! ⛳️💰";
}else {
  document.querySelector("h1").innerHTML = "DRAW!🛤🪙";
}
