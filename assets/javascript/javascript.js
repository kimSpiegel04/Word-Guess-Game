// game start variables
let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wrongLetters = [];

//array of rugby slang
let rugbyWords = [
    'kit', 
    'shoot the boot', 
    'ruggers', 
    'sin bin', 
    'back', 
    'forward', 
    'hospital pass',
    'year of the piranha' 
];
let computerPick = rugbyWords[Math.floor(Math.random() * rugbyWords.length)];
console.log(computerPick);
let guessesMade = [];
let gameWord =computerPick.split('');
console.log(gameWord);


//get new computer choice and split that choice
var computerPickFunc=function(){
    computerPick;

}

//split letters & check for win
var checkForWin=function(){
    gameWord =computerPick.split('');
    var word = document.getElementById('rightLetters');

    //turn letters into underscores
    for(var i=0; i<gameWord.length; i++){
        var underScore=document.createElement('span')
        if(gameWord[i]==" "){
            underScore.textContent="-";
            word.appendChild(underScore);
        } else {
            
            underScore.textContent=" _ ";
            word.appendChild(underScore);
        }
        
        for(var j=0; j<gameWord.length; j++){
            for(var k=0; k<guessesMade.length; k++){
                var replaceLetter=document.createElement('span')
                var y = gameWord[j].includes(guessesMade[k]);
                if(y){
                    console.log('yes');
                    replaceLetter.textContent=gameWord[j];
                    word.appendChild(replaceLetter);
                } else {
                    console.log('nope');
                }
            }
        }
    }
}

//check for win
// var checkForWin=function(){
//     var word = document.getElementById('rightLetters');
//     for(var j=0; j<gameWord.length; j++){
//         for(var k=0; k<guessesMade.length; k++){
//             var replaceLetter=document.createElement('span')
//             var y = gameWord[j].includes(guessesMade[k]);
//             if(y){
//                 console.log('yes');
//                 replaceLetter.textContent=gameWord[j];
//                 word.appendChild(replaceLetter);
//             } else {
//                 console.log('nope');
//             }
//         }
//     }
// }


splitLetters();


document.onkeyup=function(event){
    computerPickFunc();
    let userGuess=event.key.toLowerCase();
    guessesMade.push(userGuess);
    checkForWin();

    console.log(guessesMade);
}






//split computerPick
// var gameWordFunc = function(){
//     var gameWord=computerPick.split('');
//     console.log(gameWord);
// }















//initial display 
// var word = document.getElementById('rightLetters');
// var initialDisplay = function(){
//     for(var i=0; i<computerPick.length; i++){
//         console.log(' _ ');

//         // document.getElementById("rightLetters").innerHTML = (" _ ");
//     }
// }
// initialDisplay();

// if (computerPick==rugbyWords[0]){
//     document.getElementById('rightLetters').innerHTML=('_ _ _');
// } else if (computerPick==rugbyWords[1]){
//     document.getElementById('rightLetters').innerHTML=('_ _ _ _ _  _ _ _  _ _ _ _');
// } else if (computerPick==rugbyWords[2]){
//     document.getElementById('rightLetters').innerHTML=('_ _ _ _ _ _ _');
// } else if (computerPick==rugbyWords[3]){
//     document.getElementById('rightLetters').innerHTML=('_ _ _  _ _ _');
// }    else if (computerPick==rugbyWords[4]){
//     document.getElementById('rightLetters').innerHTML=('_ _ _ _ _  _ _ _  _ _ _ _');