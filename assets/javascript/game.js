var listofwords = ["thor", "spiderman", "hulk", "thanos", "antman", 
"deadpool","wolverine", "juggernaut", "quicksilver", "cable", "magneto",
"gamora","storm", "mystique"];
var randomNumber= Math.floor(Math.random() * listofwords.length);
var pickedWord = listofwords[randomNumber];
var rightWord = [];
var wrongLetter = [];
var underscore = [];
var userLetter =[];
var guessCount = 10;
var win = [];
var lose = [];

console.log(pickedWord);

var HtmlUnderScore = document.getElementById("underscores");
// var HtmlRightWord = document.getElementsByClassName("rightGuess");
var HtmlwrongLetter = document.getElementById("wrongGuess");
var HtmlCountDown = document.getElementById("attempts");
var HtmlWin = document.getElementById("win");

var generateUnderscore = () => {
    for (var i = 0; i < pickedWord.length; i++){
        underscore.push("_");
    }
    return underscore;
}
console.log(generateUnderscore());

document.addEventListener("keypress", (event) => {
    var userLetter = String.fromCharCode(event.keyCode);
    for (var x = 0; x < pickedWord.length; x++){
    if (pickedWord[x] === userLetter){
        console.log(userLetter);
        underscore[x] = userLetter;
        HtmlUnderScore.innerHTML = underscore.join(" ");
    }
    // console.log(pickedWord.indexOf(userLetter))
    if (pickedWord.indexOf(userLetter) > -1 ) {

        rightWord.push(userLetter);
        underscore[pickedWord.indexOf(userLetter)] = userLetter;
        HtmlUnderScore.innerHTML = underscore.join(" ");
        if (underscore.join("") == pickedWord){
            alert("You Win");
        }
        console.log(underscore);
    }
    else { 
        wrongLetter.push(userLetter);

        console.log(wrongLetter);
        HtmlCountDown.innerHTML = guessCount;
        HtmlwrongLetter.innerHTML = wrongLetter.join(" ");
        console.log(HtmlCountDown);
        HtmlCountDown.innerHTML = "#" + guessCount;
        guessCount--;
        if (guessCount === 0) {
            alert("Game Over")
            return;        
        }
    // }
    }}
});











